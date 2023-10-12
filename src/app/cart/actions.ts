"use server"
import {revalidateTag} from "next/cache";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import Stripe from "stripe";
import {executeGraphql} from "@/app/api/graphqlApi";
import {CartRemoveProductDocument, CartSetProductQuantityDocument} from "@/gql/graphql";
import {getCartByIdFromCookie} from "@/app/api/cart";


export const removeITem=(itemId: string)=>{
    return executeGraphql(
        {
            query: CartRemoveProductDocument,
            variables:{
                itemId
            }
        }
    )

}
export async function changeItemQuantity(
    productId: string,
    quantity: number,
) {
    const changeItem =  executeGraphql({
        query: CartSetProductQuantityDocument,
        variables: {
            productId,
            quantity,
            hash: `${crypto.randomUUID()}-${crypto.randomUUID()}`,
        },
        // cache: "no-store",
        // next: {
        //     tags: ["(.)cart"],
        // },
    });

    revalidateTag("cart");
    return changeItem;
}

export async function handlePaymentAction() {
    "use server"
    if (!process.env.STRIPE_SECRET_KEY) {
        throw new Error("Missing STRIPE_SECRET_KEY")
    }

    const cart = await getCartByIdFromCookie();
    if (!cart){
        return
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2023-08-16",
        typescript: true
    })

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        metadata: {
            cartId: cart.id,
        },
        line_items: cart.orderItems.map((item) => ({
            price_data: item.product
                ? {
                    currency: "usd",
                    product_data: {
                        name: item.product.name,
                        // description: item.product.description,
                        // images: item.product.images.map((i) => i.url),
                    },
                    unit_amount: item.product.price,
                }
                : undefined,
            quantity: item.quantity,
        })),
        mode: "payment",
        success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `http://localhost:3000/cart/canceled`,
    });

    if (!session.url){
        throw new Error("Something went wrong")
    }
    cookies().set("cartId", "")
    redirect(session.url)

}
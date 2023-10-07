import {revalidateTag} from "next/cache";
import {cookies} from "next/headers";
import {
    CartCreateDocument,
    CartGetByIdDocument, CartUpsertProductDocument,
} from "@/gql/graphql";
import {executeGraphql} from "@/api/graphqlApi";

export const getOrCreateCart = async () => {
    const cart = await getCartByIdFromCookie();
    if (cart) {
        return cart;
    }

    const { createOrder: newCart } = await executeGraphql({
        query: CartCreateDocument,
        variables: {},
        cache:
            "no-store",
    });
    if (!newCart) {
        throw new Error("Failed to create cart");
    }

    cookies().set("cartId", newCart.id, {
        httpOnly: true,
        sameSite: "lax",
        // secure: true
    });

    return newCart;
};

export const getCartByIdFromCookie = async () => {
    const cartId = cookies().get("cartId")?.value;
    if (cartId) {
        const { order: cart } = await executeGraphql({
            query: CartGetByIdDocument,
            variables: { id: cartId },
            next: { tags: ["cart"], revalidate: 0 },
        });

        if (cart) {
            return cart;
        }
    }
};


// export async function addToCart(orderId: string, productId: string) {
//     const {product} = await executeGraphql({
//         query: ProductGetByIdDocument,
//         variables:{
//             id: productId
//         }
//     })
//     if (!product){
//         throw new Error("Product not found");
//     }
//     return await executeGraphql({
//         query: CartAddProductDocument,
//         variables: {
//             orderId,
//             productId,
//             total: product.price
//         }
//     })
//
//
// }
export const addOrUpdateProductToCart = async (
    cartId: string,
    productId: string,
    orderItemId: string | undefined,
    quantity: number,
    total: number,
) => {
    await executeGraphql({
        query: CartUpsertProductDocument,
        variables: {
            cartId,
            productId,
            orderItemId,
            quantity,
            total,
        },
        cache: "no-store",
    });
    revalidateTag("cart");
}

// export const addOrUpdateProductToCart = async (
//     cartId: string,
//     productId: string | undefined,
//     orderItemId: string | undefined,
//     quantity: number,
//     total: number | undefined,
// ) => {
//     await executeGraphql({
//         query: CartUpsertProductDocument,
//         variables: {
//             cartId,
//             productId,
//             orderItemId,
//             quantity,
//             total,
//         },
//         cache: "no-store",
//     });
//
//     revalidateTag("cart");
// }
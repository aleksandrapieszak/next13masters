"use server"
import {revalidateTag} from "next/cache";
import {executeGraphql} from "@/api/graphqlApi";
import {CartSetProductQuantityDocument} from "@/gql/graphql";


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
        //     tags: ["cart"],
        // },
    });

    revalidateTag("cart");
    return changeItem;
}

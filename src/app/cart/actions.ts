"use server"

import {executeGraphql} from "@/api/graphqlApi";
import {CartSetProductQuantityDocument} from "@/gql/graphql";


export async function changeItemQuantity(
    productId: string,
    quantity: number,
) {
    return executeGraphql({
        query: CartSetProductQuantityDocument,
        variables: {
            productId,
            quantity,
            hash: `${crypto.randomUUID()}-${crypto.randomUUID()}`,
        },
        cache: "no-store",
        next: {
            tags: ["cart"],
        },
    });
}

import type {TypedDocumentString} from "@/gql/graphql";

export const executeGraphql = async <TResult, TVariables> (query: TypedDocumentString<TResult, TVariables>, variables: TVariables): Promise<TResult> => {
    if (!process.env.GRAPHQL_URL){
        throw TypeError("Graphql_url is not defined")
    }
    const res = await fetch(
        process.env.GRAPHQL_URL,
        {
            method:"POST",
            body: JSON.stringify(
                {query,variables}
            ),
            headers:{
                "Content-Type":"Application/json",
            }
        }
    )

    type GraphqlResponse<T> =
        | { data?: undefined; errors: { message: string }[] }
        | { data: T, errors?: undefined };

    const graphqlResponse =
        (await res.json()) as GraphqlResponse<TResult>;

    if (graphqlResponse.errors) {
        const errorMessage = graphqlResponse.errors[0] ? graphqlResponse.errors[0].message : "";
        throw TypeError(`GraphQL Error: ${errorMessage}`, {
            cause: graphqlResponse.errors,
        });
    }

    return graphqlResponse.data;
};
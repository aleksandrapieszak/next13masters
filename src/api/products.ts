import {notFound} from "next/navigation";
import {
    GetProductsByPageDocument, ProductGetByIdDocument,
    ProductsGetByCategorySlugDocument,
    ProductsGetListDocument,
} from "@/gql/graphql";
import {executeGraphql} from "@/api/graphqlApi";

// type ProductResponseItem = {
//     id: string,
//     title: string,
//     price: number,
//     description: string
//     category: string
//     image: string
//
// }

// export const getProductList = async (): Promise<ProductItemType[]> => {
//
//     const res = await fetch(
//         "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmyqf41m07os01uo5k8vcdua/master",
//         {
//             method: "POST",
//             body: JSON.stringify({
//                 query: /* GraphQL */ `
//                     query GetProductsList {
//                         products {
//                             id
//                             name
//                             description
//                             images {
//                                 url
//                             }
//                             price
//                         }
//                     }
//                 `
//             }),
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         });
//
//     type GraphqlResponse<T> =
//         | { data?: undefined; errors: { message: string }[] }
//         | { data: T, errors?: undefined }
//     type ProductsGraphqlResponse = {
//         data: {
//             products: {
//                 id: string
//                 name: string
//                 description: string
//                 images: {
//                     url: string
//                 }[]
//                 price: number
//             }[]
//         }
//     }
//     const graphqlResponse = (await res.json()) as GraphqlResponse<ProductsGraphqlResponse>;
//
//     if (graphqlResponse.errors){
//         throw TypeError(graphqlResponse.errors[0].message)
//     }
//
//
//     const products = graphqlResponse.data.products.map(p =>{
//         return {
//             id: p.id,
//             category:p.name,
//             name: p.name,
//             price: p.price,
//             description: p.description,
//             coverImage: {
//                 src: p.images[0].url,
//                 alt: p.name,
//             }
//
//         }
//     })
//     console.log(products.length)
//     return products
// }

// export const getProductList = async () => {
//
//     const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
//     const productsResponse = (await res.json()) as ProductResponseItem[];
//
//     //mapowanie
//     return productsResponse.map(
//         productResponseItemToProductResponseType
//     )
// }


// export const getProductsByPage = async (page: number) => {
//     const productsPerPage = 5;
//     const offset = (page - 1) * productsPerPage;
//
//     const res = await fetch(
//         `https://naszsklep-api.vercel.app/api/products?take=${productsPerPage}&offset=${offset}`,
//     );
//
//     const productsResponse = (await res.json()) as ProductResponseItem[];
//
//     return productsResponse.map(productResponseItemToProductResponseType);
// };

//



export const getProductList = async () => {

    const graphqlResponse = await executeGraphql(
        ProductsGetListDocument,
        {}
    )

    return graphqlResponse.products;
    // return graphqlResponse.products.map(p => ({
    //     id: p.id,
    //     category: p.categories[0]?.name || "",
    //     name: p.name,
    //     price: p.price,
    //     description: p.description,
    //     coverImage: p.images[0] && {
    //         src: p.images[0].url,
    //         alt: p.name,
    //     },
    // }));

}

export const getProductsByPage = async (page: number) => {
    const productsPerPage = 6;
    const skip = (page - 1) * productsPerPage;
    const graphqlResponse = await executeGraphql(
        GetProductsByPageDocument,
        {skip, first:productsPerPage}
    )

    return graphqlResponse.products;

    // return graphqlResponse.products.map(p => ({
    //     id: p.id,
    //     category: p.categories[0]?.name || "",
    //     name: p.name,
    //     price: p.price,
    //     description: p.description,
    //     coverImage: p.images[0] && {
    //         src: p.images[0].url,
    //         alt: p.name,
    //     },
    // }));

};

export const getProductsByCategorySlug=async (categorySlug: string)=>{
    const graphqlResponse = await executeGraphql(
        ProductsGetByCategorySlugDocument,
        {slug: categorySlug}
    )

    return graphqlResponse.categories[0]?.products;

    // return products.products;

    // return products?.map(p => ({
    //     id: p.id,
    //     category: p.categories[0]?.name || "",
    //     name: p.name,
    //     price: p.price,
    //     description: p.description,
    //     coverImage: p.images[0] && {
    //         src: p.images[0].url,
    //         alt: p.name,
    //     },
    // }));

}

export const getProductById=async (productId: string) => {
    const res = await executeGraphql(
        ProductGetByIdDocument,
        {id: productId}
    )

    const product = res.product;

    if (!product) {
        notFound();
    }

    return res.product;

    // return {
    //     id: product.id,
    //     name: product.name,
    //     category: product.categories[0]?.name || "",
    //     price: product.price,
    //     description: product.description,
    //     coverImage: product.images[0] &&{
    //         src: product.images[0].url || "",
    //         alt: product.name,
    //     },
    // };
};

// export const getProductById = async (id: ProductResponseItem["id"]) => {
//
//
//     const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`)
//     const product = (await res.json()) as ProductResponseItem;
// }


// export const productResponseItemToProductResponseType = (product: ProductResponseItem): ProductItemType => {
//     return {
//         id: product.id,
//         name: product.title,
//         category: product.category,
//         price: product.price,
//         coverImage: {
//             src: product.image,
//             alt: product.title
//         },
//         description: product.description
//     }
// }
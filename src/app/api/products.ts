import {notFound} from "next/navigation";
import {revalidateTag} from "next/cache";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import {
    CategoriesGetByCategorySlugDocument,
    CategoriesGetListDocument,
    CollectionsGetCollectionBySlugDocument,
    CollectionsGetListDocument,
    GetProductsByPageDocument,
    GetProductsCategoryByPageDocument,
    GetProductsCollectionByPageDocument,
    ProductGetByIdDocument,
    ProductGetVariantsListDocument,
    ProductsGetByCategorySlugDocument,
    ProductsGetListByCollectionSlugDocument,
    ProductsGetListDocument,
    ProductsGetSuggestedListDocument,
    ProductListItemFragment,
    SingleProductColorVariantFragment,
    SingleProductSizeColorVariantFragment,
    SingleProductSizeVariantFragment,
    ProductsGetListSearchDocument,
    ReviewItemFragment,
    ReviewGetByProductIdDocument,
    ReviewCreateDocument,
    ReviewPublishDocument,
    ProductOrderByInput,
    GetProductsByPageOrderByDocument, ProductsGetListOrderByDocument,

} from "@/gql/graphql";

import {executeGraphql} from "@/app/api/graphqlApi";

export const getProductList = async () => {

    const graphqlResponse = await executeGraphql({
            query: ProductsGetListDocument,
            variables: {},
            next:{
                revalidate: 15
            }
        }
    )

    return graphqlResponse.products;


}
export const getProductListOrderBy = async (orderBy: ProductOrderByInput | undefined) => {

    const graphqlResponse = await executeGraphql({
            query: ProductsGetListOrderByDocument,
            variables: {orderBy},
            next:{
                revalidate: 15
            }
        }
    )

    return graphqlResponse.products;


}

export const getProductsByPage = async (page: number
) => {
    const productsPerPage = 6;
    const skip = (page - 1) * productsPerPage;
    const graphqlResponse = await executeGraphql({
            query: GetProductsByPageDocument,
            variables: {skip, first: productsPerPage},

        }
    )

    return graphqlResponse.products;

};

export const getProductsByPageSortBy = async (page: number, orderBy: ProductOrderByInput | undefined,
) => {
    const productsPerPage = 6;
    const skip = (page - 1) * productsPerPage;
    const graphqlResponse = await executeGraphql({
            query: GetProductsByPageOrderByDocument,
            variables: {skip, first: productsPerPage, orderBy},

        }
    )

    return graphqlResponse.products;

};

export const getProductsCategoryByPage = async (categorySlug: string, page: number) => {
    const productsPerPage = 6;
    const slug = categorySlug;
    const skip = (page - 1) * productsPerPage;
    const graphqlResponse = await executeGraphql({
            query: GetProductsCategoryByPageDocument,
            variables: {slug, skip, first: productsPerPage}
        }
    )

    const products = graphqlResponse.productsConnection.edges.map(edge => edge.node);

    return products;

};

export const getProductsByCategorySlug = async (categorySlug: string) => {
    const graphqlResponse = await executeGraphql({
            query: ProductsGetByCategorySlugDocument,
            variables: {slug: categorySlug}
        }
    )

    return graphqlResponse.categories[0]?.products;

}
export const getCategories = async () => {
    const graphqlResponse = await executeGraphql({
        query: CategoriesGetListDocument,
        variables: {}
    });

    return graphqlResponse.categories;
};

export const getCategoriesBySlug = async (slug: string) => {
    const graphqlResponse = await executeGraphql({
        query: CategoriesGetByCategorySlugDocument,
        variables: {
            slug,
        }
    });

    return graphqlResponse.categories[0];
};


export const getProductById = async (productId: string) => {
    const res = await executeGraphql({
            query: ProductGetByIdDocument,
            variables: {
                id: productId
            }
        }
    )

    const product = res.product;

    if (!product) {
        notFound();
    }

    return res.product;


};

export const getCollections = async () => {
    const graphqlResponse = await executeGraphql({
        query: CollectionsGetListDocument,
        variables: {}
    });

    return graphqlResponse.collections;
};

export const getCollectionsBySlug = async (slug: string) => {
    const graphqlResponse = await executeGraphql({
        query: CollectionsGetCollectionBySlugDocument,
        variables: {
            slug,
        }
    });

    return graphqlResponse.collections[0];
};

export const getProductsListByCollectionSlug = async (collection: string) => {
    const graphqlResponse = await executeGraphql(
        {
            query: ProductsGetListByCollectionSlugDocument,
            variables: {
                slag: collection,
            }
        });

    return graphqlResponse.products;
};

export const getProductsCollectionByPage = async (collectionSlug: string, page: number) => {
    const productsPerPage = 2;
    const slug = collectionSlug;
    const skip = (page - 1) * productsPerPage;
    const graphqlResponse = await executeGraphql(
        {
            query: GetProductsCollectionByPageDocument,
            variables:
                {slug, skip, first: productsPerPage}
        }
    )

    return graphqlResponse.productsConnection.edges.map(edge => edge.node);

};
export const getProductVariants = async (id: ProductListItemFragment["id"]) => {
    const graphqlResponse = await executeGraphql({
        query: ProductGetVariantsListDocument,
        variables: {
            id: id,
        }


    },);

    return graphqlResponse.product?.variants as
        | SingleProductColorVariantFragment[]
        | SingleProductSizeColorVariantFragment[]
        | SingleProductSizeVariantFragment[]
        | undefined;
};
// export const getProductVariants = async (id: ProductListItemFragment["id"]) => {
//     const graphqlResponse = await executeGraphql(ProductGetVariantsListDocument, {
//         id: id,
//     });
//
//     return graphqlResponse.product?.variants;
// };

export const getProductsSuggestedList = async (collection: string) => {
    const graphqlResponse = await executeGraphql(
        {
            query: ProductsGetSuggestedListDocument,
            variables: {
                name: collection,
            }
        },
    );

    return graphqlResponse?.products;
};

export const getSearchProductsList = async (search: string) => {
    const graphqlResponse = await executeGraphql({
        query: ProductsGetListSearchDocument,
        variables: {
            search,
        },
    });

    return graphqlResponse.products;
};

export const getProductReview = async (id: string) => {
    const reviewsResponse = await executeGraphql({
        query: ReviewGetByProductIdDocument,
        variables: {
            id,
        },
        next: { tags: ["review"] },
    });

    const review = reviewsResponse.reviewsConnection.edges.map((review) => review.node);

    return review;
};
export const createReview = async (review: ReviewItemFragment) => {
    const reviewId = await executeGraphql({
        query: ReviewCreateDocument,
        variables: {
            ...review,
        },
    });

    return reviewId;
};

export const publishReview = async (reviewID: string) => {
    await executeGraphql({
        query: ReviewPublishDocument,
        variables: {
            id: reviewID,
        },
        cache: "no-store",
    });

        revalidateTag("review");
};

// export const updateAverage = async (id:string, averageRating:number)=>{
//     await executeGraphql({
//         query: ProductUpdateAverageRatingDocument,
//         variables:{
//             id:id,
//             averageRating:averageRating
//         },
//         cache: "no-store",
//
//     })
//     revalidateTag("review");
//
// }
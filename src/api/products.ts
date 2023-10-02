import {notFound} from "next/navigation";
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
    ProductsGetListDocument, ProductsGetSuggestedListDocument,
    ProductListItemFragment,
    SingleProductColorVariantFragment,
    SingleProductSizeColorVariantFragment,
    SingleProductSizeVariantFragment, ProductsGetListSearchDocument,

} from "@/gql/graphql";

import {executeGraphql} from "@/api/graphqlApi";

export const getProductList = async () => {

    const graphqlResponse = await executeGraphql({
            query: ProductsGetListDocument,
            variables: {}
        }
    )

    return graphqlResponse.products;


}

export const getProductsByPage = async (page: number) => {
    const productsPerPage = 6;
    const skip = (page - 1) * productsPerPage;
    const graphqlResponse = await executeGraphql({
            query: GetProductsByPageDocument,
            variables: {skip, first: productsPerPage}
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
import {notFound} from "next/navigation";
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
    ProductListItemFragment,
    ProductsGetByCategorySlugDocument,
    ProductsGetListByCollectionSlugDocument,
    ProductsGetListDocument, ProductsGetSuggestedListDocument,
    SingleProductColorVariantFragment,
    SingleProductSizeColorVariantFragment,
    SingleProductSizeVariantFragment,
} from "@/gql/graphql";
import {executeGraphql} from "@/api/graphqlApi";

export const getProductList = async () => {

    const graphqlResponse = await executeGraphql(
        ProductsGetListDocument,
        {}
    )

    return graphqlResponse.products;


}

export const getProductsByPage = async (page: number) => {
    const productsPerPage = 6;
    const skip = (page - 1) * productsPerPage;
    const graphqlResponse = await executeGraphql(
        GetProductsByPageDocument,
        {skip, first:productsPerPage}
    )

    return graphqlResponse.products;

};

export const getProductsCategoryByPage = async (categorySlug:string, page: number) => {
    const productsPerPage = 6;
    const slug = categorySlug;
    const skip = (page - 1) * productsPerPage;
    const graphqlResponse = await executeGraphql(
        GetProductsCategoryByPageDocument,
        {slug, skip, first:productsPerPage}
    )

    const products = graphqlResponse.productsConnection.edges.map(edge => edge.node);

    return products;

};

export const getProductsByCategorySlug=async (categorySlug: string)=> {
    const graphqlResponse = await executeGraphql(
        ProductsGetByCategorySlugDocument,
        {slug: categorySlug}
    )

    return graphqlResponse.categories[0]?.products;

}
export const getCategories = async () => {
        const graphqlResponse = await executeGraphql(CategoriesGetListDocument, {});

        return graphqlResponse.categories;
    };

    export const getCategoriesBySlug = async (slug: string) => {
        const graphqlResponse = await executeGraphql(CategoriesGetByCategorySlugDocument, {
            slug,
        });

        return graphqlResponse.categories[0];
    };




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


};

export const getCollections = async () => {
    const graphqlResponse = await executeGraphql(CollectionsGetListDocument, {});

    return graphqlResponse.collections;
};

export const getCollectionsBySlug = async (slug: string) => {
    const graphqlResponse = await executeGraphql(CollectionsGetCollectionBySlugDocument, {
        slug,
    });

    return graphqlResponse.collections[0];
};

export const getProductsListByCollectionSlug = async (collection: string) => {
    const graphqlResponse = await executeGraphql(ProductsGetListByCollectionSlugDocument, {
        slag: collection,
    });

    return graphqlResponse.products;
};

export const getProductsCollectionByPage = async (collectionSlug:string, page: number) => {
    const productsPerPage = 2;
    const slug = collectionSlug;
    const skip = (page - 1) * productsPerPage;
    const graphqlResponse = await executeGraphql(
        GetProductsCollectionByPageDocument,
        {slug, skip, first:productsPerPage}
    )

    return graphqlResponse.productsConnection.edges.map(edge => edge.node);

};

export const getProductVariants = async (id: ProductListItemFragment["id"]) => {
    const graphqlResponse = await executeGraphql(ProductGetVariantsListDocument, {
        id: id,
    });

    console.log(graphqlResponse.product)
    return graphqlResponse.product?.variants;
};

export const getProductsSuggestedList = async (collection: string) => {
    const graphqlResponse = await executeGraphql(ProductsGetSuggestedListDocument, {
        name: collection,
    });

    return graphqlResponse?.products;
};
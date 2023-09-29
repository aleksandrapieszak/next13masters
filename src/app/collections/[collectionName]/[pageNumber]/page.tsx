import { notFound } from "next/navigation";
import { type Metadata } from "next";
import {
    getCollectionsBySlug,
    getProductsByCategorySlug,
    getProductsCategoryByPage, getProductsCollectionByPage,
    getProductsListByCollectionSlug
} from "@/api/products";
import {ProductList} from "@/ui/organisms/ProductList";
import {Pagination} from "@/ui/molecules/Pagination";

type CollectionPageProps = {
    params: {
        collectionName: string;
        pageNumber: number;
    };
};

export const generateMetadata = async ({ params }: CollectionPageProps): Promise<Metadata> => {
    const collection = await getCollectionsBySlug(params.collectionName);

    return {
        title: collection?.name,
    };
};

export default async function CollectionPage({ params }: CollectionPageProps) {
    const products = await getProductsListByCollectionSlug(params.collectionName);
    const collection = await getCollectionsBySlug(params.collectionName);


    const productInPage = 2;
    const totalProducts = (await getProductsListByCollectionSlug(params.collectionName))
    const totalProductsLength = totalProducts?.length;
    const totalPages = Math.ceil(totalProductsLength/productInPage);

    const productsByPage = await getProductsCollectionByPage(params.collectionName, params.pageNumber)
    if (products.length === 0) {
        return notFound();
    }

    return (
        /*className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"*/
        <section className="flex min-h-screen flex-col items-center p-12" data-testid="collections">
            <h2>{collection?.name}</h2>
            <ProductList products={productsByPage} />
            <Pagination totalPages={totalPages} url={`/collections/${params.collectionName}`}/>
        </section>
    );
}
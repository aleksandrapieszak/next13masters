import { notFound } from "next/navigation";
import { type Metadata } from "next";
import {
    getCollectionsBySlug,
    getProductsCollectionByPage,
    getProductsListByCollectionSlug
} from "@/app/api/products";
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
        <section className="bg-white flex flex-col items-center p-5" data-testid="collections">
            <h2> { collection?.name } </h2>
            <ProductList products={productsByPage} />
            <Pagination totalPages={totalPages} url={`/collections/${params.collectionName}`} sortValue={""}/>
        </section>
    );
}
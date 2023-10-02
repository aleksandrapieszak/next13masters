import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {ProductList} from "@/ui/organisms/ProductList";
import {
    getCategoriesBySlug,
    getProductsByCategorySlug,
    getProductsCategoryByPage,
} from "@/api/products";
import {Pagination} from "@/ui/molecules/Pagination";

export const generateStaticParams = async ({params}:{params: {category:string, pageNumber: number}}) => {
    const products = await getProductsByCategorySlug(params.category);
    const pagesAmount = products ? Math.ceil(products?.length / 5): 0;

    const pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push({ pageNumber: i.toString() });
    }

    return pages;
}

export const generateMetadata = async ({params}:{params: {category:string}}): Promise<Metadata> => {
    const category = await getCategoriesBySlug(params.category);

    const generatedTitle = ` ${category?.name} `;
    console.log("Generated title:", generatedTitle);
    return {
        title: generatedTitle
    };
};



export default async function CategoryProductPageNumber({params}: { params: {category: string, pageNumber: number }}) {

    const products = await getProductsByCategorySlug(params.category)

    if (!products){
        notFound();
    }

    const productInPage = 6;
    const totalProducts = (await getProductsByCategorySlug(params.category))
    const totalProductsLength = totalProducts?.length ?? 0;
    const totalPages = Math.ceil(totalProductsLength/productInPage);

    const productsByPage = await getProductsCategoryByPage(params.category, params.pageNumber)

    const category = await getCategoriesBySlug(params.categoryName);

    return (
        <>
                <h2>{category?.name}</h2>
            <ProductList products={productsByPage}/>
            <Pagination totalPages={totalPages} url={`/categories/${params.category}`}/>
        </>

    )
}
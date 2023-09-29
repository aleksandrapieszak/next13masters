import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {ProductList} from "@/ui/organisms/ProductList";
import {
    getCategories,
    getCategoriesBySlug,
    getProductList,
    getProductsByCategorySlug,
    getProductsCategoryByPage
} from "@/api/products";
import {Pagination} from "@/ui/molecules/Pagination";

export const generateMetadata = async ({params}:{params: {category:string}}): Promise<Metadata> => {
    const category = await getCategoriesBySlug(params.category);

    return {
        title: category?.name,
    };
};

// export const generateStaticParams = async ({params}: { params: {category: string}}) => {
//     const products = await getCategories()
//     const pagesAmount = Math.ceil(products?.length / 5);
//
//     const pages = [];
//     for (let i = 1; i <= pagesAmount; i++) {
//         pages.push({ pageNumber: i.toString() });
//     }
//
//     return pages;
// }
export const generateStaticParams = async () => {
    const categories = await getCategories();
    return categories.map((category) => ({
        categoriesName: category.name
    }))
}

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

    return (
        <>
            <h1>
                Produkty z kategorii {params.category}, strona {params.pageNumber}
            </h1>
            <ProductList products={productsByPage}/>
            <Pagination totalPages={totalPages} url={`/categories/${params.category}`}/>
        </>

    )
}
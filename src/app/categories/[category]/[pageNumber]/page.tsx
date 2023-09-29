import {notFound} from "next/navigation";
import {ProductList} from "@/ui/organisms/ProductList";
import {getProductList, getProductsByCategorySlug, getProductsByPage, getProductsCategoryByPage} from "@/api/products";
import {Pagination} from "@/ui/molecules/Pagination";

export const generateStaticParams = async({params}:{params: {category:string}}) => {
    if (params.category === "t-shirts"){
      return [{"pageNumber": "1"}, {"pageNumber": "2"}]
    }else {
        return[{"pageNumber":"1"}]
    }
}

export default async function CategoryProductPageNumber({params}: { params: {category: string, pageNumber: number }}) {

    const products = await getProductsByCategorySlug(params.category)

    if (!products){
        notFound();
    }

    const productInPage = 6;
    const totalProducts = (await getProductsByCategorySlug(params.category))
    const totalProductsLength = totalProducts?.length;
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
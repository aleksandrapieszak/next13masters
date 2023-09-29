import {ProductList} from "@/ui/organisms/ProductList";
import {getProductList, getProductsByPage} from "@/api/products";
import {Pagination} from "@/ui/molecules/Pagination";

export const generateStaticParams = async () => {
    const products = await getProductList();
    const pagesAmount = Math.ceil(products.length / 5);

    const pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push({ pageNumber: i.toString() });
    }

    return pages;
}

export default async function ProductsPaginationPage({params}:{params:{pageNumber:number}}) {

    const productInPage = 5;
    const totalProducts = (await getProductList()).length
    const totalPages = Math.ceil(totalProducts/productInPage);

    //w zależności od strony pobierz takie produkty że były po 5 na stronę
    const productsByPage = await getProductsByPage(params.pageNumber)

    return (
        <div>
            <ProductList products={productsByPage}/>
            <Pagination  totalPages={totalPages} url={"/products"}/>
        </div>

)
}
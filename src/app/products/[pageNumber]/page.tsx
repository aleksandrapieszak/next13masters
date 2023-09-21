import {ProductList} from "@/ui/organisms/ProductList";
import {getProductList, getProductsByPage} from "@/api/products";
import {Pagination} from "@/ui/molecules/Pagination";

export default async function ProductsPaginationPage({params}:{params:{pageNumber:number}}) {

    const productInPage = 5;
    const totalProducts = (await getProductList()).length
    const totalPages = Math.ceil(totalProducts/productInPage);

    //w zależności od strony pobierz takie produkty że były po 5 na stronę
    const productsByPage = await getProductsByPage(params.pageNumber)
    return (
        <div>
            <ProductList products={productsByPage}/>
            <Pagination currentPage={params.pageNumber} totalPages={totalPages}/>
        </div>

)
}
import {ProductList} from "@/ui/organisms/ProductList";
import {getProductList, getProductListOrderBy, getProductsByPageSortBy} from "@/app/api/products";
import {Pagination} from "@/ui/molecules/Pagination";
import {ProductOrderByInput} from "@/gql/graphql";
import {SortSelect} from "@/ui/atoms/SortSelect";

type ProductsPageProps = {
    params: {
        pageNumber: number;
    };
    searchParams: {
        sort: ProductOrderByInput;
    };
};

export const generateStaticParams = async () => {
    const products = await getProductList();
    const pagesAmount = Math.ceil(products.length / 5);

    const pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push({ pageNumber: i.toString() });
    }

    return pages;
}

export default async function ProductsPaginationPage({params, searchParams}:ProductsPageProps) {

    const productInPage = 5;
    const { sort } = searchParams;
    const totalProducts = (await getProductListOrderBy(sort)).length
    const totalPages = Math.ceil(totalProducts/productInPage);


    //w zależności od strony pobierz takie produkty że były po 5 na stronę
    const productsByPage = await getProductsByPageSortBy(params.pageNumber, sort)

    return (
        <div>
            <div className="flex justify-end">
                <SortSelect/></div>
            <ProductList products={productsByPage}/>
            <Pagination  totalPages={totalPages} url={"/products"} sortValue={sort} />
        </div>

)
}
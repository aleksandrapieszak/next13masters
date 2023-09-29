import {ProductList} from "@/ui/organisms/ProductList";
import {getProductList} from "@/api/products";
import {ProductListItemFragment} from "@/gql/graphql";

// const sleep = (ms:number) => new Promise((resolve)=>setTimeout(resolve,ms))
type SuggestedProductListProps = {
    products: ProductListItemFragment[];
};
export const SuggestedProductsList = async ({ products }: SuggestedProductListProps) => {
    // const products = await getProductList();
    // await sleep(5000);
    return(
        <div data-testid="related-products">
            Proponowane produkty
            <ProductList products={products}/>
        </div>
    )
}
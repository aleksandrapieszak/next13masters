import {ProductList} from "@/ui/organisms/ProductList";
import type {ProductListItemFragment} from "@/gql/graphql";

// const sleep = (ms:number) => new Promise((resolve)=>setTimeout(resolve,ms))
type SuggestedProductListProps = {
    products: ProductListItemFragment[];
};
export const SuggestedProductsList = async ({ products }: SuggestedProductListProps) => {
    // const products = await getProductList();
    // await sleep(5000);
    return(
        <div data-testid="related-products" className="bg-white p-12 mt-20">
            <h2 className="text-xl text-center">Suggested products</h2>
            <ProductList products={products}/>
        </div>
    )
}
import {ProductList} from "@/ui/organisms/ProductList";
import {getProductList} from "@/api/products";
import {SuggestedProductsList} from "@/ui/organisms/SuggestedProducts";

export default async function ProductsPage() {

    const products = await getProductList();
    return <>
        <ProductList products={products}/>
    </>
}

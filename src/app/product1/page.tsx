import ProductPage from "@/ui/organisms/ProductPage";
import {getProductById} from "@/app/api/products";

export default function Product1() {
    const product = getProductById("ckdu4awq00h140104ijzi92kv")

    return (
        <ProductPage product={product}/>
    )
}

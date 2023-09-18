import {getProductById, getProductList} from "@/api/products";
import {SuggestedProductsList} from "@/ui/organisms/SuggestedProducts";
import {Suspense} from "react";
import {ProductItemWithImage} from "@/ui/molecules/ProductItemWithImage";

export const generateStaticParams = async () => {
    const products = await getProductList();
    return products.map((product) => ({
        productId: product.id
    }))
}

export default async function SingleProductPage({params}: { params: {productId: string }}) {

    const product = await getProductById(params.productId)
    return (
        <>
            <div>
                <ProductItemWithImage product={product}/>
            </div>
            <aside>
                <Suspense fallback={"Ładowanie....."}>
                    <SuggestedProductsList/>
                </Suspense>
            </aside>
        </>
    )
}
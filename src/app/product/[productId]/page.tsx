import React, {Suspense} from "react";
import {getProductById, getProductList} from "@/api/products";
import {SuggestedProductsList} from "@/ui/organisms/SuggestedProducts";
import {ProductItemWithImage} from "@/ui/molecules/ProductItemWithImage";
import {Metadata} from "next";


//statyczne generowanie stron jesli jest ich niewiele
export const generateStaticParams = async () => {
    const products = await getProductList();
    return products.map((product) => ({
        productId: product.id
    }))
}

//seo
export const generateMetadata = async({params}:{params:{productId:string}}):
    Promise<Metadata>=> {
const product = await getProductById(params.productId);
    return {
        title: `${product.name} - Sklep internetowy`,
        description: product.description,
        openGraph: {
            title: `${product.name} - Sklep internetowy`,
            description: product.description,
            images: [product.coverImage.src],
        },
    }
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
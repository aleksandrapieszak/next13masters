import React, {Suspense} from "react";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getProductById, getProductList, getProductsSuggestedList} from "@/api/products";
import {SuggestedProductsList} from "@/ui/organisms/SuggestedProducts";
import {SingleProduct} from "@/ui/organisms/SingleProduct";


//statyczne generowanie stron jesli jest ich niewiele
export const generateStaticParams = async () => {
    const products = await getProductList();
    return products.map((product) => ({
        productId: product.id
    }))
}

//seo
export const generateMetadata = async ({
                                           params,
                                       }: {
    params: { productId: string };
}): Promise<Metadata> => {
    const product = await getProductById(params.productId);
    return {
        title: product?.name,
        description: product?.description,
        openGraph: {
            title: product?.name,
            description: product?.description,
            // images: [{ url: product?.images[0].url || '' }]
        },
    };
};

export default async function SingleProductPage({params}: { params: {productId: string }}) {

    const product = await getProductById(params.productId)


    if (!product){
        notFound();
    }

    const suggestedProducts = product?.categories[0]
        ? await getProductsSuggestedList(product.categories[0].name)
        : null;


    return (
        <>
            <SingleProduct product={product} />
            <aside>
                <Suspense fallback={"Ładowanie....."}>
                    {suggestedProducts ? (
                        <SuggestedProductsList products={suggestedProducts}/>
                    ) : (
                        <div>Brak sugerowanych produktów.</div>
                    )}                </Suspense>
            </aside>
        </>
    )
}


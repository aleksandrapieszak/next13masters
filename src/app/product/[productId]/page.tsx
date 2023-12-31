import React, {Suspense} from "react";
import {notFound} from "next/navigation";
import {type Metadata} from "next";
import {getProductById, getProductList, getProductReview, getProductsSuggestedList} from "@/app/api/products";
import {SingleProduct} from "@/ui/organisms/SingleProduct";
import {SingleProductReviewForm} from "@/ui/organisms/SingleProductReviewForm";
import {Loading} from "@/ui/atoms/Loading";
import {SuggestedProductsList} from "@/ui/organisms/SuggestedProducts";



// //statyczne generowanie stron jesli jest ich niewiele
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
    const reviews = await getProductReview(params.productId)


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
                <Suspense fallback={<Loading/>}>
                    {suggestedProducts ? (
                        <SuggestedProductsList products={suggestedProducts}/>
                    ) : (
                        <div>Brak sugerowanych produktów.</div>
                    )}                </Suspense>
            </aside>
                    <SingleProductReviewForm productId={product.id} reviews={reviews}/>

        </>
    )
}


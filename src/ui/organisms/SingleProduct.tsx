import React from "react";
import { type SingleProductItemFragment } from "@/gql/graphql";
import {ProductCoverImage} from "@/ui/atoms/ProductCoverImage";
import {AddToCardButton} from "@/ui/atoms/buttons/AddToCardButton";
import {SingleProductVariantsList} from "@/ui/molecules/SingleProductVariantsList";

type SingleProductItemProps = {
    product: SingleProductItemFragment;
};
export const SingleProduct = async ({ product }: SingleProductItemProps) => {
    return (
        <section>
            <div className="max-h-96 sm:col-span-1">
                {product.images[0] && (
                    <ProductCoverImage src={product.images[0].url} alt={""} />
                )}
            </div>

            <div>
                <h1>{product.name}</h1>
                <h3>{product.description}</h3>
                <h2>{product.price} zł</h2>
            </div>

            <article className="prose mx-5 sm:col-span-2">
                 <SingleProductVariantsList product={product} />
                <AddToCardButton product={product} />
            </article>
        </section>
    );
};
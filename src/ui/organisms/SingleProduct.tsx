import React from "react";
import { type SingleProductItemFragment } from "@/gql/graphql";
import {ProductCoverImage} from "@/ui/atoms/ProductCoverImage";
import {SingleProductVariantsList} from "@/ui/molecules/SingleProductVariantsList";
import {StarsItemListSumRating} from "@/ui/atoms/StarsItemListSumRating";
import {getProductById} from "@/app/api/products";
import {AddToCardButton} from "@/ui/atoms/buttons/AddToCardButton";

type SingleProductItemProps = {
    product: SingleProductItemFragment;
};
export const SingleProduct = async ({ product }: SingleProductItemProps) => {

    const product1 = await getProductById(product.id);
    const average = product1?.averageRating;

    return (
        <div className="bg-white">
            <div className="pb-16 pt-6 sm:pb-24">
                <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                        <div className="lg:col-span-5 lg:col-start-8">
                            <div className="flex justify-between">
                                <h1 className="text-xl font-medium text-gray-900">{product.name}</h1>
                                <p className="text-xl font-medium text-gray-900">{product.price/100} zł</p>
                                {average && (
                                    <StarsItemListSumRating numberOfStars={average} hidden={true}/>
                                    )}

                            </div>
                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Description</h2>
                                <div
                                    className="prose prose-sm mt-4 text-gray-500"
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            </div>
                            <div className="mt-10 ">
                                <SingleProductVariantsList product={product} />
                            </div>
                            <div className="mt-10 justify-left">

                            <AddToCardButton product={product} />
                            </div>


                        </div>
                        <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:mt-0">
                            <div className="grid grid-cols-1 lg:grid-cols-1  lg:gap-8">
                                <div className="max-h-96 sm:col-span-1">
                                            {product.images[0] && (
                                                <ProductCoverImage src={product.images[0].url} alt={""} />
                                            )}
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
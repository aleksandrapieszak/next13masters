import React from "react";
import { type SingleProductItemFragment } from "@/gql/graphql";
import {ProductCoverImage} from "@/ui/atoms/ProductCoverImage";
import {AddToCardButton} from "@/ui/atoms/buttons/AddToCardButton";
import {SingleProductVariantsList} from "@/ui/molecules/SingleProductVariantsList";
import {StarsItemList} from "@/ui/atoms/StarsItemList";
import {StarsItemListSumRating} from "@/ui/atoms/StarsItemListSumRating";

type SingleProductItemProps = {
    product: SingleProductItemFragment;
};
export const SingleProduct = async ({ product }: SingleProductItemProps) => {
    const rating = product.averageRating !== null && product.averageRating !== undefined ? product.averageRating : 0;

    return (
        <div className="bg-white">
            <div className="pb-16 pt-6 sm:pb-24">
                <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                        <div className="lg:col-span-5 lg:col-start-8">
                            <div className="flex justify-between">
                                <h1 className="text-xl font-medium text-gray-900">{product.name}</h1>
                                <p className="text-xl font-medium text-gray-900">{product.price} $</p>
                                Rating: {rating}.00<StarsItemListSumRating numberOfStars={rating} selectedStars={rating}/>

                            </div>
                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Description</h2>
                                <div
                                    className="prose prose-sm mt-4 text-gray-500"
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            </div>
                            <div className="mt-10">
                                <SingleProductVariantsList product={product} />
                            </div>


                        </div>
                        <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:mt-0">
                            <div className="grid grid-cols-1 lg:grid-cols-1  lg:gap-8">
                                <div className="max-h-96 sm:col-span-1">
                                            {product.images[0] && (
                                                <ProductCoverImage src={product.images[0].url} alt={""} />
                                            )}
                                        </div>
                                {/*{product.images.map((image) => (*/}
                                {/*    <img*/}
                                {/*        key={image.id}*/}
                                {/*        src={image.imageSrc}*/}
                                {/*        alt={image.imageAlt}*/}
                                {/*        className={classNames(*/}
                                {/*            image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',*/}
                                {/*            'rounded-lg'*/}
                                {/*        )}*/}
                                {/*    />*/}
                                {/*))}*/}
                            </div>
                        </div>
                    </div>
                </div>
        {/*<section>*/}
        {/*    <div className="max-h-96 sm:col-span-1">*/}
        {/*        {product.images[0] && (*/}
        {/*            <ProductCoverImage src={product.images[0].url} alt={""} />*/}
        {/*        )}*/}
        {/*    </div>*/}

        {/*    <div>*/}
        {/*        <h1>{product.name}</h1>*/}
        {/*        <h3>{product.description}</h3>*/}
        {/*        <h2>{product.price} zł</h2>*/}
        {/*    </div>*/}

        {/*    <article className="prose mx-5 sm:col-span-2">*/}
        {/*         <SingleProductVariantsList product={product} />*/}
        {/*        <AddToCardButton product={product} />*/}
        {/*    </article>*/}
        {/*</section>*/}
            </div>
        </div>
    );
};
"use server";
import {revalidateTag} from "next/cache";
import {ProductUpdateAverageRatingDocument, type ReviewItemFragment} from "@/gql/graphql";
import {createReview, getProductReview, publishReview} from "@/app/api/products";
import {executeGraphql} from "@/app/api/graphqlApi";


export const addReview = async (productId: string, formData: FormData) => {
    const reviewForm: ReviewItemFragment = {
        id: productId,
        headline: String(formData.get("headline")),
        content: String(formData.get("content")),
        rating: Number(formData.get("rating")),
        name: String(formData.get("name")),
        email: String(formData.get("email")),
    };

    const { createReview: reviewId } = await createReview(reviewForm);

    // Pobierz recenzje dla tego produktu.
    const reviewsByProduct = await getProductReview(productId);

    // Oblicz nową średnią ocenę.
    let totalRating = reviewsByProduct.reduce((total, review) => total + review.rating, 0) + reviewForm.rating;
    const numberOfReviews = reviewsByProduct.length + 1; // +1 ponieważ dodaliśmy nową recenzję.
    const newAverageRating = Math.round(totalRating / numberOfReviews);

    if (!reviewId) {
        throw TypeError("Something went wrong during the review creation!");
    }

    const updateAverage = async (id:string, averageRating:number)=>{
        await executeGraphql({
            query: ProductUpdateAverageRatingDocument,
            variables:{
                id:id,
                averageRating:averageRating,
                hash: `${crypto.randomUUID()}-${crypto.randomUUID()}`,
            },
            cache: "no-store",

        })
        revalidateTag("review");
    }
    await updateAverage(productId,newAverageRating)
    await publishReview(reviewId.id);

};
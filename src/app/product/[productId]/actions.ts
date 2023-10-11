"use server";
import { type ReviewItemFragment } from "@/gql/graphql";
import {createReview, getProductReview, publishReview, updateAverage} from "@/app/api/products";

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

    await updateAverage(productId, newAverageRating)
    await publishReview(reviewId.id);

};
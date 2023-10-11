import {ReviewItemFragment} from "@/gql/graphql";
import {StarsItem} from "@/ui/atoms/StarsItem";

type ReviewProps = {
    review: ReviewItemFragment[];
};
export const ReviewSum = ({ review: {rating } }: ReviewProps) => {
    return(
<div className="mt-4">
    <h2 className="sr-only">Reviews</h2>
    <div className="flex items-center">
        <p className="text-sm text-gray-700">
            {rating}
            <span className="sr-only"> out of 5 stars</span>
        </p>
        <div className="ml-1 flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
                <StarsItem/>
            ))}
        </div>
        <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
            ·
        </div>

    </div>
</div>
)
}
import { type ReviewItemFragment } from "@/gql/graphql";

type ReviewProps = {
    review: ReviewItemFragment;
};
export const Review = ({ review: { headline, content, rating, name: firstName } }: ReviewProps) => {
    return (
        <article>
            <div className="flex w-full items-center gap-5 py-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200">
                    {firstName && firstName.charAt(0)}
                </div>
                <div className="flex flex-col items-center text-start">
                    <p className="text-left text-slategray text-sm font-bold">author: {firstName}</p>
                    <p className="text-left text-slategray text-sm font-bold">Rating: {rating}</p>
                </div>
            </div>
            <div className="p-6">
                <p className="text-slategray text-sm font-medium">{headline}</p>
                <p className="text-slategray italic">{content}</p>
            </div>
            <hr />
        </article>
    );
};
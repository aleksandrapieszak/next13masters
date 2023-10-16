// // import { type ReviewItemFragment } from "@/gql/graphql";
// //
// // type ReviewProps = {
// //     review: ReviewItemFragment;
// // };
// // export const Review = ({ review: { headline, content, rating, name: firstName } }: ReviewProps) => {
// //     return (
// //         <article>
// //             <div className="flex w-full items-center gap-5 py-2">
// //                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200">
// //                     {firstName && firstName.charAt(0)}
// //                 </div>
// //                 <div className="flex flex-col items-left text-start">
// //                     <p className="text-left text-slategray text-sm font-bold">author: {firstName}</p>
// //                     <p className="text-left text-slategray text-sm font-bold">Rating: {rating}</p>
// //                 </div>
// //             </div>
// //             <div className="p-6">
// //                 <p className="text-slategray text-sm font-medium">{headline}</p>
// //                 <p className="text-slategray italic">{content}</p>
// //             </div>
// //             <hr />
// //         </article>
// //     );
// // };
// import { type ReviewItemFragment } from "@/gql/graphql";
//
// type ReviewProps = {
//     review: ReviewItemFragment;
// };
//
// export const Review = ({ review: { headline, content, rating, name: firstName } }: ReviewProps) => {
//     const STAR_UNICODE = "⭐";
//
//     return (
//         <article>
//             <div className="flex w-full items-center gap-5 py-2">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200">
//                     {firstName && firstName.charAt(0)}
//                 </div>
//                 <div className="flex flex-col items-left text-start">
//                     <p className="text-left text-slategray text-sm font-bold">author: {firstName}</p>
//                     <p className="text-left text-slategray text-sm font-bold">Rating: {STAR_UNICODE.repeat(rating)}</p>
//                 </div>
//             </div>
//             <div className="p-6">
//                 <p className="text-slategray text-sm font-medium">{headline}</p>
//                 <p className="text-slategray italic">{content}</p>
//             </div>
//             <hr />
//         </article>
//     );
// };

import { StarIcon } from '@heroicons/react/20/solid';
import { type ReviewItemFragment } from "@/gql/graphql";

type ReviewProps = {
    review: ReviewItemFragment;
};

function classNames(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

export const Review = ({ review: { headline, content, rating, name: firstName } }: ReviewProps) => {
    return (
        <div className="bg-white">
            {/*<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">*/}
                <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
                    <div key={""} className="pt-10 lg:grid lg:grid-cols-2 lg:gap-x-8">
                        <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-1 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-2">
                            <div className="flex items-center xl:col-span-1">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((r) => (
                                        <StarIcon
                                            key={r}
                                            className={classNames(
                                                rating > r ? 'text-yellow-400' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="ml-3 text-sm text-gray-700">
                                    {rating}
                                    <span className="sr-only"> out of 5 stars</span>
                                </p>
                                {/*<div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">*/}
                                {/*<p className="font-medium text-gray-900">{firstName}</p>*/}
                                {/*</div>*/}
                            </div>

                            <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0 ml-0">
                                <h3 className="text-sm font-medium text-gray-900">{headline}</h3>
                                <div
                                    className="mt-3 space-y-6 text-sm text-gray-500"
                                    dangerouslySetInnerHTML={{ __html: content }}
                                />
                            </div>
                        </div>

                        {/*<div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">*/}
                        {/*    /!*<p className="font-medium text-gray-900">{firstName}</p>*!/*/}
                        {/*</div>*/}
                    </div>
                </div>
            {/*</div>*/}
        </div>
    );
};
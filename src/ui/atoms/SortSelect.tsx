"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type Route } from "next";
import {ProductOrderByInput} from "@/gql/graphql";
type OrderByType = {
    label: string;
    value: ProductOrderByInput;
};

const ORDER_LIST: OrderByType[] = [
    { label: "Price ascending", value: ProductOrderByInput.PriceAsc },
    { label: "Price descending", value: ProductOrderByInput.PriceDesc },
    { label: "Rating ascending", value: ProductOrderByInput.AverageRatingAsc },
    { label: "Rating descending", value: ProductOrderByInput.AverageRatingDesc },
];

export const SortSelect = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentSort = searchParams.get("sort");
    let currentTestId = "";
    if (currentSort && currentSort.includes("price")) {
        currentTestId = "sort-by-price";
    } else if (currentSort && currentSort.includes("rating")) {
        currentTestId = "sort-by-rating";
    }

    return (
        <div className="lg:w-1/4 w-full">
            <div className="block text-sm font-medium leading-6 text-gray-900">
                <p className="block text-sm font-medium leading-6 text-gray-900">Sort by: </p>

                <select
                    data-testid="sort-select"
                    className="relative w-full cursor-default rounded-md bg-white py-1.5 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="sort_by"
                    id="sort_by_id"
                    value={currentSort || "Sort by"}
                    onChange={(event) => {
                        const currentSortValue = event.target.value;
                        const currentSearchParams = new URLSearchParams(searchParams.toString());
                        currentSearchParams.set("sort", currentSortValue);
                        router.push(`${pathname}?${currentSearchParams.toString()}` as Route);
                    }}
                >
                    {/*<option                     data-testid={currentTestId}*/}
                    {/*                            disabled>sort by:</option>*/}
                    {ORDER_LIST.map(({ label, value }) => (
                        <option
                            data-testid={value.includes("price") ? "sort-by-price" : "sort-by-rating"}
                            key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

//     return (
//         <div className="lg:w-1/4 w-full"> {/* <-- Dodane klasy tutaj */}
//             <div className="block text-sm font-medium leading-6 text-gray-900">
//                 <p className="block text-sm font-medium leading-6 text-gray-900">Sort by: </p>
//                 <select
//                     className="relative w-full cursor-default rounded-md bg-white py-1.5 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     name="sort_by"
//                     id="sort_by_id"
//                     value={searchParams.get("sort") || "Sort by"}
//                     onChange={(event) => {
//                         const currentSortValue = event.target.value;
//                         const currentSearchParams = new URLSearchParams(searchParams.toString());
//                         currentSearchParams.set("sort", currentSortValue);
//                         router.push(`${pathname}?${currentSearchParams.toString()}` as Route);
//                     }}
//                 >
//                     <option disabled>sort by:</option>
//                     {ORDER_LIST.map(({ label, value }) => (
//                         <option key={value} value={value} data-testid={value.includes("price") ? "sort-by-price" : "sort-by-rating"}>
//                             {label}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         </div>
//     );
// };

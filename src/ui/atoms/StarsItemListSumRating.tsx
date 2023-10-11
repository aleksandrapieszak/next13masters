// import {StarsItem} from "@/ui/atoms/StarsItem";
//
// //lista gwiazdek
//
// export const StarsItemList = ({ numberOfStars }: {numberOfStars: number}) => {
//     return (
//         <div className="mb-3 mt-2 flex justify-center">
//             {Array.from({ length: numberOfStars }).map((_, index) => (
//                 <StarsItem key={index} />
//             ))}
//         </div>
//     );
// };

"use client"
import {StarsItem} from "@/ui/atoms/StarsItem";
import {StarItem} from "@/ui/atoms/StarItem";

export const StarsItemListSumRating = ({
                                  numberOfStars,
                              }: {
    numberOfStars: number;
}) => {
    if (numberOfStars === 0){
        return <div>No ratings yet!</div>
    }
    return (
        <div className="mb-3 mt-2 flex justify-center">
            {Array.from({ length: numberOfStars }).map((_, index) => (
                <StarItem
                />

                ))}
        </div>
    );
};

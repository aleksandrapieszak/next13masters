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
import {StarItem} from "@/ui/atoms/StarItem";
type StarsItemListSumRatingProps = {
    numberOfStars: number;
    hidden: boolean;
};
export const StarsItemListSumRating = ({ numberOfStars, hidden }: StarsItemListSumRatingProps) => {

    if (numberOfStars === 0){
        return <div>No ratings yet!</div>
    }
        return (
            <div className="mb-3 mt-2 flex justify-center items-center" data-testId="product-rating">
                {hidden && <span className="mr-4">{numberOfStars}.00</span>}
                {Array.from({length: numberOfStars}).map((_, index) => (
                    <StarItem key={index}/>
                ))}
            </div>
        );


};

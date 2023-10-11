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

export const StarsItemList = ({
                                  numberOfStars,
                                  selectedStars = 0,
                                  onSelect,
                              }: {
    numberOfStars: number;
    selectedStars?: number;
    onSelect?: (number: number) => void;
}) => {
    return (
        <div className="mb-3 mt-2 flex justify-center">
            {Array.from({ length: numberOfStars }).map((_, index) => (
                <StarsItem
                    key={index}
                    isSelected={index + 1 <= selectedStars}
                    onClick={() => onSelect && onSelect(index + 1)}
                />
            ))}
        </div>
    );
};

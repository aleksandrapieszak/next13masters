import {StarsItem} from "@/ui/atoms/StarsItem";

//lista gwiazdek

export const StarsItemList = ({ numberOfStars }: {numberOfStars: number}) => {
    return (
        <div className="mb-3 mt-2 flex justify-center">
            {Array.from({ length: numberOfStars }).map((_, index) => (
                <StarsItem key={index} />
            ))}
        </div>
    );
};

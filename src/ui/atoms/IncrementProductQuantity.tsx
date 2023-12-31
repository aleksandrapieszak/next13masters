"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { changeItemQuantity } from "@/app/cart/actions";

type IncrementProductQuantityProps = {
    quantity: number;
    itemId: string;
};
export const IncrementProductQuantity = ({
                                             quantity,
                                             itemId,
                                         }: IncrementProductQuantityProps) => {
    const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

    return (
        <form className="flex items-center gap-3">
            <button
                type="submit"
                className="box-content h-5 w-5  cursor-pointer rounded-md bg-neutral-400 p-1 hover:bg-gray-300 disabled:bg-neutral-200"
                data-testid="decrement"
                disabled={optimisticQuantity <= 1}
                formAction={async () => {
                    setOptimisticQuantity(optimisticQuantity - 1);
                    await changeItemQuantity(itemId, optimisticQuantity - 1);
                }}
            >
                <MinusIcon />
            </button>
            <span data-testid="quantity">{optimisticQuantity}</span>
            <button
                type="submit"
                className="box-content h-5 w-5 cursor-pointer rounded-md bg-neutral-400 p-1 hover:bg-gray-300"
                data-testid="increment"
                formAction={async () => {
                    setOptimisticQuantity(optimisticQuantity + 1);
                    await changeItemQuantity(itemId, optimisticQuantity + 1);
                }}
            >
                <PlusIcon />
            </button>
        </form>
    );
};
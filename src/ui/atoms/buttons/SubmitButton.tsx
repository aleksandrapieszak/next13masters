"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type SubmitButtonProps = {
    label: string;
};
export const SubmitButton = ({ label }: SubmitButtonProps) => {
    const formStatus = useFormStatus();
    return (
        <button
            type="submit"
            disabled={formStatus.pending}
            className="mt-3 flex items-center justify-center rounded-md bg-gray-300 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
            data-testid={label === "ADD TO CART" ? "add-to-cart-button" : undefined}
        >
            {label}
        </button>
    );
};
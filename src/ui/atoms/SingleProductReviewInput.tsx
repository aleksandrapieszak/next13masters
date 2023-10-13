import React from "react";
//
// type SingleProductReviewInputProps = {
//     label: string;
//     type: React.HTMLInputTypeAttribute;
//     name: string;
// };
// export const SingleProductReviewInput = ({ label, type, name }: SingleProductReviewInputProps) => {
//     return (
//         <>
//             <label htmlFor={`${name}-id`}>{label}</label>
//             <input
//                 className="h-8 rounded-md border border-neutral-400"
//                 type={type}
//                 name={name}
//                 id={`${name}-id`}
//                 required
//             />
//         </>
//     );
// };
type SingleProductReviewInputProps = {
    label: string;
    type: React.HTMLInputTypeAttribute;
    name: string;
};
export const SingleProductReviewInput=({ label, type, name }: SingleProductReviewInputProps)=> {
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 border-t border-gray-200">
                {label}
            </label>
            <div className="mt-2">
                <input
                    type={type}
                    name={name}
                    id={`${name}-id`}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}
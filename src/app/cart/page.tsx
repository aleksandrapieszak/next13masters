// import {redirect} from "next/navigation";
// import {IncrementProductQuantity} from "@/ui/atoms/IncrementProductQuantity";
// import {getCartByIdFromCookie} from "@/app/api/cart";
// import {RemoveButton} from "@/ui/atoms/buttons/RemoveButton";
// import {handlePaymentAction} from "@/app/cart/actions";
//
// export default async function Cart() {
//     const cart = await getCartByIdFromCookie();
//     if (!cart || cart.orderItems.length === 0) {
//         redirect("/")
//     }
//         // Obliczanie łącznej kwoty koszyka
//         // const totalAmount: number = (.)cart.orderItems.reduce((acc, item) => {
//         //     return acc + (item.product ? item.product.price * item.quantity : 0);
//         // }, 0);
//
//         return (
//             <>
//                 <div>
//                     <table>
//                         <thead>
//                         <tr>
//                             <th>Product</th>
//                             <th>Quantity</th>
//                             <th>Price</th>
//                             <th></th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {cart.orderItems.map((item) =>
//                             item.product && (
//                                 <tr key={item.id}>
//                                     <td>{item.product.name}</td>
//
//                                     <td className="text-center">
//                                         <IncrementProductQuantity
//                                             itemId={item.id}
//                                             quantity={item.quantity}
//                                             // price={item.product.price}
//                                         />
//                                     </td>
//                                     <td>{item.product.price}</td>
//                                     <td>
//                                         <RemoveButton itemId={item.id}/>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                         <tfoot>
//                         {/*<tr>*/}
//                         {/*    <td colSpan="2" className="text-right font-bold">Total:</td>*/}
//                         {/*    <td>{totalAmount}</td>*/}
//                         {/*</tr>*/}
//                         </tfoot>
//                     </table>
//                     <form action={handlePaymentAction}>
//                         <button type="submit"
//                                 className="border rounded-sm shadow-sm mt-4 pl-8 pr-8 bg-gray-200 hover:bg-gray-300">
//                             Pay
//                         </button>
//                     </form>
//
//                 </div>
//             </>
//         )
// }

import {redirect} from "next/navigation";
import {getCartByIdFromCookie} from "@/app/api/cart";
import {IncrementProductQuantity} from "@/ui/atoms/IncrementProductQuantity";
import {handlePaymentAction} from "@/app/cart/actions";
import {RemoveButton} from "@/ui/atoms/buttons/RemoveButton";
import NextImage from "next/image";
import {ProductCoverImage} from "@/ui/atoms/ProductCoverImage";

export default async function Cart() {
    const cart = await getCartByIdFromCookie();
    if (!cart || cart.orderItems.length === 0) {
        redirect("/")
    }

    // Obliczanie łącznej kwoty koszyka
    const totalAmount: number = cart.orderItems.reduce((acc, item) => {
        return acc + (item.product ? item.product.price * item.quantity : 0);
    }, 0);
    return (
        <div className="bg-white">
            <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl p-10">Shopping Cart</h1>

            <section aria-labelledby="cart-heading">
                <h2 id="cart-heading" className="sr-only">
                    Items in your shopping cart
                </h2>

                <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
                    {cart.orderItems.map((item) => (
                        <li key={item.id} className="flex py-6">
                            <div className="flex-shrink-0">
                                {item.product?.images[0]?.url && (
                                    <ProductCoverImage
                                        src={item.product.images[0].url}
                                        alt={""}
                                    />
                                )}

                            </div>

                            <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                                <div>
                                    <div className="flex justify-between">
                                        <h4 className="text-sm">
                                            {item.product?.name}
                                        </h4>
                                        { item.product?.price && (
                                            <p className="ml-4 text-sm font-medium text-gray-900">{item.product?.price*item.quantity/100} zł</p>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-1 items-end justify-between">
                                    <IncrementProductQuantity
                                        itemId={item.id}
                                        quantity={item.quantity}
                                        // price={item.product.price}
                                    />
                                    <div className="ml-4">
                                        <RemoveButton itemId={item.id}/>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Order summary */}
            <section aria-labelledby="summary-heading" className="mt-10">
                <h2 id="summary-heading" className="sr-only">
                    Order summary
                </h2>

                <div>
                    <dl className="space-y-4">
                        <div className="flex items-center justify-between">
                            <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                            <dd className="ml-4 text-base font-medium text-gray-900">{totalAmount/100} zł</dd>
                        </div>
                    </dl>
                    <p className="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
                </div>

                <form className="mt-10" action={handlePaymentAction}>
                    <button
                        type="submit"
                        className="w-full rounded-md border border-transparent bg-gray-400 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                        Pay
                    </button>
                </form>

            </section>
        </div>
    )
}

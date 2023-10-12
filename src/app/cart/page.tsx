import {redirect} from "next/navigation";
import {IncrementProductQuantity} from "@/ui/atoms/IncrementProductQuantity";
import {getCartByIdFromCookie} from "@/app/api/cart";
import RemoveButton from "@/ui/atoms/buttons/RemoveButton";
import {handlePaymentAction} from "@/app/cart/actions";

export default async function Cart() {
    const cart = await getCartByIdFromCookie();
    if (!cart || cart.orderItems.length === 0) {
        redirect("/")
    }
        // Obliczanie łącznej kwoty koszyka
        // const totalAmount: number = (.)cart.orderItems.reduce((acc, item) => {
        //     return acc + (item.product ? item.product.price * item.quantity : 0);
        // }, 0);

        return (
            <>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.orderItems.map((item) =>
                            item.product && (
                                <tr key={item.id}>
                                    <td>{item.product.name}</td>
                                    <td className="text-center">
                                        <IncrementProductQuantity
                                            itemId={item.id}
                                            quantity={item.quantity}
                                            // price={item.product.price}
                                        />
                                    </td>
                                    <td>{item.product.price}</td>
                                    <td>
                                        <RemoveButton itemId={item.id}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                        {/*<tr>*/}
                        {/*    <td colSpan="2" className="text-right font-bold">Total:</td>*/}
                        {/*    <td>{totalAmount}</td>*/}
                        {/*</tr>*/}
                        </tfoot>
                    </table>
                    <form action={handlePaymentAction}>
                        <button type="submit"
                                className="border rounded-sm shadow-sm mt-4 pl-8 pr-8 bg-gray-200 hover:bg-gray-300">
                            Pay
                        </button>
                    </form>

                </div>
            </>
        )
}
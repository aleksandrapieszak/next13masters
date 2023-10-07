import {redirect} from "next/navigation";
import {IncrementProductQuantity} from "@/ui/atoms/IncrementProductQuantity";
import {getCartByIdFromCookie} from "@/api/cart";

export default async function Cart(){
    const cart = await getCartByIdFromCookie();
    if (!cart){
        redirect("/")
    }

    // Obliczanie łącznej kwoty koszyka
    // const totalAmount: number = cart.orderItems.reduce((acc, item) => {
    //     return acc + (item.product ? item.product.price * item.quantity : 0);
    // }, 0);

    return(
        <>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cart.orderItems.map((item)=>
                        item.product &&(
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
            </div>
        </>
    )
}

import {type SingleProductItemFragment} from "@/gql/graphql";

type AddToCartProps = {
    product: SingleProductItemFragment;
};

import {addOrUpdateProductToCart, getOrCreateCart} from "@/app/api/cart";

export const AddToCardButton = ({ product }: AddToCartProps) => {
    async function addProductToCartAction() {
        "use server";

        const cart = await getOrCreateCart();
        const orderItem = cart.orderItems.find((item) =>
            item.product?.id === product.id ? item : undefined,
        );


        await addOrUpdateProductToCart(
            cart.id,
            product.id,
            orderItem ? orderItem.id : undefined,
            orderItem ? orderItem.quantity + 1 : 1,
            orderItem ? product.price * (orderItem.quantity + 1) : product.price,
        );
    }
    return (
        <form action={addProductToCartAction}>
            <button
                id="add-to-cart-button"
                name="add-to-cart-button"
                type="submit"
                className="disable:cursor-wait mt-4 justify-center pb-5 text-center">
                <div
                    className="mt-3 flex items-center justify-center rounded-md bg-gray-300 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    Add to cart</div>
            </button>
        </form>
          )
}

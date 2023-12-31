import {ProductItemWithImageAndButton} from "@/ui/molecules/ProductItemWithImageAndButton";
import type {ProductListItemFragment} from "@/gql/graphql";

export const ProductList = ({products}:{products: ProductListItemFragment[]}) => {
    return (
        <ul className=" bg-white p-5 mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" data-testid="products-list">

            {products.map((product)=> {
                return (
                    <ProductItemWithImageAndButton key={product.id} product={product}/>
                )
            })}
        </ul>
    );
};

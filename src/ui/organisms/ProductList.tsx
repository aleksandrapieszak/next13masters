import {ProductItemWithImageAndButton} from "@/ui/molecules/ProductItemWithImageAndButton";
import {ProductItemType} from "@/ui/types";

export const ProductList = ({products}:{products: ProductItemType[]}) => {
    return (
        <ul className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-4 " data-testid="products-list">
            {products.map((product)=> {
                return (
                    <ProductItemWithImageAndButton key={product.id} product={product}/>
                )
            })}
        </ul>
    );
};

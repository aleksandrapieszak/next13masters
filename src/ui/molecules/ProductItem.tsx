import {ProductPrice} from "@/ui/atoms/ProductPrice";
import {ProductTitle} from "@/ui/atoms/ProductTitle";
import {ProductCategory} from "@/ui/atoms/ProductCategory";
import {StarsItemList} from "@/ui/molecules/StarsItemList";
import type {ProductItemType} from "@/ui/types";

type ProductItemProps = {
    product: ProductItemType
    }
export const ProductItem = ({
                                product: {category, name, price}
                                }: ProductItemProps) => {
    return (
        <div className="mt-2">
            <ProductPrice price={price}/>
            <ProductTitle name={name}/>
            <ProductCategory category={category}/>
        </div>
    )
}

import {ProductPrice} from "@/ui/atoms/ProductPrice";
import {ProductTitle} from "@/ui/atoms/ProductTitle";
import {ProductCategory} from "@/ui/atoms/ProductCategory";
import {StarsItemList} from "@/ui/molecules/StarsItemList";
import {ProductItemType} from "@/ui/types";
import {formatMoney} from "@/ui/utils"

type ProductItemProps = {
    product: ProductItemType
    }
export const ProductItem = ({
                                product: {category, name, price, numberOfStars}
                                }: ProductItemProps) => {
    return (
        <div className="relative mt-4 text-center">
            <ProductPrice price={formatMoney(price)}/>
            <ProductTitle name={name}/>
            <ProductCategory category={category}/>
            <StarsItemList numberOfStars={numberOfStars}/>
        </div>
    )
}

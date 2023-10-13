import {ProductPrice} from "@/ui/atoms/ProductPrice";
import {ProductTitle} from "@/ui/atoms/ProductTitle";
import {ProductCategory} from "@/ui/atoms/ProductCategory";
import type {ProductListItemFragment} from "@/gql/graphql";
import {StarsItemListSumRating} from "@/ui/atoms/StarsItemListSumRating";

type ProductItemProps = {
    product: ProductListItemFragment
    }
export const ProductItem = ({
                                product: {categories, name, price, averageRating}
                                }: ProductItemProps) => {


    return (
        <div className="mt-2">
            <ProductPrice price={price}/>
            <ProductTitle name={name}/>
            {categories[0] && (<ProductCategory category={categories[0].name}/>)}
            {averageRating && (
                <StarsItemListSumRating numberOfStars={averageRating} hidden={false}/>

            )}
        </div>
    )
}

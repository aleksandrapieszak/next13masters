import {ProductPrice} from "@/ui/atoms/ProductPrice";
import {ProductTitle} from "@/ui/atoms/ProductTitle";
import {ProductCategory} from "@/ui/atoms/ProductCategory";
import {ProductListItemFragment} from "@/gql/graphql";

type ProductItemProps = {
    product: ProductListItemFragment
    }
export const ProductItem = ({
                                product: {categories, name, price}
                                }: ProductItemProps) => {


    return (
        <div className="mt-2">
            <ProductPrice price={price}/>
            <ProductTitle name={name}/>
            {categories[0] && (<ProductCategory category={categories[0].name}/>)}
        </div>
    )
}

import Link from "next/link";
import {ProductCoverImage} from "@/ui/atoms/ProductCoverImage";
// import {AddToCardButton} from "@/ui/atoms/buttons/AddToCardButton";
import {ProductItem} from "@/ui/molecules/ProductItem";
import type {ProductListItemFragment} from "@/gql/graphql";
//produkt ze wszystkimi właściwościami nawet guzikiem
type ProductItemProps = {
    product: ProductListItemFragment
}
export const ProductItemWithImageAndButton = ({product}:
                                                  ProductItemProps) => {
    return (
        <li>
            <div className="rounded-md text-center">
                <Link href={`/product/${product.id}`}>
                    {product.images[0] &&
                        (<ProductCoverImage src={product.images[0].url} alt={""}/>)}
                    <ProductItem product={product}/>
                </Link>
            </div>
        </li>

    )
}
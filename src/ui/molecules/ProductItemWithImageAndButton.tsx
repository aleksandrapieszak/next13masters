import {ProductCoverImage} from "@/ui/atoms/ProductCoverImage";
import {AddToCardButton} from "@/ui/atoms/buttons/AddToCardButton";
import {ProductItem} from "@/ui/molecules/ProductItem";
import type {ProductItemType} from "@/ui/types";
//produkt ze wszystkimi właściwościami nawet guzikiem
type ProductItemProps = {
    product: ProductItemType
}
export const ProductItemWithImageAndButton = ({product}:
                        ProductItemProps) => {
    return (
        <li className="m-4 rounded bg-gray-100">
        <article>
            <ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt}/>
            <ProductItem product={product}/>
            <AddToCardButton title={'Add to card'}/>
        </article>
        </li>

    )
}
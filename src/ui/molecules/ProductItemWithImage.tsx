import {ProductCoverImage} from "@/ui/atoms/ProductCoverImage";
import {AddToCardButton} from "@/ui/atoms/buttons/AddToCardButton";
import {ProductItem} from "@/ui/molecules/ProductItem";
import type {ProductItemType} from "@/ui/types";
import Link from "next/link";
//produkt ze wszystkimi właściwościami nawet guzikiem
type ProductItemProps = {
    product: ProductItemType
}
export const ProductItemWithImage = ({product}:
                                                  ProductItemProps) => {
    return (
            <div className="rounded-md text-center">
                <Link href={`/product/${product.id}`}>
                    <ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt}/>
                    <ProductItem product={product}/>
                </Link>
            </div>

    )
}
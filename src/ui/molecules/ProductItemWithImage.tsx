import Link from "next/link";
import {ProductCoverImage} from "@/ui/atoms/ProductCoverImage";
import {ProductItem} from "@/ui/molecules/ProductItem";
import type {ProductItemType} from "@/ui/types";
type ProductItemProps = {
    product: ProductItemType
}
export const ProductItemWithImage = ({product}:
                                                  ProductItemType) => {
    return (
            <div className="rounded-md text-center">
                <Link href={`/product/${product.id}`}>
                    {product.coverImage &&
                    (<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt}/>)}
                    <ProductItem product={product}/>
                </Link>
            </div>

    )
}
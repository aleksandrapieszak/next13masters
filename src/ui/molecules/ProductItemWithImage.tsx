import Link from "next/link";
import {ProductCoverImage} from "@/ui/atoms/ProductCoverImage";
import {ProductItem} from "@/ui/molecules/ProductItem";
import {ProductListItemFragment} from "@/gql/graphql";
import {getProductsByPage} from "@/api/products";
type ProductItemProps = {
    product: ProductListItemFragment
}
export const ProductItemWithImage = ({product}:
                                                  ProductItemProps) => {
    return (
            <div className="rounded-md text-center">
                <Link href={`/product/${product.id}`}>
                    {product.images[0] &&(
                        <ProductCoverImage src={product.images[0].url} alt={""}/>)}
                    <ProductItem product={product}/>
                </Link>
            </div>

    )
}
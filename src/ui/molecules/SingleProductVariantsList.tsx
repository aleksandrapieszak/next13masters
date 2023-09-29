import { type ProductListItemFragment } from "@/gql/graphql";
import {SingleProductVariantsSelect} from "@/ui/atoms/SingleProductVariantsSelect";
import {getProductVariants} from "@/api/products";

type SingleProductVariantsProps = {
    product: ProductListItemFragment;
};

export const SingleProductVariantsList = async ({ product }: SingleProductVariantsProps) => {
    const variants = await getProductVariants(product.id);
    return <SingleProductVariantsSelect variants={variants} />;
};
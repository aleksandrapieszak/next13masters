import {ProductItemType} from "@/ui/types";

type ProductResponseItem = {
    id: string,
    title: string,
    price: number,
    description: string
    category: string
    rating: {
        rate: number
        count: number
    }
    image: string
    longDescription: string


}

export const getProductList = async () => {

    const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=20`);
    const productsResponse = (await res.json()) as ProductResponseItem[];

    //mapowanie
    return productsResponse.map(
        productResponseItemToProductResponseType
    )
}


export const getProductById = async (id: ProductResponseItem["id"]) => {


    const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`)
    const product = (await res.json()) as ProductResponseItem;
    return productResponseItemToProductResponseType(product);
}


export const productResponseItemToProductResponseType = (product: ProductResponseItem): ProductItemType => {
    return {
        id: product.id,
        name: product.title,
        category: product.category,
        price: product.price,
        coverImage: {
            src: product.image,
            alt: product.title
        }
    }
}
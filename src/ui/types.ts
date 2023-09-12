export type ProductItemType = {
    id:string,
    category: string,
    name: string,
    price: number,
    numberOfStars: number,
    coverImage: {
        src: string,
        alt: string,
    }
}
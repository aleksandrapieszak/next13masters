export type ProductItemType = {
    id:number,
    category: string,
    name: string,
    price: number,
    numberOfStars: number,
    coverImage: {
        src: string,
        alt: string,
    }
}
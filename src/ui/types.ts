export type ProductItemType = {
    id:number,
    category: string,
    name: string,
    price: string,
    numberOfStars: number,
    coverImage: {
        src: string,
        alt: string,
    }
}
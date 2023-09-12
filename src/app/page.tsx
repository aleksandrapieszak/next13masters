import {ProductItemWithImageAndButton} from "@/ui/molecules/ProductItemWithImageAndButton";
import {ProductList} from "@/ui/organisms/ProductList";
import {ProductItemType} from "@/ui/types";

const products:ProductItemType[] = [
    {
        id:1,
        category: "structural image",
        name: "ROSE GOLD WHITE",
        price: "299",
        numberOfStars: 5,
        coverImage: {
            src: "/images/2.jpg",
            alt: 'blabla',
        }
    },
    {
        id:2,
        category: "painted image",
        name: "BEIGE MOOD",
        price: "120",
        numberOfStars: 5,
        coverImage: {
            src: "/images/1.jpg",
            alt: 'blabla',
        }
    },
    {
        id:3,
        category: "structural images",
        name: "BLUE MOON",
        price: "99",
        numberOfStars: 5,
        coverImage: {
            src: "/images/3.jpg",
            alt: 'blabla',
        }
    },
    {
        id:4,
        category: "painted image",
        name: "MOOD HARRY",
        price: "720",
        numberOfStars: 1,
        coverImage: {
            src: "/images/1.jpg",
            alt: 'blabla',
        }
    },
]


export default function Home() {
    return (
        <section
            className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-2 ">
            <ProductList products={products}/>
        </section>
    );
}

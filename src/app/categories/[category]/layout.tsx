import type {ReactNode} from "react";
import {getCategories} from "@/api/products";


// export const generateStaticParams = async () => {
//     return [
//         {category: "t-shirts"},
//         {category: "hoodies"},
//         {category: "accessories"}
//     ]
// }
export const generateStaticParams = async () => {
    // Pobierz kategorie używając funkcji getCategories()
    const categories = await getCategories();

    // Przemapuj kategorie na oczekiwany format
    const params = categories.map(category => ({
        category: category.slug // zakładając, że obiekty kategorii mają pole slug
    }));

    return params;
}
export default function CategoryProductLayout({children}: { children: ReactNode }) {
    return children
}
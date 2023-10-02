import React, {Suspense} from "react";
import {SuggestedProductsList} from "@/ui/organisms/SuggestedProducts";
import { getProductsSuggestedList} from "@/api/products";

export default async function HomePage() {
    const suggestedProducts =
        await getProductsSuggestedList('T-Shirts');


    return (
        <>
            <div> Home Page</div>
            <aside>
                <Suspense fallback={"Ładowanie....."}>
                    {suggestedProducts ? (
                        <SuggestedProductsList products={suggestedProducts}/>
                    ) : (
                        <div>Brak sugerowanych produktów.</div>
                    )}                </Suspense>
            </aside>
        </>
    )
}




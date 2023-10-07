import React, {Suspense} from "react";
import {SuggestedProductsList} from "@/ui/organisms/SuggestedProducts";
import {getCollections, getProductsSuggestedList} from "@/api/products";
import CollectionSection from "@/ui/organisms/CollectionSection";

export default async function HomePage() {
    const suggestedProducts =
        await getProductsSuggestedList('T-Shirts');

    const collections = await getCollections();


    return (
        <>
            <div> Home Page</div>
            <CollectionSection collections={collections}/>
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




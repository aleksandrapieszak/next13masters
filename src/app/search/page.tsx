import { notFound } from "next/navigation";
import {ProductList} from "@/ui/organisms/ProductList";
import {getSearchProductsList} from "@/app/api/products";

type SearchPageProps = {
    searchParams: { [key: string]: string };
};
export default async function SearchPage({ searchParams }: SearchPageProps) {
    if (!searchParams.query) {
        return notFound();
    }

    const products = await getSearchProductsList(searchParams.query);

    if (!products) {
        return notFound();
    }

    return (
        <div className="flex min-h-screen flex-col items-center p-12">
            <ProductList products={products} />
        </div>
    );
}
import { redirect } from "next/navigation";
import {ProductList} from "@/ui/organisms/ProductList";
import {getProductList} from "@/api/products";

export default async function Products() {
     redirect("/products/1");
}
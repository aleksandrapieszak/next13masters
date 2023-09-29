import {redirect} from "next/navigation";


export default async function CategoryProductPage({params}: { params: {category: string, pageNumber: string }}) {

    redirect(`/categories/${params.category}/1`);

}
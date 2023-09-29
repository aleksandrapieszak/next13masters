import {redirect} from "next/navigation";


export default async function CategoryProductPage({params}: { params: {category: string, pageNumber: string }}) {

    console.log(params.category);
    redirect(`/categories/${params.category}/1`);

}
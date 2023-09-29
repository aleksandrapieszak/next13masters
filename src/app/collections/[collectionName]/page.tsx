import {redirect} from "next/navigation";


export default async function CollectionsProductPage({params}: { params: {collectionName: string, pageNumber: number }}) {

    redirect(`/collections/${params.collectionName}/1`);

}
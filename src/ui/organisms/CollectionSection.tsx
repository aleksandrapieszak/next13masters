import NextImage from "next/image";
import {ActiveLink} from "@/ui/atoms/ActiveLink";

type Collections ={
    id: string;
    name: string;
    slug: string;
    image:{
        url:string;
        fileName:string
    }

}

type Props =  {
    collections: Collections[];
}

export const CollectionSection = ({collections
                                          }: Props)=>{

    return (
        <section
            aria-labelledby="collection-heading"
            className="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
        >
            <h2 id="collection-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Shop by Collection
            </h2>
            <p className="mt-4 text-base text-gray-500">
                Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
            </p>

            <ul className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                {collections.map((collection) => (
                    <li key={collection.id}>
                        <ActiveLink href={`/collections/${collection.slug}`} exact>
                            <div
                                aria-hidden="true"
                                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                            >
                                <NextImage
                                    src={collection.image.url}
                                    alt={collection.image.fileName}
                                    className="h-full w-full object-cover object-center"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <h3 className="mt-4 text-base font-semibold text-gray-900">{collection.name}</h3>
                        </ActiveLink>
                    </li>
                ))}
            </ul>
        </section>
    )
}
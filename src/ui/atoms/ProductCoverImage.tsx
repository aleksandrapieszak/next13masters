import NextImage from "next/image";

export const ProductCoverImage = ({src,alt}:{src:string, alt:string}) => {
    return (

                    <div className="rounded-md bg-white ">
                        <NextImage
                            width={256}
                            height={256}
                            src={src}
                            alt={alt}
                            className="h-72 w-72 sm:object-center mx-auto object-contain object-center p-4 transition-transform hover:scale-105"
                        />
                    </div>
    )
}
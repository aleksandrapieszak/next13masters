export const ProductCoverImage = ({src,alt}:{src:string, alt:string}) => {
    return (
        <div className=" relative h-72 w-auto overflow-hidden rounded-lg hover:scale-105 item-center">
            <img width="320"
                 height="320"
                 alt={alt}
                 src={src}
                 className=" h-full max-h-80 w-full object-center p-4 transition-transform hover:scale-105 rounded-lg"
            />
        </div>
    )
}
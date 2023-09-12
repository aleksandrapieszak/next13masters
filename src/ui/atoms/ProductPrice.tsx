export const ProductPrice = ({price}: { price: number }) => {
    return (
        <div
            className=" inset-x-0 flex h-12 items-end justify-center overflow-hidden rounded-lg p-4 ">
            <div className="relative  text-2xl font-semibold text-black ">{price}</div>
        </div>
    )
}
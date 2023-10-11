import { ImageResponse } from "next/server";
import {getProductById} from "@/app/api/products";

// export const runtime = "edge";
export const alt = "Ecommerce";
export const size = {
    width: 630,
    height: 630,
};

export const contentType = "image/png";

type ProductOpengraphImageProps = {
    params: {
        productId: string;
    };
};

export default async function ProductOpengraphImage({ params }: ProductOpengraphImageProps) {
    const product = await getProductById(params.productId);

    if (!product) {
        return new ImageResponse(<>Shop online</>, {
            width: 630,
            height: 630,
        });
    }

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    color: "black",
                    background: "white",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    gap: "25px",
                    marginBottom: "50px", // Dodano margines u dołu
                }}
            >
                <div
                    style={{
                        margin: "25px 0",
                        flexBasis: "50%",
                        border: "solid 5px #fff",
                        background: "white",
                        display: "flex",
                        justifyContent: "center",
                        padding: "10px",
                    }}
                >
                    <img
                        alt="product"
                        src={product.images[0]?.url}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flexBasis: "50%",
                        padding: "25px",
                        justifyContent: "center", // Wyśrodkowanie tekstu w pionie
                        alignItems: "center", // Wyśrodkowanie tekstu w poziomie
                    }}
                >
                    <h1
                        style={{
                            color: "black",
                        }}
                    >
                        {product.name}
                    </h1>
                    <p>Category: {product.categories[0]?.name} </p>
                    <p>{product.description}</p>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );


}
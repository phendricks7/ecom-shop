import Image from "next/image";
import { Card, CardContent } from "../ui/card"
import { use } from "react";

export const RelatedProducts = ({ data }: {data: any}) => {
    const relatedProducts: any = use(data);

    return (
        <>
            <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.slice(0, 3).map((product: Record<string, any>) => (
                <Card key={product.id}>
                <CardContent className="p-4">
                    <div className="relative mb-4 h-48">
                    <Image alt={product.name} layout="fill" objectFit="contain" src={product.image} />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
                    <p className="">${product.price.toFixed(2)}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        </>
    )
}
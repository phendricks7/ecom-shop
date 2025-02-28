import { RefreshCcw, ShieldCheck, Star, Truck } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";


export const ProductDetail = ({ data }: { data: any }) => {
    const product = data;
    
    return (
        <div className="gap-8 md:flex">
          <div className="md:w-1/2">
            <div className="relative h-96">
              <Image
                alt={product.name}
                className="rounded-lg"
                layout="fill"
                objectFit="contain"
                src={product.image}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
            <div className="mb-4 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-current text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm">({product.reviews} reviews)</span>
            </div>
            <p className="mb-4 text-2xl font-bold">${product.price.toFixed(2)}</p>
            <p className="mb-6">{product.description}</p>
            <Button className="mb-4 w-full">Add to Cart</Button>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <Truck className="mr-2 h-5 w-5" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center">
                <RefreshCcw className="mr-2 h-5 w-5" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5" />
                <span>2-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
    )
}
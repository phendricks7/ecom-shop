import api from "@/api";
import { Suspense } from "react";
import { RelatedProducts } from "@/components/plp/RelatedProducts";
import { ProductDetail } from "@/components/plp/ProductDetail";

// export const dynamic = "force-dynamic";

export default async function ProductDetailPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const product = await api.product.get(id);
  const relatedProducts = api.product.list(product.category);

  return (
    <div className="container flex-1 px-4 py-4 md:px-6 md:py-12">
      <div className="rounded-lgshadow-xl grid gap-8 overflow-hidden">
        <ProductDetail data={product} />
      </div>
      <div className="mt-12">
        <Suspense fallback={<span>Loading related produces...</span>}>
          <RelatedProducts data={relatedProducts} />
        </Suspense>
      </div>
    </div>
  );
}

import { Product } from "@/components/product";
import { Review } from "@/components/review";
import React, { Suspense } from "react";

const ProductDetailPage = () => {
  return (
    <div>
      <h1> Product Detail Page</h1>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>

      <Suspense fallback={<p>Loading review...</p>}>
        <Review />
      </Suspense>
    </div>
  );
};

export default ProductDetailPage;

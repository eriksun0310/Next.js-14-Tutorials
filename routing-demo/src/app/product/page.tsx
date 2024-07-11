import Link from "next/link";
import React from "react";

const Product = () => {
  const productId = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <Link href="/product/1">
        <h2> Product 1</h2>
      </Link>

      <Link href="/product/2">
        <h2> Product 2</h2>
      </Link>
      <Link href="/product/3" replace>
        <h2> Product 3</h2>
      </Link>
      <Link href={`/product/${productId}`}>
        <h2> Product productId</h2>
      </Link>
    </>
  );
};

export default Product;

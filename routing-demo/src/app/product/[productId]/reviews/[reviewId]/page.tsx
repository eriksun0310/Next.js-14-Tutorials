"use client";
import React from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ReviewDetail = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
  const random = getRandomInt(2);
  if (random === 1) {
    return new Error("Error loading review");
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
};

export default ReviewDetail;

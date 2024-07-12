import React from "react";

export const Review = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Review</div>;
};

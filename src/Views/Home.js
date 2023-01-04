import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

export default function Home() {
  const url =
    "https://63b50ba39f50390584bf6aea.mockapi.io/api/v1/products?p=1&l=10";

  let products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = <p>There was an error.</p>;
  }
  if (products.loading) {
    content = <Loader />;
  }
  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
      {content}
    </div>
  );
}

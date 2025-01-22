"use client";
import InputField from "@/components/InputField";
import ProductCard from "@/components/ProductCard";
import {
  IconPackage,
  IconCoin,
  IconAlignRight,
  IconHeart,
} from "@tabler/icons-react";
import React, { useState, useEffect } from "react";

interface Product {
  product_id: number;
  name: string;
  description: string;
  product_type: string;
  price: number;
  quantity: number;
  image: string;
}
const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const productsFromDb = await fetch("http://localhost:3001/api/products");
    const prods = await productsFromDb.json();
    setProducts(prods);
    console.log(prods);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col bg-[#0a0a0a] w-full">
      <div className="flex justify-center p-1">
        <p className="text-5xl font-bold">Products</p>
      </div>
      <div className="flex flex-row gap-1 justify-start pl-10 mt-5">
        <InputField
          inputType="text"
          placeholder="Type"
          icon={
            <IconPackage
              size={24}
              className="opacity-50 right-2 top-2 absolute"
            />
          }
        />
        <InputField
          inputType="text"
          placeholder="Description"
          icon={
            <IconAlignRight
              size={24}
              className="opacity-50 right-2 top-2 absolute"
            />
          }
        />
        <InputField
          inputType="text"
          placeholder="Price"
          icon={
            <IconCoin size={24} className="opacity-50 right-2 top-2 absolute" />
          }
        />
        <InputField
          inputType="text"
          placeholder="Reviews"
          icon={
            <IconHeart
              size={24}
              className="opacity-50 right-2 top-2 absolute"
            />
          }
        />
      </div>
      <div></div>
      <div className="flex p-10 w-full h-full flex-row gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.product_id}
            description={product.description}
            name={product.name}
            likes={930}
            price={product.price}
            image="/shoes1.jpg"
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

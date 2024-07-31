"use client";

import { useState } from "react";
import AllProducts from "./allproducts";
import Categories from "./categories";
import MyInfo from "./myinfo";
import { ProductItemType } from "./product-type";

const products: ProductItemType[] = [
  {
    id: 1,
    name: 'Iphone 15 Promax',
    price: 2500,
    category: "Phones"
  },
  {
    id: 2,
    name: 'Airpod',
    price: 25,
    category: "Gadgets"
  },
  {
    id: 3,
    name: 'Eid Special Nara J.',
    price: 25,
    category: "Cloths"
  },
  {
    id: 4,
    name: 'Tesla Cybertruck',
    price: 65000,
    category: "Cars"
  },
  {
    id: 5,
    name: 'Macbook',
    price: 2500,
    category: "Computers"
  }
];

export default function Home() {
  const [categList, setCategList] = useState([
    "All", "Phones", "Gadgets", "Cloths", "Cars", "Computers"
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);


  return (
    <>
      <MyInfo />
      <Categories
        categories={categList}
      />
      <AllProducts
        productList={filteredProducts}
      />
    </>
  );
}

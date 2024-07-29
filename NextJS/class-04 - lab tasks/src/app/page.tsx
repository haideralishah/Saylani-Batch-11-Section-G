"use client";

import { useState } from "react";
import AllProducts from "./allproducts";
import Categories from "./categories";
import MyInfo from "./myinfo";

export default function Home() {
  const [categList, setCategList] = useState([
    "Phones", "Gadgets", "Cloths","Cars", "Computers", "Electronics"
  ]);

  return (
    <>
      <MyInfo />
      <Categories
        categories={categList}
      />
      <AllProducts />
    </>
  );
}

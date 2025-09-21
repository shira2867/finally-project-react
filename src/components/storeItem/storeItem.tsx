
import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/storeService";

interface Product {
  title: string;
}

export  function StoreItems() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const items = getProducts();
    setProducts(items);
  }, []);

  console.log(products);
  return null;
}

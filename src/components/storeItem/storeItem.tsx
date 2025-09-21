import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/storeService";
import { addToLocalStorage, GetFromLocalStorage } from "../../utils/utils";
import './storeItem.css'
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
const STORAGE_KEY = "products";

export function StoreItems() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cached = GetFromLocalStorage(STORAGE_KEY) as Product[] | null;
    if (cached) {
      console.log("Loaded products from localStorage");
      setProducts(cached);
      setLoading(false);
    } else {
      getProducts()
        .then((data) => {
          addToLocalStorage(STORAGE_KEY, data);
          console.log("Fetched from API and saved to localStorage");
          setProducts(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError(err.message);
          setLoading(false);
        });
    }
  }, []);

  if (loading) return <div>טוען...</div>;
  if (error) return <div>שגיאה: {error}</div>;

  return (
    <div className="products-container" >
      {products.map((product) => (
        <div key={product.id} className="product-card" >
          <img src={product.image} alt={product.title}  />
          <h3 style={{ fontSize: "14px" }}>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/storeService";

export function StoreItems() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then(data => {
        console.log("Products from server:", data); // הדפסה לקונסול
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>טוען...</div>;
  if (error) return <div>שגיאה: {error}</div>;

  return <div></div>;
}

export const getProducts = () => {
  return fetch("https://fakestoreapi.com/products")
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    });
};
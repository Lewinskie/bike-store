import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsAPI = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("/api/products");
    setProducts(res);
    console.log(products);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return { products: [products, setProducts] };
};

export default ProductsAPI;

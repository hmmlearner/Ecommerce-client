import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";

const Category = () => {
  const [products, setProducts] = useState([]);

  const fetchProductsAsync = () => {
    "catalogue/fetchProductsAsync",
      async () => {
        try {
          const response = await agent.Catalogue.list();
          if (response?.length) setProducts([response]);
        } catch (error) {
          console.log(error);
        }
      };
  };

  useEffect(() => {
    fetchProductsAsync();
  }, []);

  return <ProductList products={products} />;
};

export default Category;

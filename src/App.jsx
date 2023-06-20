import { React, useEffect, useState } from "react";
import "./App.css";

import Products from "./components/Products";


// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";

function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      console.log(products)
      setProducts(products);
    };

    loadData();
  }, []);

  return (
    <div className="container">
    <header className="header">
    <h1 className="title">Olympus Supplements</h1>
    <img className="logo" src="/logo.jpeg" alt="logo" />
    </header>
    <Products products={products}/>
    </div>
  );
}

export default App;

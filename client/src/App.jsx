import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SingleProductPage from "./pages/SingleProductPage";
import { useEffect, useState } from "react";
import ShoppingCart from "./pages/ShoppingCart";
import RenderProducts from "./components/product/RenderProducts";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchData() {
      await fetch('http://localhost:5000/products').then((result) => result.json()).then((data) => setProducts(data))
    }
    fetchData();
  },[])
  const [cart, setCart] = useState([]);

  const updateCartHandler = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; // increment the quantity of the existing product
      setCart([...cart]); // create a new array to trigger a re-render
    } else {
      setCart([...cart, { ...product, quantity: 1 }]); // add a new product to the cart with a quantity of 1
    }
    cart.numberOfItems += 1;
    console.log("cartnubmer", cart.numberOfItems);
  };

  const removeProductFromCartHandler = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  useEffect(() => {
    console.log("cart: ", cart);
  }, [cart]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="products"
          element={
            <Shop
              products={products}
              updateCartHandler={updateCartHandler}
              cart={cart}
            />
          }
        >
          <Route
            index
            element={
              <RenderProducts
                products={products}
                updateCartHandler={updateCartHandler}
              />
            }
          />
          <Route
            path=":id"
            element={
              <SingleProductPage
                products={products}
                updateCartHandler={updateCartHandler}
                cart={cart}
              />
            }
          />
          <Route
            path="cart"
            element={
              <ShoppingCart
                cart={cart}
                removeProduct={removeProductFromCartHandler}
              />
            }
          />
        </Route>

        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

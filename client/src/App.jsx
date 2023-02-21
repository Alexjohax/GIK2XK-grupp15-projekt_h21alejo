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
  const products = [
    {
      id: 1,
      name: "Super bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription: "Powerful bike for all your needs.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 200,
      rating: 5,
    },
    {
      id: 2,
      name: "Cool bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription: "High-quality tennis racket for professional players.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 150,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Broken bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription:
        "Comfortable and stylish shoes for running enthusiasts.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 80,
      rating: 2.2,
    },
    {
      id: 4,
      name: "Kevlar enhanced bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription:
        "Enjoy your music wirelessly with these high-quality headphones.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 120,
      rating: 3.8,
    },
    {
      id: 5,
      name: "Smart bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription:
        "Stay connected and track your fitness with this smartwatch.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 250,
      rating: 3.4,
    },
    {
      id: 6,
      name: "Portable bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription: "Take your music on the go with this portable speaker.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100,
      rating: 4.6,
    },
    {
      id: 7,
      name: "Portable bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription: "Take your music on the go with this portable speaker.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100,
      rating: 4.6,
    },
    {
      id: 8,
      name: "Portable bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription: "Take your music on the go with this portable speaker.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100,
      rating: 4.6,
    },
    {
      id: 9,
      name: "Portable bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription: "Take your music on the go with this portable speaker.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100,
      rating: 4.6,
    },
    {
      id: 10,
      name: "Portable bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription: "Take your music on the go with this portable speaker.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100,
      rating: 4.6,
    },
    {
      id: 11,
      name: "Portable bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription: "Take your music on the go with this portable speaker.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100,
      rating: 4.6,
    },
    {
      id: 12,
      name: "Portable bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription: "Take your music on the go with this portable speaker.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100,
      rating: 4.6,
    },
    {
      id: 13,
      name: "Portable bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription: "Take your music on the go with this portable speaker.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100,
      rating: 4.6,
    },
    {
      id: 14,
      name: "Portable bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      shortDescription: "Take your music on the go with this portable speaker.",
      longDescription:
        "Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 100,
      rating: 4.6,
    },
  ];

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

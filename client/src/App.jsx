import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  const products = [
    {
      id: 1,
      name: "Super bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      description: "Powerful bike for all your needs.",
      price: 200,
      rating: 5,
    },
    {
      id: 2,
      name: "Cool bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      description: "High-quality tennis racket for professional players.",
      price: 150,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Broken bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      description: "Comfortable and stylish shoes for running enthusiasts.",
      price: 80,
      rating: 2.2,
    },
    {
      id: 4,
      name: "Kevlar enhanced bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      description:
        "Enjoy your music wirelessly with these high-quality headphones.",
      price: 120,
      rating: 3.8,
    },
    {
      id: 5,
      name: "Smart bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      description:
        "Stay connected and track your fitness with this smartwatch.",
      price: 250,
      rating: 3.4,
    },
    {
      id: 6,
      name: "Portable bike",
      imageUrl:
        "https://thumbs.dreamstime.com/b/studio-product-photo-s-bicycle-bicycle-product-shot-s-174868523.jpg",
      description: "Take your music on the go with this portable speaker.",
      price: 100,
      rating: 4.6,
    },
  ];
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route
          path="/product/:id"
          element={<SingleProductPage products={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;

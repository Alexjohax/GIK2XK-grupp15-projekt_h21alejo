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

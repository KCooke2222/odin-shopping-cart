import { useState } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { products } from "./data/products";

function App() {
  const [cart, setCart] = useState({});

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar cart={cart}></NavBar>
      <Outlet context={{ products, cart, setCart }} />
    </div>
  );
}

export default App;

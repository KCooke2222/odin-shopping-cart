import { useState } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState({});
  const [cart, setCart] = useState([]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar></NavBar>
      <Outlet />
    </div>
  );
}

export default App;

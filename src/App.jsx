import { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState({});
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar></NavBar>
      <Outlet />
    </>
  );
}

export default App;

import Home from "./pages/Home";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import {} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Products from "./Screens/Products";
import SingleProduct from "./Screens/SingleProduct";

function App() {
  return (
    <div className="font-body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Register/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/product/:id" element={<SingleProduct/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import { Home, Cart } from "../pages";

export const AllRoutes = ({ products }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

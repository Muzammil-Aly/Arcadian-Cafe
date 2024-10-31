import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./index.css";
import Layout from "./assets/Components/Layout/Layout.jsx";
import Menu from "./assets/Components/Menu/Menu.jsx";
import Home from "./assets/Components/Home/Home.jsx";
import About from "./assets/Components/About/About.jsx";
import DishCategories from "./assets/Components/DishCategories/DishCategories.jsx";
import DishSubCategories from "./assets/Components/DishSubCategories/DishSubCategories.jsx";
import Contactus from "./assets/Components/Contactus/Contactus.jsx";
import CartData from "./assets/Components/CartData/CartData.jsx";
import AddtocartSelection from "./assets/Components/AddtocartSelection/AddtocartSelection.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contactus />} />
      <Route path="/cartItemSelection" element={<AddtocartSelection />} />

      <Route path="/categories/:dishId" element={<DishCategories />} />
      <Route path="/subcategories/:dishId/" element={<DishSubCategories />} />
      <Route path="/cart" element={<CartData />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

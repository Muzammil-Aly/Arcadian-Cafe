import React from "react";

import PopularDishes from "../PopularDishes/PopoularDishes";
const customStyles = {
  container: {
    backgroundColor: "#f0f0f0",
  },
  heading: {
    color: "#474747",
    textAlign: "left",
  },
  dishname: {
    color: "#F23A72",
    fontWeight: "600",
    textAlign: "left",
    fontSize: "1em",
  },
  dishnameQunatity: {
    color: "black",
  },
  card: {
    borderRadius: "15px",
    padding: "20px",
    backgroundColor: "#fff",
  },
};

const dishes = [
  {
    id: 1,
    image:
      "https://arcadiancafe.com/wp-content/uploads/2021/08/asianfusion-1.jpg",

    name: "Asian Fusion ",
    address: "#",
    quantity: "20",
  },
  {
    id: 2,
    image:
      "https://arcadiancafe.com/wp-content/uploads/2021/08/continental.jpg",
    name: "Continental/French Italian",
    address: "#",
    quantity: "18",
  },
  {
    id: 3,
    image: "https://arcadiancafe.com/wp-content/uploads/2021/08/desserts.jpg",
    name: "Dessert",
    quantity: "09",
    address: "#",
  },
  {
    id: 4,
    image:
      "https://arcadiancafe.com/wp-content/uploads/2021/08/fusion-cuisine.jpg",
    name: "Fusion Cuisne",
    address: "#",
    quantity: "20",
  },
  {
    id: 5,
    image: "https://arcadiancafe.com/wp-content/uploads/2021/08/kidsmenu.jpg",
    name: "kids menu",
    quantity: "20",

    address: "#",
  },
  {
    id: 6,
    image: "https://arcadiancafe.com/wp-content/uploads/2021/08/sideorders.jpg",
    name: "Side Order",
    quantity: "20",

    address: "#",
  },
  {
    id: 7,

    image:
      "https://arcadiancafe.com/wp-content/uploads/2021/08/straightfrombar.jpg",
    name: "Straight from the bar",
    address: "#",
    quantity: "10",
  },
];
const Menu = () => {
  return (
    <>
      <PopularDishes name="MENU" menuDishes={dishes} styles={customStyles} />
    </>
  );
};

export default Menu;

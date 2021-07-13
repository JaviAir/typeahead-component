import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import MyInput from "./myTypeahead/MyTA.js";

const carBrands = [
  "Alfa Romeo",
  "Audi",
  "BMW",
  "Chevrolet",
  "Chrysler",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "Honda",
  "Hyundai",
  "Jaguar",
  "Jeep",
  "Kia",
  "Mazda",
  "Mercedez-Benz",
  "Mitsubishi",
  "Nissan",
  "Peugeot",
  "Porsche",
  "SAAB",
  "Subaru",
  "Suzuki",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

ReactDOM.render(
  <MyInput list={carBrands} classname={"DropDownItem"} />,
  document.getElementById("root")
);

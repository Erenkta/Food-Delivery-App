import React from "react";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodSection.css";
import bread from "../../assets/bread.png";
import hamburger from "../../assets/hamburger.png";
import pizza from "../../assets/pizza.png";
import products from "../../assets/fake_data/products";
export default function FoodSection() {
  const arr = [1, 2, 3, 4, 5, 6];
  const categories = [
    { name: "Pizzas", list: products.filter(product=>product.category==="Pizza"), logo: pizza },
    { name: "Hamburgers", list: products.filter(product=>product.category==="Burger"), logo: hamburger },
    { name: "Breads", list: products.filter(product=>product.category==="Bread"), logo: bread },
  ];
  return (
    <div className="container" id="foodsection">
      <h1> ---- Foods ----</h1>
      {categories.map(
        (category) => (
          (
            <>
              <h2 className="pt-2 bt-2">
                <img key={arr.length * category.name.length} src={category.logo} alt="logo" className="mb-3"/> {category.name} :
              </h2>

              <div className="row" style={{ marginBottom: "150px" }}>
                {category.list.map((item) => (
                  <FoodItem key={item.id} item={item} />
                ))}
              </div>
            </>
          )
        )
      )}
    </div>
  );
}

import React from "react";
import "./HeroSection.css";
import Hero from "../../assets/hero.png";

export default function HeroSection() {
  return (
    <div id="herosection" className="hero-section-container">
        <div className="hero-section-container-info">
        <h1>Tasty Delivery</h1>
        <text> We are here to serve the better food with a light speed.<br/>Tasty Delivery is a family bussiness that spread their love to your foods.<br/>Order from us and witness this  magical moment...</text>
        <text></text>
        </div>
          <img alt="hero" src={Hero} />
    </div>
  );
}

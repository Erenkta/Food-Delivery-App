import React, { useState } from "react";
import "./Header.css";
import Logo from "../assets/logo.png";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
export default function Header() {
  const list = useSelector((state)=>state.cart.cartList)
  const totalPrice = useSelector((state)=>state.cart.totalCost)
  const openCart = () =>{
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex";
  }
  const closeCart = () =>{
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none";
  }
  return (
    <div className="header-div">
      <nav>
        <ul>
          <div className="brand-container">
            <img alt="Logo" src={Logo} />
            <li>Tasty Delivery</li>
          </div>
          <li>
            <a href="#herosection">About</a>
          </li>
          <li>
            <a href="#foodsection">Foods</a>
          </li>
          <li onClick={openCart}>My Cart</li>
        </ul>
        <ul className="sidebar">
          <button onClick={closeCart} className="btn-back btn btn-secondary btn-sm mx-2 mt-1">
            Geri Dön
          </button>
          <h2 className="mt-5 mb-4">Your Cart </h2>
          <h3>Total price is : {totalPrice} $</h3>
          {list.map((item)=>(
            list.filter((food)=>food.id === item.id).length >0 ?(<CartItem key={item.key} item={item} cartList={list}/>):(null)
          ))}

        
        </ul>
  
      </nav>
    </div>
  );
}

import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { remove_all_from_cart } from "../redux/state/cartSlice";
export default function CartItem({item,cartList}) {

  const dispatch = useDispatch();
  const payload = {
    id : item.id,
    total : item.quantity * item.price
  }
  const removeFromCart = () =>{
    dispatch(remove_all_from_cart(payload))
  }

  return (
      <div className="card mt-2">
        <div className="card-body">
          <div className="card-item">
            <img
              src={item.image}
              alt="hamburger"
              style={{ width: "64px", height: "64px", marginRight: "40px" }}
            ></img>
            <div className="card-item-info">
              <span>{item.name}</span>
              <span>{item.quantity} adet</span>
              <span> Total cost : {item.quantity * item.price}$</span>
            </div>
            <button onClick={()=>{removeFromCart()}} className="btn btn-sm btn-danger rounded-circle">X</button>
          </div>
        </div>
      </div>
  );
}

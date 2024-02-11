import React, { useEffect, useState } from "react";
import "./FoodItem.css";
import { useDispatch, useSelector} from "react-redux";
import { add_to_cart, remove_from_cart } from "../../redux/state/cartSlice";
export default function FoodItem({ item }) {

  const removedList = useSelector((state)=>state.cart.removedList)



  const [quantity, setQuantity] = useState (1);
  const [quantityMode, setQuantityMode] = useState(false);

  useEffect(() => {
    if (quantity === 0 || removedList.find((id)=>id === item.id)) {
      setQuantityMode(false);
      setQuantity(1);
    }
  }, [quantity,removedList]);
  const emptyItem = {
    id: 0,
    name: "",
    price: 0.0,
    image: "",
    quantity:1
  };

  const dispatch = useDispatch();

  const addFood = async() => {
    const copy = emptyItem;
    copy.id = item.id;
    copy.name = item.title;
    copy.price = item.price;
    copy.image = item.image;
    dispatch(add_to_cart(copy));
    setQuantityMode(true);
  };

  const incrementQuantity = () => {
    const copy = emptyItem;
    copy.id = item.id;
    copy.name = item.title;
    copy.price = item.price;
    copy.image = item.image;
    dispatch(add_to_cart(copy));
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () =>{
    setQuantity(quantity - 1);
    dispatch(remove_from_cart(item))
  }
  return (
    <div className="col-sm-4" style={{ height: "425px" }}>
      <div
        className="card d-flex align-items-center"
        style={{ height: "415px" }}
      >
        <img src={item.image} className="card-img-top w-50" alt="Food Photo" />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.desc}</p>

          {quantityMode ? (
            <div>
              <button onClick={() => {incrementQuantity()}} className="btn btn-success">
                +
              </button>
              <span
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                {quantity}
              </span>
              <button
                onClick={() => {
                  decrementQuantity()
                }}
                className="btn btn-danger"
              >
                -
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                addFood();
              }}
              className="btn btn-primary mt-2"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./Cart.scss";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "../img/p1.jpg",
      desc: "desc",
      title: "Dress",
      isNew: false,
      oldPrice: 19,
      price: 15,
    },
    {
      id: 2,
      img: "../img/p1.jpg",
      desc: "desc",
      title: "Hats",
      isNew: true,
      oldPrice: 20,
      price: 16,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 * ${item.price}</div>
          </div>
          <div className="delete">
            <DeleteOutlineOutlinedIcon />
          </div>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>123$</span>
      </div>
      <button>CHECKOUT</button>
      <span className="reset">reset cart</span>
    </div>
  );
};

export default Cart;

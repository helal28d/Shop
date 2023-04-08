import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = ["../img/im1.jpg", "../img/im2.jpg", "../img/im3.jpg"];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImage(1)} />
          <img src={images[2]} alt="" onClick={() => setSelectedImage(2)} />
        </div>
        <div className="mainImage">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">20 $</span>
        <p>product description</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />
            Add To wishlist
          </div>
          <div className="item">
            <BalanceIcon />
            Add to compare
          </div>
        </div>
        <div className="info">
          <span>Vendor : ADIDAS</span>
          <span>Vendor : ADIDAS</span>
          <span>Vendor : ADIDAS</span>
        </div>{" "}
        <hr />
        <div className="info">
          <span>Vendor : ADIDAS</span>
          <hr />
          <span>Vendor : ADIDAS</span>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;
//دقيقة 1:27

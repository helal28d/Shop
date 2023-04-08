import React from "react";
import "./FeaturedProducts.scss";

import Card from "../Card/Card.jsx";
const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "../img/p1.jpg",
      img2: "../img/p2.jpg",
      title: "product 1",
      isNew: false,
      oldPrice: 19,
      price: 15,
    },
    {
      id: 2,
      img: "../img/p1.jpg",
      img2: "../img/p2.jpg",
      title: "product2",
      isNew: true,
      oldPrice: 20,
      price: 16,
    },
    {
      id: 3,
      img: "../img/p1.jpg",
      img2: "../img/p2.jpg",
      title: "product2",
      isNew: true,
      oldPrice: 30,
      price: 26,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          The product details here ....The product details here ....The product
          details here .... The product details here ....The product details
          here ....The product details here ....
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

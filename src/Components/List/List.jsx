import React from "react";
import "./List.scss";
import Card from "../Card/Card";
const List = () => {
  const data = [
    {
      id: 1,
      img: "../img/p1.jpg",

      title: "Dress",
      isNew: false,
      oldPrice: 19,
      price: 15,
    },
    {
      id: 2,
      img: "../img/p1.jpg",

      title: "Hats",
      isNew: true,
      oldPrice: 20,
      price: 16,
    },
    {
      id: 3,
      img: "../img/p1.jpg",
      title: "Shirts",
      isNew: true,
      oldPrice: 30,
      price: 26,
    },
  ];
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;

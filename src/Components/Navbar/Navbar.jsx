import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="../img/syr.jpg" alt="" />
            <KeyboardArrowDownIcon className="icon" />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon className="icon" />
          </div>
          <div className="item">
            <Link className="link" to="/Products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/Products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/Products/2">
              Childern
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            ShopName
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact{" "}
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;

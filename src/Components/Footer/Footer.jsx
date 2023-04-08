import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categries</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Accessories</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Section about the site....</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Section about the site....</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">ShopName</span>
          <div className="copyright">@CopyRights</div>
        </div>
        <div className="right">
          <img src="../img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

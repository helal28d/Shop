import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US</span>
        <div className="mail">
          <input type="text" placeholder="Enter your emil" />
          <button>Join Us</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <GoogleIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;

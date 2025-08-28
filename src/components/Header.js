import { useEffect, useState } from "react";
import { LOGO_URL } from "../utills/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("iam use efeect");
  }, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>

      <div className="nav-items">
        {/* Navigation Menu */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
           
            <Link to="/about">About Us</Link>
          </li>
          <li>
      
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>

          <button
            className="btn"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

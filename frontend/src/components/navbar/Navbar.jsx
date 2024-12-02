import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Navbar = ({ handleToggled, toggleBackgroundColor }) => {
  return (
    <div className="navbar-container">
      <div className="nav-left">
        <h2>
          <Link to={"/"} className="links">
            PRODUCT STORE
            <CiShoppingCart className="cart-img" />
          </Link>
        </h2>
      </div>
      <div className="nav-right">
        <ul>
          <li
            className="cart-img-1"
            style={{ background: toggleBackgroundColor ? "black" : "" }}
          >
            <Link to={"/create"} className="links">
              <MdOutlineAddCircleOutline />
            </Link>
          </li>
          <li
            className="cart-img-1"
            style={{ background: toggleBackgroundColor ? "black" : "" }}
            onClick={handleToggled}
          >
            <Link className="links">
              {toggleBackgroundColor ? <IoSunnyOutline /> : <FaMoon />}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

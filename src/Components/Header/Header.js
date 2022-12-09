import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="headerContainer">
      <NavLink to={"/"}>
        <img
          src="https://previews.123rf.com/images/briang77/briang771602/briang77160200186/51929350-business-storefront.jpg"
          alt="Logo"
          className="logo"
        />
      </NavLink>
      <div className="navContainer">
        <div className="regularMenu">
          <div className="navBorder">
            <NavLink to={"products/"} className="btnNav">
              Products
            </NavLink>
            <NavLink to={"contact/"} className="btnNav">
              Contact and info
            </NavLink>
            <NavLink to={"shoppingcart/"} className="btnNav">
              Shopping cart
            </NavLink>
          </div>
        </div>
        <div className="burgerMenu">
          <div className="btnNav" onClick={() => setShowMenu(!showMenu)}>
            <label htmlFor="hamburger">&#9776;</label>
          </div>
          <div className={`hidenMenu ${showMenu ? "active" : ""}`}>
            <NavLink to={"products/"} className="btnNav">
              Products
            </NavLink>
            <NavLink to={"contact/"} className="btnNav">
              Contact and info
            </NavLink>
            <NavLink to={"shoppingcart/"} className="btnNav">
              Shopping cart
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

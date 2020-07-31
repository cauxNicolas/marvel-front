import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Marvel-Comics-Logo.svg";

const Header = () => {
  return (
    <div id="header">
      <Link to="/">
        <div className="contentHeader">
          <img src={logo} alt={logo} />
        </div>
      </Link>
      <Link to="/personnages">
        <div className="contentHeader">
          <p>Personnages</p>
        </div>
      </Link>
      <Link to="/comics">
        <div className="contentHeader">
          <p>Comics</p>
        </div>
      </Link>
      <Link to="favoris">
        <div className="contentHeader">
          <p>Favoris</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;

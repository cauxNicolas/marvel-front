import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Marvel-Comics-Logo.svg";

const Header = ({ search, handleSearch, handleSubmit }) => {
  return (
    <div id="header">
      <div className="headerLink">
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
        <Link to="/favoris">
          <div className="contentHeader">
            <p>Favoris</p>
          </div>
        </Link>
      </div>
      <div className="headerInput">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search ..."
            value={search}
            onChange={handleSearch}
          />
          <input type="submit" value="OK" />
        </form>
      </div>
      <div className="headerLogin">
        <p>Se déconnecter</p>
      </div>
    </div>
  );
};

export default Header;

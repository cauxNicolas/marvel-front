import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../img/Marvel-Comics-Logo.svg";
import Cookies from "js-cookie";

const Header = ({ search, handleSearch, handleSubmit }) => {
  const [lastname, setLastname] = useState("");
  const history = useHistory();

  useEffect(() => {
    const connexion = () => {
      let currentLastname = Cookies.get("lastname");
      if (currentLastname === undefined) {
        alert("vous allez être redirigé vers la home pour vous connecter !");
        history.push("/home");
      } else {
        setLastname(currentLastname);
      }
    };
    connexion();
  }, []);

  const login = () => {
    Cookies.remove("lastname");
    Cookies.remove("token");
    history.push("/home");
  };

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
      <div className="headerLogin" onClick={login}>
        <p className="capital">{lastname}</p>
        <p>Se déconnecter ?</p>
      </div>
    </div>
  );
};

export default Header;

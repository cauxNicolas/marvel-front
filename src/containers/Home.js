import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/marvel-bg.jpg";
import captain from "../img/marvel-america.png";
import thanos from "../img/marvel-thanos.png";

const Home = () => {
  return (
    <main>
      <div className="homeFlex">
        <div>
          <img src={thanos} alt={thanos} />
        </div>
        <div id="home" className="contentHome">
          <div className="marvel-bg">
            <img src={logo} alt={logo} />
          </div>
          <div className="flexLink">
            <Link to="/personnages">
              <p>Personnages</p>
            </Link>
            <Link to="/comics">
              <p>Comics</p>
            </Link>
            <Link to="/favoris">
              <p>Favoris</p>
            </Link>
          </div>
        </div>
        <div>
          <img src={captain} alt={captain} />
        </div>
      </div>
    </main>
  );
};

export default Home;

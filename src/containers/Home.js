import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/marvel-bg.jpg";
import captain from "../img/marvel-america.png";
import thanos from "../img/marvel-thanos.png";

const Home = () => {
  return (
    <main>
      <div className="homeFlex">
        <div id="home" className="contentHome">
          <div className="marvel-bg">
            <img src={logo} alt={logo} />
          </div>
          <div className="flexLink">
            <Link to="/personnages">
              <button>CONTINUER</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

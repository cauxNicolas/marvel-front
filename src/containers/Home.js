import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/marvel-bg.jpg";
import axios from "axios";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchdata = async () => {
      const response = await axios.post("http://localhost:3100/home", {
        email: email,
        password: password,
      });

      console.log(response.data);
    };
    fetchdata();
  };

  return (
    <main>
      <div className="homeFlex">
        <div id="home" className="contentHome">
          <div className="marvel-bg">
            <img src={logo} alt={logo} />
          </div>
          <div className="flexLink">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={handlePasswordChange}
              />
              <input type="submit" value="CONNEXION" />
            </form>
            <div className="register">
              <Link to="/register">
                <p>
                  Vous n'êtes pas encore inscrit ? <span>Cliquez ici</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

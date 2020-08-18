import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../img/marvel-bg.jpg";
import axios from "axios";
import Cookies from "js-cookie";

const Home = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPaswword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorInputEmpty, setErrorInputEmpty] = useState(false);
  const [errorInput, setErrorInput] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email && password) {
      const fetchdata = async () => {
        try {
          const response = await axios.post("http://localhost:3100/home", {
            email: email,
            password: password,
          });
          if (response.status === 200) {
            console.log(response.data);
            Cookies.set("token", `${response.data.token}`, { expires: 7 });
            Cookies.set("lastname", `${response.data.lastname}`, {
              expires: 7,
            });
            history.push("/personnages");
          }
        } catch (error) {
          if (error.response.status === 400) {
            setErrorInput(true);
            setErrorEmail(true);
          } else if (error.response.status === 401) {
            setErrorInput(true);
            setErrorPaswword(true);
          }
        }
      };
      fetchdata();
    } else {
      setErrorInputEmpty(true);
    }
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
                className={
                  errorInput === true
                    ? errorEmail === true
                      ? "errorEmail"
                      : ""
                    : errorInputEmpty === true
                    ? "errorEmail"
                    : ""
                }
              />
              {errorEmail === false ? (
                ""
              ) : (
                <div id="errorHome">
                  <p>Email inexistant</p>
                </div>
              )}
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={handlePasswordChange}
                className={
                  errorInput === true
                    ? errorPassword === true
                      ? "errorPassword"
                      : ""
                    : errorInputEmpty === true
                    ? "errorPassword"
                    : ""
                }
              />
              {errorPassword === false ? (
                ""
              ) : (
                <div id="errorHome">
                  <p>Mot de passe incorrecte</p>
                </div>
              )}
              {errorInputEmpty === false ? (
                ""
              ) : (
                <div id="errorHome">
                  <p>Merci de saisir les champs</p>
                </div>
              )}
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

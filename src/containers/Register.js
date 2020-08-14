import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("caux");
  const [lastname, setLastname] = useState("nicolas");
  const [email, setEmail] = useState("marvel@marvel.com");
  const [password, setPassowrd] = useState("azerty");
  const [confirmPassword, setConfirmPassord] = useState("azerty");
  //
  const [errorName, setErrorName] = useState(false);
  const [errorLastname, setErrorLastname] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorEmailExist, setErrorEmailExist] = useState(false);
  const [errorPassword, setErrorPaswword] = useState(false);
  const [errorConfirmPaswword, setErrorConfirmPassword] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  // email existant
  const [errorAffiche, setErrorAffiche] = useState(false);
  const [errorPasswordIdentique, setErrorPassordIdentique] = useState(false);

  const history = useHistory();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassowrd(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassord(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      if (!name) {
        setErrorName(true);
        setErrorAffiche(true);
      }
      if (!lastname) {
        setErrorLastname(true);
        setErrorAffiche(true);
      }
      if (!email) {
        setErrorEmail(true);
        setErrorAffiche(true);
      }
      if (!password) {
        setErrorPaswword(true);
        setErrorAffiche(true);
      }
      if (!confirmPassword) {
        setErrorConfirmPassword(true);
        setErrorAffiche(true);
      }

      if (name && lastname && email && password && confirmPassword) {
        if (password.length > 5 && confirmPassword.length > 5) {
          if (password === confirmPassword) {
            try {
              const response = await axios.post(
                "http://localhost:3100/register",
                {
                  name: name,
                  lastname: lastname,
                  email: email,
                  password: password,
                  confirmPassword: confirmPassword,
                }
              );
              console.log(response.data);
              setErrorName(false);
              history.push("/home");
            } catch (error) {
              setErrorEmailExist(true);
              setErrorEmail(true);
            }
          } else {
            setErrorPassordIdentique(true);
          }
        } else {
          setPasswordLength(true);
        }
      }
    };
    fetchData();
  };

  return (
    <div id="register">
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Inscrivez vous !</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={handleNameChange}
            className={errorName === false ? "" : "error"}
          />
          <input
            type="text"
            placeholder="Prénom"
            value={lastname}
            onChange={handleLastnameChange}
            className={errorLastname === false ? "" : "error"}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className={errorEmail === false ? "" : "error"}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            className={errorPassword === false ? "" : "error"}
            className={errorPasswordIdentique === false ? "" : "error"}
          />
          <input
            type="password"
            placeholder="Confirmer mot de passe"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={errorConfirmPaswword === false ? "" : "error"}
            className={errorPasswordIdentique === false ? "" : "error"}
          />
          <input type="submit" placeholder="VALIDER" />
        </div>
        {errorAffiche === false ? (
          ""
        ) : (
          <div className="errorAffiche">
            <p>Merci de remplir le(s) champ(s) en rouge(s).</p>
          </div>
        )}
        {errorEmailExist === false ? (
          ""
        ) : (
          <div className="errorAffiche">
            <p>Email deja existant</p>
          </div>
        )}
        {passwordLength === false ? (
          ""
        ) : (
          <div className="errorAffiche">
            <p>les mots de passe doivent supérieurs à 5 lettres</p>
          </div>
        )}
        {errorPasswordIdentique === false ? (
          ""
        ) : (
          <div className="errorAffiche">
            <p>les mots de passe ne sont pas identiques</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const PersosCard = ({ url, extension, alt, description, id }) => {
  const [favoris, setFavoris] = useState("star");
  const [favorisStar, setFavorisStar] = useState("far fa-star");

  useEffect(() => {
    if (Cookies.get("favoris")) {
      let cookie = Cookies.get("favoris");
      const numberTab = [];
      const cookieTab = cookie.split("-");
      for (let i = 0; i < cookieTab.length; i++) {
        numberTab.push(Number(cookieTab[i]));
      }
      for (let i = 0; i < numberTab.length; i++) {
        if (numberTab[i] === id) {
          console.log(numberTab[i]);
          console.log(id);
          setFavoris("starRed");
          setFavorisStar("fas fa-star");
        } else {
          setFavoris("star");
          setFavorisStar("far fa-star");
        }
      }
    }
  }, []);

  // check favoris
  const goToFavoris = (event) => {
    event.preventDefault();
    setFavoris(!favoris);
    setFavorisStar(!favorisStar);

    let currentFavorites = Cookies.get("favoris");

    if (currentFavorites === undefined) {
      Cookies.set("favoris", `${id}`, {
        expires: 7,
      });
    } else {
      let favoritesTab = currentFavorites.split("-");
      let stringifiedId = id.toString();
      if (favoritesTab.indexOf(stringifiedId) === -1) {
        favoritesTab.push(id);
        let newFavorites = favoritesTab.join("-");
        Cookies.set("favoris", newFavorites, {
          expires: 7,
        });
      } else {
        let idIndex = favoritesTab.indexOf(stringifiedId);

        favoritesTab.splice(idIndex, 1);
        let newFavorites = favoritesTab.join("-");
        Cookies.set("favoris", newFavorites, {
          expires: 7,
        });
        if (favoritesTab.length === 0) {
          Cookies.remove("favoris");
        }
      }
    }
  };

  return (
    <>
      <div className="blockImg">
        <img src={`${url}.${extension}`} alt={alt} />
      </div>
      <div className="blockElement">
        <h2>{alt}</h2>
        {description && (
          <div className="blockElementDesc">
            <p>{description}</p>
          </div>
        )}
      </div>
      <div className={favoris ? "star" : "starRed"} onClick={goToFavoris}>
        <i className={favorisStar ? "far fa-star" : "fas fa-star"}></i>
      </div>
    </>
  );
};

export default PersosCard;

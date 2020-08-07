import React, { useState } from "react";
import Cookies from "js-cookie";

const ComicsCard = ({ url, extension, title, id }) => {
  const [favoris, setFavoris] = useState("star");

  // check favoris
  const goToFavoris = (event) => {
    event.preventDefault();
    // toggle star
    setFavoris(!favoris);

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
      <div className="blocComicsImg">
        <img src={`${url}.${extension}`} alt={title} />
      </div>
      <div className="blocComicsText">
        <p>{title}</p>
      </div>
      <div className={favoris ? "star" : "starRed"} onClick={goToFavoris}>
        <i className={favoris ? "far fa-star" : "fas fa-star"}></i>
      </div>
    </>
  );
};

export default ComicsCard;

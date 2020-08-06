import React, { useState } from "react";
import Cookies from "js-cookie";

const ComicsCard = ({ url, extension, title, id }) => {
  const [favoris, setFavoris] = useState("star");
  // pour les favoris
  const [tabComicsId, setTabcomicsid] = useState([]);
  const newTabComicsId = [...tabComicsId];

  // check favoris
  const goToFavoris = (event) => {
    event.preventDefault();
    // toggle star
    setFavoris(!favoris);

    // on place les id en cookie dans une string en evitant le undefined
    let currentFavorites = Cookies.get("favoris");
    console.log(currentFavorites);

    if (currentFavorites === undefined) {
      Cookies.set("favoris", `${id}`, {
        expires: 7,
      });
    } else {
      let favoritesTab = currentFavorites.split("-");
      // on place les nouveaux id uniquement
      /* console.log(favoritesTab);
      console.log(id);
      console.log(favoritesTab.indexOf(id)); */
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

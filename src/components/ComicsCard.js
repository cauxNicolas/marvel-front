import React, { useState } from "react";
import Cookies from "js-cookie";

const ComicsCard = ({
  url,
  extension,
  title,
  id,
  setTabcomicsid,
  newTabComicsId,
}) => {
  const [favoris, setFavoris] = useState("star");

  // check favoris
  const goToFavoris = (event) => {
    event.preventDefault();
    // toggle star
    setFavoris(!favoris);
    // on push dans le tableau
    if (newTabComicsId.indexOf(id) === -1) {
      newTabComicsId.push(id);
      Cookies.set(id, "/comics", { expires: 7 });
    } else {
      let suppr = newTabComicsId.indexOf(id);
      newTabComicsId.splice(suppr, 1);
      Cookies.remove(id);
    }

    setTabcomicsid(newTabComicsId);
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

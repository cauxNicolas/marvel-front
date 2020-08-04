import React, { useState } from "react";
import Cookies from "js-cookie";

const PersosCard = ({
  url,
  extension,
  alt,
  description,
  id,
  setTabPersoId,
  newTabPersoId,
}) => {
  const [favoris, setFavoris] = useState("star");

  // check favoris
  const goToFavoris = (event) => {
    event.preventDefault();
    setFavoris(!favoris);
    // on push dans le tableau
    if (newTabPersoId.indexOf(id) === -1) {
      newTabPersoId.push(id);
      Cookies.set(id, "/personnages", { expires: 7 });
    } else {
      let suppr = newTabPersoId.indexOf(id);
      newTabPersoId.splice(suppr, 1);
      Cookies.remove(id);
    }
    setTabPersoId(newTabPersoId);
  };

  console.log("cookies", Cookies.get());
  // verifier si un cookie existe Object.keys(Cookies.get()).length === 0
  if (Object.keys(Cookies.get()).length !== 0) {
    console.log("cookie existe");
  } else {
    console.log("cookie inexistant");
  }

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
        <i className={favoris ? "far fa-star" : "fas fa-star"}></i>
      </div>
    </>
  );
};

export default PersosCard;

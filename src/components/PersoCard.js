import React, { useState } from "react";

const PersoCard = ({ url, extension, alt, description }) => {
  const [favoris, setFavoris] = useState("star");

  // check favoris
  const goToFavoris = (event) => {
    event.preventDefault();
    setFavoris(!favoris);
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
        <i className={favoris ? "far fa-star" : "fas fa-star"}></i>
      </div>
    </>
  );
};

export default PersoCard;

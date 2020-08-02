import React, { useState } from "react";

const ComicsCard = ({ url, extension, title }) => {
  const [favoris, setFavoris] = useState("star");

  // check favoris
  const goToFavoris = (event) => {
    event.preventDefault();
    setFavoris(!favoris);
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

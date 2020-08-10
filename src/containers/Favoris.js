import React from "react";
import Cookies from "js-cookie";
import FavorisComics from "../components/FavorisComics";
import FavorisPersonnages from "../components/FavorisPersonnages";

const Favoris = () => {
  if (Cookies.get("favoris")) {
    const cookie = Cookies.get("favoris");
    const cookieTab = cookie.split("-");

    return (
      <div id="favoris">
        <main>
          <div className="content">
            <div className="favorisElement">
              <div id="favorisPersonnages">
                <div>
                  <h2>
                    <span>Super-Héros</span>
                  </h2>
                </div>
                <div className="personnageFlex">
                  {cookieTab === undefined
                    ? ""
                    : cookieTab.map((id, index) => {
                        return <FavorisPersonnages id={id} />;
                      })}
                </div>
              </div>
              <div id="favorisComics">
                <div>
                  <h2>
                    <span>comics</span>
                  </h2>
                </div>
                <div className="comicsFlex">
                  {cookieTab === undefined
                    ? ""
                    : cookieTab.map((id, index) => {
                        return <FavorisComics id={id} />;
                      })}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <p>Vous n'avez aucun Favoris ...</p>
      </div>
    );
  }
};

export default Favoris;

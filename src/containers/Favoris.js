import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Favoris = () => {
  const [dataComics, setDataComics] = useState({});
  const [dataPersonnage, setDataPersonnage] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const limit = 100;

  useEffect(() => {
    const fetchData = async () => {
      const responseComics = await axios.get(
        `http://gateway.marvel.com/v1/public/comics?&limit=${limit}${process.env.REACT_APP_MARVEL}`
      );

      const responsePersonnage = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?&limit=${limit}&${process.env.REACT_APP_MARVEL}`
      );

      setDataComics(responseComics.data);
      setDataPersonnage(responsePersonnage.data);
      setIsLoading(false);
    };
    fetchData();
  }, [setDataComics, setDataPersonnage]);

  const getCookie = Cookies.get();
  const keysId = Object.keys(getCookie);

  return (
    <div id="favoris">
      {isLoading === true ? (
        <div className="loading">
          <p>Chargement de vos Favoris ...</p>
        </div>
      ) : (
        <main>
          <div className="content">
            <div className="favorisElement">
              <div id="favorisPersonnages">
                <div>
                  <h2>
                    <span>Super-Héros</span>
                  </h2>
                </div>
                <div>
                  <div>
                    {dataPersonnage.data.results.map((result, index) => {
                      console.log(dataComics.data.total);
                      return (
                        <>
                          {keysId.map((key, index) => {
                            if (result.id === Number(key)) {
                              return (
                                <div
                                  key={index}
                                  className="favorisPersoElement"
                                >
                                  <div>
                                    <img
                                      src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                                      alt={result.name}
                                    />
                                  </div>
                                  <p>{result.name}</p>
                                </div>
                              );
                            }
                          })}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div id="favorisComics">
                <div>
                  <h2>
                    <span>comics</span>
                  </h2>
                </div>
                <div>
                  <div>
                    {dataComics.data.results.map((result, index) => {
                      return (
                        <>
                          {keysId.map((key, index) => {
                            console.log(result);
                            if (result.id === Number(key)) {
                              return (
                                <div
                                  key={index}
                                  className="favorisPersoElement"
                                >
                                  <div>
                                    <img
                                      src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                                      alt={result.title}
                                    />
                                  </div>
                                  <p>{result.title}</p>
                                </div>
                              );
                            }
                          })}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Favoris;

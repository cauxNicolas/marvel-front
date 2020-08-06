import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Perso = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [dataComics, setDataComics] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters/${id}?${process.env.REACT_APP_MARVEL}`
      );

      const responseComics = await axios.get(
        `http://gateway.marvel.com/v1/public/characters/${id}/comics?${process.env.REACT_APP_MARVEL}`
      );

      setData(response.data);
      setDataComics(responseComics.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {isLoading === true ? (
        <div className="loading">
          <p>Chargement du Héro ...</p>
        </div>
      ) : (
        <>
          {data.data.results.map((result, index) => {
            return (
              <main id="perso" key={index}>
                <div className="blocPerso">
                  <div
                    className="blocPersoImg"
                    style={{
                      backgroundImage: `url(
                          ${result.thumbnail.path}.${result.thumbnail.extension}
                          )`,
                    }}
                  ></div>
                  <div className="blocPersoDesc">
                    <h2>{result.name}</h2>
                    {result.description && (
                      <>
                        <p className="bold marginBot20">Description :</p>
                        <p>{result.description}</p>
                        <hr />
                      </>
                    )}
                    {result.comics.available === 0 ? (
                      <></>
                    ) : (
                      <div className="blocPersoComics">
                        <p className="bold marginBot20">Comics</p>
                        <div className="contentPersoComics">
                          {dataComics.data.results.map((result) => {
                            return (
                              <div key={result.id} className="comicsDesc">
                                <img
                                  src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                                  alt={result.title}
                                />
                                <p className="comicsTitle">{result.title}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </main>
            );
          })}
        </>
      )}
    </>
  );
};

export default Perso;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import axios from "axios";

const Personnages = ({ dataLogin, setDataLogin, setLocation }) => {
  let location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [favoris, setFavoris] = useState("star");

  const limit = 100;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=${limit}&${process.env.REACT_APP_MARVEL}`
      );
      setDataLogin(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [offset, setDataLogin]);
  setLocation(location.pathname);

  // check favoris

  return (
    <div id="personnages">
      {isLoading === true ? (
        <div className="loading">
          <p>chargement de Super Héros ...</p>
        </div>
      ) : (
        <main>
          <div className="content">
            {dataLogin.data.results.map((result) => {
              const goToFavoris = (event) => {
                event.preventDefault();
                setFavoris(!favoris);
              };
              return (
                <Link key={result.id} to={"/perso/" + result.id}>
                  <div className="blockImg">
                    <img
                      src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                      alt={result.name}
                    />
                  </div>
                  <div className="blockElement">
                    <h2>{result.name}</h2>
                    {result.description && (
                      <div className="blockElementDesc">
                        <p>{result.description}</p>
                      </div>
                    )}
                  </div>
                  <div
                    className={favoris ? "star" : "starRed"}
                    onClick={goToFavoris}
                  >
                    <i className="fas fa-star"></i>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="pagination">
            <Pagination
              limit={limit}
              total={dataLogin.data.total}
              setOffset={setOffset}
            />
          </div>
        </main>
      )}
    </div>
  );
};

export default Personnages;

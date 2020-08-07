import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import axios from "axios";
import PersosCard from "../components/PersosCard";

const Personnages = ({ dataLogin, setDataLogin, setLocation }) => {
  let location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

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
              return (
                <Link key={result.id} to={"/perso/" + result.id}>
                  <PersosCard
                    url={result.thumbnail.path}
                    extension={result.thumbnail.extension}
                    alt={result.name}
                    description={result.description}
                    id={result.id}
                  />
                </Link>
              );
            })}
          </div>
          <div className="pagination">
            <Pagination
              limit={limit}
              total={dataLogin.data.total}
              setOffset={setOffset}
              offset={offset}
            />
          </div>
        </main>
      )}
    </div>
  );
};

export default Personnages;

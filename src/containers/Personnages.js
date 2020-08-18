import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import Loader from "../img/loader.gif";
import axios from "axios";
import PersosCard from "../components/PersosCard";

const Personnages = ({ dataLogin, setDataLogin, setLocation }) => {
  let location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  const limit = 100;
  console.log("/peronnages avant useffect");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=${limit}&ts=1&apikey=63d48fb669cb6f20dde29bcaa0cc0be0&hash=3f705632315a5f5825baff31f0bde09c`
      );
      setDataLogin(response.data);
      console.log("/peronnages  entre response l.21");

      setIsLoading(false);
      console.log("/peronnages  isloaoding l.23", isLoading);
    };
    fetchData();
  }, [offset, setDataLogin, isLoading]);
  setLocation(location.pathname);

  return (
    <div id="personnages">
      {isLoading === true ? (
        <div className="loading">
          <p>chargement de Super Héros ...</p>
          <img src={Loader} alt="loading" />
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

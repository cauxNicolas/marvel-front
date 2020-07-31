import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import axios from "axios";

const Personnages = () => {
  const [dataLogin, setDataLogin] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  const limit = 99;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?offset=${offset}&limit=${limit}&${process.env.REACT_APP_MARVEL}`
      );

      setDataLogin(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [offset]);
  console.log(dataLogin.data);
  return (
    <div id="personnages">
      {isLoading === true ? (
        <div className="loading">
          <p>chargement de Super Héros en cours ...</p>
        </div>
      ) : (
        <main>
          <div className="content">
            {dataLogin.data.results.map((result) => {
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
            <div></div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Personnages;

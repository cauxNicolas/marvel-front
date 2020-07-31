import React, { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [dataComics, setDataComics] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/comics?&limit=100${process.env.REACT_APP_MARVEL}`
      );
      setDataComics(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  console.log(dataComics);

  return (
    <div id="comics">
      {isLoading === true ? (
        <div className="loading">
          <p>Chargement de Comics en cours ...</p>
        </div>
      ) : (
        <main>
          <div className="content">
            {dataComics.data.results.map((result) => {
              return (
                <div key={result.id}>
                  <p>{result.title}</p>
                </div>
              );
            })}
          </div>
        </main>
      )}
    </div>
  );
};

export default Comics;

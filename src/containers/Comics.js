import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import ComicsCard from "../components/ComicsCard";
import axios from "axios";

const Comics = ({ dataComics, setDataComics, setLocation }) => {
  let location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  const limit = 100;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/comics?offset=${offset}&limit=${limit}${process.env.REACT_APP_MARVEL}`
      );
      setDataComics(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [offset, setDataComics]);
  setLocation(location.pathname);
  console.log(dataComics.data);
  return (
    <div id="comics">
      {isLoading === true ? (
        <div className="loading">
          <p>Chargement de Comics ...</p>
        </div>
      ) : (
        <main>
          <div className="content">
            {dataComics.data.results.map((result) => {
              return (
                <div key={result.id} className="blocComics">
                  <ComicsCard
                    url={result.thumbnail.path}
                    extension={result.thumbnail.extension}
                    title={result.title}
                    id={result.id}
                  />
                </div>
              );
            })}
          </div>
          <div className="pagination">
            <Pagination
              limit={limit}
              total={dataComics.data.total}
              offset={dataComics.data.offset}
              setOffset={setOffset}
            />
          </div>
        </main>
      )}
    </div>
  );
};

export default Comics;

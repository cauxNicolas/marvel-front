import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FavorisComics({ id }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/comics/${id}?${process.env.REACT_APP_MARVEL}`
      );
      setData(response.data);
    };
    fetchData();
  }, [id]);
  //console.log("data", data);
  return (
    <>
      {data.data ? (
        <div className="ensembleComics">
          <div>
            <img
              src={`${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`}
              alt={data.data.results[0].title}
            />
          </div>
          <p>{data.data.results[0].title}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

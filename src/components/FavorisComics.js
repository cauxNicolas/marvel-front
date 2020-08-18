import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FavorisComics({ id }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=63d48fb669cb6f20dde29bcaa0cc0be0&hash=3f705632315a5f5825baff31f0bde09c`
      );
      setData(response.data);
    };
    fetchData();
  }, [id]);

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

import React, { useState, useEffect } from "react";
import axios from "axios";

const FavorisPersonnages = ({ id }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=63d48fb669cb6f20dde29bcaa0cc0be0&hash=3f705632315a5f5825baff31f0bde09c`
      );
      setData(response.data);
    };
    fetchData();
  }, [id]);

  console.log(data.data);

  return (
    <>
      {data.data ? (
        <div className="ensemblePersonnage">
          <div>
            <img
              src={`${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`}
              alt={data.data.results[0].name}
            />
          </div>
          <p>{data.data.results[0].name}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FavorisPersonnages;

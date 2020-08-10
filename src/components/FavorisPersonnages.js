import React, { useState, useEffect } from "react";
import axios from "axios";

const FavorisPersonnages = ({ id }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters/${id}?${process.env.REACT_APP_MARVEL}`
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

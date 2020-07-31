import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Perso = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters/${id}?${process.env.REACT_APP_MARVEL}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  console.log(data.data);
  return (
    <div>
      {isLoading === true ? (
        <p>chargement en cours ...</p>
      ) : (
        <div>
          {data.data.results.map((results, index) => {
            return <div key={index}>{results.name}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default Perso;

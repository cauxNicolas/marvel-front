import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [dataLogin, setDataLogin] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(process.env.REACT_APP_MARVEL);
      setDataLogin(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  console.log(dataLogin.data);
  return (
    <div>
      {isLoading === true ? (
        <p>chargement en cours ...</p>
      ) : (
        <div>
          <p>
            {dataLogin.data.results.map((result, index) => {
              return <p key={index}>{result.id}</p>;
            })}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

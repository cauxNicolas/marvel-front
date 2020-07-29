import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(process.env.REACT_APP_MARVEL);
      setData(response.data);
    };
    setIsLoading(false);
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      {isLoading === true ? <p>chargement en cours ...</p> : <div>ok</div>}
    </div>
  );
}

export default App;

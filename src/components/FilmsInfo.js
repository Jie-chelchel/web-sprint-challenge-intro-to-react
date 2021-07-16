import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Film = (props) => {
  const { name } = props;
  const [filmData, setFilmData] = useState([]);

  const fetchFilmData = useCallback(async () => {
    try {
      const res = await axios.get("https://swapi.dev/api/films");

      const data = await res.data.results;
      setFilmData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchFilmData();
  }, [fetchFilmData]);
  return (
    <div>
      <button>Films</button>
    </div>
  );
};

export default Film;

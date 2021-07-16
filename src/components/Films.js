import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Film = () => {
  const [filmData, setFilmData] = useState("");
  const fetchFilmData = useCallback(async () => {
    try {
      console.log("dddd");

      const res = await axios.get("https://swapi.dev/api/films");
      console.log(res);

      const data = await res.data;
      setFilmData(data);
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

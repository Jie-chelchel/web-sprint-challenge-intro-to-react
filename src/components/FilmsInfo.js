import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
//No time to add the movie information to each character.
const Film = (props) => {
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
      <p>Title: {filmData.title}</p>
      <p>Director: {filmData.director}</p>
      <p>Producer{filmData.producer}</p>
      <p>Release Date{filmData.release_date}</p>
    </div>
  );
};

export default Film;

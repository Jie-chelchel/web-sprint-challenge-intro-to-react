import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacterData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axios.get("https://swapi.dev/api/people");
      if (!res.statusText) {
        throw new Error("Something went wrong");
      }
      const data = await res.data;
      setCharacters(data);
      console.log(characters);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchCharacterData();
  }, [fetchCharacterData]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star War Major Characters List</h1>
      {isLoading && <p>Loading</p>}
      {!isLoading && error && <p>{error}</p>}
    </div>
  );
};

export default App;

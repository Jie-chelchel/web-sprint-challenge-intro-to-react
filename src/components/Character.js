// Write your Character component here
import React, { useState } from "react";
import Details from "./Details";
import styled from "styled-components";

const CharacterStyle = styled.div`
  width: 70%;
  background-color: #8a2b06;
  display: center;
  margin: 20px auto;
  margin-bottom: 10px;
  padding: 5px 20px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  & h2 {
    letter-spacing: 2px;
  }

  & button {
    background-color: #3d7f7f;
    padding: 10px 20px;
  }
`;

const Character = (props) => {
  const [openDetails, setOpenDetails] = useState(false);

  const detailsHandler = () => {
    setOpenDetails(!openDetails);
  };

  const { character } = props;
  return (
    <CharacterStyle>
      <h2>{character.name}</h2>

      <button onClick={detailsHandler}>Click me</button>

      {openDetails && <Details character={character} />}
    </CharacterStyle>
  );
};

export default Character;

// Write your Character component here
import React, { useState } from "react";
import Details from "./Details";
import styled from "styled-components";

const CharacterStyle = styled.div`
  width: 70%;
  background-color: #293d4f;
  border: 2px solid black;
`;

const Character = (props) => {
  const [openDetails, setOpenDetails] = useState(false);

  const detailsHandler = () => {
    setOpenDetails(!openDetails);
  };

  const { character } = props;
  return (
    <CharacterStyle>
      <h2>
        {character.name}
        <button onClick={detailsHandler}>Click me</button>
      </h2>
      {!openDetails && <Details character={character} />}
    </CharacterStyle>
  );
};

export default Character;

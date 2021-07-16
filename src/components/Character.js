// Write your Character component here
import React, { useState } from "react";
import Details from "./Details";
import styled from "styled-components";

const CharacterStyle = styled.div`
  width: 60%;
  background-color: #8a2b06;
  display: center;
  margin: 30px auto;
  margin-bottom: 30px;
  padding: 5px 20px;

  & div {
    display: flex;
    justify-content: space-around;
    align-items: baseline;

    & h2 {
      letter-spacing: 2px;
      margin-left: 50px;
    }

    & button {
      background-color: #414141;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 5px;
      margin-left: auto;
      color: white;
      font-size: 1rem;
    }
    & button:hover {
      background-color: #08111a;
    }
    @media (max-width: 550px) {
      flex-direction: column;
    }
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
      <div>
        <h2>{character.name}</h2>

        <button onClick={detailsHandler}>Learn More</button>
      </div>

      {openDetails && <Details character={character} />}
    </CharacterStyle>
  );
};

export default Character;

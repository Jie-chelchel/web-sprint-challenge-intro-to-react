import React from "react";
import styled from "styled-components";

const EntryStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Details = (props) => {
  const { character } = props;
  return (
    <EntryStyle>
      <p>Gender : {character.gender}</p>
      <p>Height : {character.height} cm</p>
      <p>Mass : {character.mass} kg</p>
      <p>Hair Color : {character.hair_color} cm</p>
      <p>Eye Color : {character.eye_color} cm</p>
      <p>Birth Year : {character.birth_year} cm</p>
    </EntryStyle>
  );
};

export default Details;

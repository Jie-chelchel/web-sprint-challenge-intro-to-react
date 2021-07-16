import React from "react";
import styled from "styled-components";

const EntryStyle = styled.div`
  width: 60%;
  margin: 0 auto;
  background-color: #292a2a;
  color: white;
  display: flex;
  flex-direction: column;

  & p {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Details = (props) => {
  const { character } = props;
  return (
    <EntryStyle>
      <p>Gender : {character.gender}</p>
      <p>Height : {character.height} cm</p>
      <p>Mass : {character.mass} kg</p>
      <p>Hair Color : {character.hair_color} </p>
      <p>Eye Color : {character.eye_color} </p>
      <p>Birth Year : {character.birth_year} </p>
    </EntryStyle>
  );
};

export default Details;

import React from "react";
import styled from "styled-components";
import Films from "./Films";

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
      <p>Skin Color : {character.skin_color} </p>

      <p>Birth Year : {character.birth_year} </p>
      <div>
        <Films />
      </div>
    </EntryStyle>
  );
};

export default Details;

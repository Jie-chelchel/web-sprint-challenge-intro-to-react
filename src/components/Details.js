import React from "react";
import styled from "styled-components";
import CharacterFilms from "./CharaterFilms";
import FilmsInfo from "./FilmsInfo";

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

  & ul {
    font-size: 1.2rem;
  }
`;

const Details = (props) => {
  const { character } = props;

  // const films = "";
  // character.films.map((cur) => {
  //   return films + cur;
  // });
  const films = character.films;
  return (
    <EntryStyle>
      <p>Gender : {character.gender}</p>
      <p>Height : {character.height} cm</p>
      <p>Mass : {character.mass} kg</p>
      <p>Hair Color : {character.hair_color} </p>
      <p>Eye Color : {character.eye_color} </p>
      <p>Skin Color : {character.skin_color} </p>
      <p>Birth Year : {character.birth_year} </p>
      <ul>
        Films:
        {films.map((film) => {
          return <CharacterFilms film={film} />;
        })}
      </ul>
    </EntryStyle>
  );
};

export default Details;

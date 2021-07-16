import React from "react";

const Details = (props) => {
  const { character } = props;
  return (
    <div>
      <p>Gender : {character.gender}</p>
      <p>Height : {character.height} cm</p>
      <p>Mass : {character.mass} kg</p>
      <p>Hair Color : {character.hair_color} cm</p>
      <p>Eye Color : {character.eye_color} cm</p>
      <p>Birth Year : {character.birth_year} cm</p>
    </div>
  );
};

export default Details;

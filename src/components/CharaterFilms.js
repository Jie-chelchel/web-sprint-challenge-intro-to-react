import React from "react";
import styled from "styled-components";
const listStyle = styled.div`
  margin-left: 0;
  font-size: 0.5rem;
`;

function CharacterFilms(props) {
  console.log(props.film);
  return <li>{props.film}</li>;
}

export default CharacterFilms;

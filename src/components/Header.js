import React from "react";
import HeaderImage from "../images/sw-bg.jpg";
import styled from "styled-components";
const HeaderStyle = styled.div`
 height:19rem;
  width: 100%;
  background-color: #8a2b06;
  color: white;
  & h1 {
    text-align: center;
    letter-spacing: 4px; 
    padding-top:20px;
 }
  & div {
    width: 100%;
    z-index: 0;
    overflow: hidden;
  }
   & div img {
      height:15rem;
      width:110%;
      transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);

  }

    }
`;
const Header = (props) => {
  return (
    <HeaderStyle>
      <h1>Star War Characters</h1>
      <div>
        <img src={HeaderImage} alt="star war picture"></img>
      </div>
    </HeaderStyle>
  );
};

export default Header;

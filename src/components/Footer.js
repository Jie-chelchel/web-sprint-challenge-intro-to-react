import React from "react";
import styled from "styled-components";
import fbionc from "../images/fb-icon.png";
import twionc from "../images/tw-icon.png";

const FooterStyle = styled.div`
  height: 20%;
  background: #8a2b06;
  display: flex;
  justify-content: space-around;
  & button {
    background-color: #414141;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 5px;
    margin: 30px;
    color: white;
    font-size: 1rem;
    display: flex;
    align-items: center;
    & img {
      width: 3rem;
      margin-right: 5px;
    }
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <button>
        <img src={fbionc}></img>
        <span>SHARE</span>
      </button>
      <button>
        <img src={twionc}></img>
        <span>TWEET</span>
      </button>
      <button>
        <img src={fbionc}></img>
        <span>EMAIL</span>
      </button>
    </FooterStyle>
  );
}

export default Footer;

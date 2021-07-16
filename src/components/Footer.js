import React from "react";
import styled from "styled-components";
import fbIcon from "../images/fb.png";
import twIcon from "../images/tw.png";
import emailIcon from "../images/email.png";

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
      width: 2rem;
      margin-right: 15px;
    }
  }
  & button:hover {
    background-color: #08111a;
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <button>
        <img src={fbIcon} alt="fb icon"></img>
        <span>SHARE</span>
      </button>
      <button>
        <img src={twIcon} alt="tw icon"></img>
        <span>TWEET</span>
      </button>
      <button>
        <img src={emailIcon} alt="email icon"></img>
        <span>EMAIL</span>
      </button>
    </FooterStyle>
  );
}

export default Footer;

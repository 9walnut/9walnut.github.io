// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
  color: #555;
`;

function Footer() {
  return (
    <FooterContainer>2024 &copy; Hodu. All rights reserved.</FooterContainer>
  );
}

export default Footer;

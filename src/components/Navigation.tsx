// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #333;
  padding: 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = () => (
  <Nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Resume">Resume</NavLink>
    <ExternalLink
      href="https://github.com/9walnut"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </ExternalLink>
    <ExternalLink
      href="https://9walnut.tistory.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Blog
    </ExternalLink>
  </Nav>
);

export default Navigation;

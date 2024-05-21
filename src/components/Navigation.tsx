// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #fff;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
    "Segoe UI Symbol";
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: #007bff;
  }
`;

const ExternalLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: #007bff;
  }
`;

const Navigation = () => (
  <Nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Resume">Resume</NavLink>
    <NavLink to="/Portfoilo">Portfolio</NavLink>
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

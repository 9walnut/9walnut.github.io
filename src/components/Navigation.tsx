// src/components/Navigation.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/hodu3.jpg";

interface NavLinksProps {
  open: boolean;
}

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #fff;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
    "Segoe UI Symbol";
`;

const Logo = styled(Link)`
  margin-right: auto;
  img {
    height: 40px;
  }
`;

const NavLinks = styled.div.attrs<NavLinksProps>(({ open }) => ({
  open,
}))<NavLinksProps>`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 758px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #ddd;
  }
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

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 758px) {
    display: flex;
  }
`;

const Bar = styled.div`
  height: 3px;
  width: 25px;
  background-color: #333;
  margin: 4px 0;
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo to="/">
        <img src={LogoImg} alt="Logo"></img>
      </Logo>
      <Hamburger onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      <NavLinks open={isOpen}>
        <NavLink to="/">Home</NavLink>
        <ExternalLink href="/resume.pdf" download>
          Resume
        </ExternalLink>
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
      </NavLinks>
    </Nav>
  );
};

export default Navigation;

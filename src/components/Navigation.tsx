import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/hodu3.jpg";

interface NavLinksProps {
  open: boolean;
}

const Nav = styled.nav<NavLinksProps>`
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto; /* 가운데 정렬 */
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji",
    "Segoe UI Symbol";
  z-index: 2;

  @media (max-width: 758px) {
    max-width: 758px;
  }
`;

const Logo = styled(Link)`
  img {
    border-radius: 70%;
    height: 40px;
  }
`;

const NavLinks = styled.div.attrs<NavLinksProps>(({ open }) => ({
  open,
}))<NavLinksProps>`
  display: flex;
  width: ${({ open }) => (open ? "100%" : "auto")};
  position: relative;
  justify-content: flex-end;
  align-items: center;
  opacity: 0.5;

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

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  margin-right: 30px;
  padding: 15px;
  font-weight: 700;
  &:hover {
    color: #007bff;
  }
`;

const ExternalLink = styled.a`
  color: #333;
  text-decoration: none;
  margin-right: 30px;
  padding: 15px;
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
    margin-right: 40px;
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
    <Nav open={isOpen}>
      <Logo to="/">
        <img src={LogoImg} alt="Logo" />
      </Logo>
      <Hamburger onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      <NavLinks open={isOpen}>
        <NavLink href="#home">Home</NavLink>
        <ExternalLink href="/resume.pdf" download>
          Resume
        </ExternalLink>
        <NavLink href="#portfolio">Portfolio</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navigation;

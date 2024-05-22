import React from "react";
import Navigation from "../components/Navigation";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import backgroundImage from "../assets/hodu3.jpg";

// 스타일 정의
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60vh;
  color: white;
  text-align: center;
`;

const HeroText = styled.div`
  background: rgba(0, 0, 0, 0.5);
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  flex: 1;
  text-align: left;
`;

const H1 = styled.h1`
  font-size: 2rem; /* h1의 글꼴 크기 설정 */
  margin-bottom: 10px;
  color: #fff; /* 텍스트 색상 설정 */
`;

const H2 = styled.h2`
  font-size: 1.5rem; /* h2의 글꼴 크기 설정 */
  margin-bottom: 10px;
  color: #fff; /* 텍스트 색상 설정 */
`;

const ProfileImage = styled.img`
  max-width: 600px;
  margin: 20px;
  height: auto;
  border-radius: 10px;
  flex: 1;
`;

const ContentSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  background: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #666;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const LogoLink = styled.a`
  margin-right: 10px;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;

const Home = () => (
  <div>
    <Navigation />
    <Parallax bgImage={backgroundImage} strength={500}>
      <HeroSection>
        <HeroText>
          <H2>Hi!</H2>
          <H1>I'm Guho Kwon</H1>
          <H2>I'm a Backend Developer</H2>
          <H2>I specialized in node.JS and Springboot</H2>
          <H2>Also, I familiar with AWS, Docker</H2>
          <LogoContainer>
            <LogoLink href="링크 주소" target="_blank">
              <LogoImage src={backgroundImage} alt="Github" />
            </LogoLink>
            <LogoLink href="링크 주소" target="_blank">
              <LogoImage src={backgroundImage} alt="LinkedIn" />
            </LogoLink>
            <LogoLink href="링크 주소" target="_blank">
              <LogoImage src={backgroundImage} alt="Tistory" />
            </LogoLink>
          </LogoContainer>
        </HeroText>
        <ProfileImage src={backgroundImage} alt="Profile" />
      </HeroSection>
    </Parallax>
    <MainContainer>
      <ContentSection>
        <Title>My Work</Title>
        <Subtitle>Project 1</Subtitle>
        <Paragraph>프로젝트 1에 대한 설명입니다. 이 프로젝트는 ...</Paragraph>
        <Subtitle>Project 2</Subtitle>
        <Paragraph>프로젝트 2에 대한 설명입니다. 이 프로젝트는 ...</Paragraph>
      </ContentSection>
    </MainContainer>
  </div>
);

export default Home;

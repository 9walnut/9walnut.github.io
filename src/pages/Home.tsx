import React from "react";
import Navigation from "../components/Navigation";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import Skills from "../components/Skills";
import backgroundImage from "../assets/hodu3.jpg";
import ohsulthumnail from "../assets/ohsulthumbnail.png";
import thewavethumbnail from "../assets/thewavethumbnail.png";
import ContentSection from "../components/ContentSection";

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
      <h1>Projects</h1>
      {/* 오늘의 술 */}
      <ContentSection
        title="오늘의 술"
        imageSrc={ohsulthumnail}
        deployLink="https://ohsul.site"
        codeLink="https://github.com/9walnut/Ohsul-BE"
        techStacks={[
          "JAVA",
          "Springboot",
          "Spring-Security",
          "JPA",
          "MariaDB",
          "AWS",
          "Docker",
          "Gitaction",
        ]}
      >
        {/* 더웨이브 */}
        <p>
          위치, 태그 정보를 기반으로 취향에 맞는 술집 정보를 제공하는
          서비스입니다. 술, 분위기 등의 태그를 선택해 원하는 조건에 맞는 술집을
          확인할 수 있으며 리뷰 작성을 통해 술집 정보를 동적으로 업데이트합니다
        </p>
      </ContentSection>
      <ContentSection
        title="더 웨이브 - 쇼핑몰 프로젝트"
        imageSrc={thewavethumbnail}
        deployLink="https://ohsul.site"
        codeLink="https://github.com/9walnut/TheWave"
        techStacks={[
          "Node.JS",
          "Express",
          "Sequelize",
          "AWS",
          "MySQL",
          "Redis",
          "JWT",
          "Jenkins",
          "Docker",
        ]}
      >
        <p>
          친동생이 실제 판매 중인 레터링 풍선을 판매하는 쇼핑몰 컨셉의 프로젝트
          입니다
        </p>
      </ContentSection>
      <Skills /> {/* Skills 컴포넌트 추가 */}
    </MainContainer>
  </div>
);

export default Home;

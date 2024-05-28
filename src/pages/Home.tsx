import React from "react";
import Navigation from "../components/Navigation";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import backgroundImage from "../assets/hodu3.jpg";
import gmailImg from "../assets/logoImg/gmail.svg";
import githubImg from "../assets/logoImg/Github-Light.svg";
import tistoryImg from "../assets/logoImg/tistory.svg";
import linkedInImg from "../assets/logoImg/LinkedIn.svg";
import ContentSection from "../components/ContentSection";
import checkmark from "../assets/checkmark-xxl.png";
import wave from "../assets/thumbnail/wave.jpg";
import ohsul from "../assets/thumbnail/ohsul.jpg";

// 스타일 정의
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
`;

const HeroSection = styled.section`
  background-color: #1e2749;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  justify-content: center;
  color: white;
  text-align: center;
  padding-top: 84px;

  @media (max-width: 758px) {
    flex-direction: column;
  }
`;

const HeroText = styled.div`
  margin: 40px;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  flex: 1;
  text-align: left;
`;

const H1 = styled.h1`
  font-size: 2.3rem;
  margin: 1px;
  color: #fff;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  margin: 1px;
  color: #fff;
`;

const H3 = styled.h3`
  font-size: 1rem;
  margin: 1px;
  color: #fff;
`;

const ProfileImage = styled.img`
  max-width: 20%;
  height: auto;
  margin: 40px;
  border-radius: 70%;
  flex: 1;

  @media (max-width: 758px) {
    order: -1;
    margin-bottom: 40px;
    max-width: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;

const LogoLink = styled.a`
  margin-right: 10px;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;

const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 35px;
`;

const Paragraph = styled.p`
  max-width: 670px;
  margin: 5px 0;
  font-size: 1rem;
`;

const ParagraphMain = styled.span`
  font-weight: bolder;
`;

const ChecklistImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const HighlightUnderline = styled.span`
  font-style: oblique;
  background-image: linear-gradient(
    0deg,
    transparent 0%,
    transparent 46%,
    #ffa620 90%,
    #fba11a 100%
  );
  background-size: 100% 0.2em;
  background-position: 0 100%;
  background-repeat: no-repeat;
`;

const Home = () => (
  <div>
    <Navigation />
    <Parallax strength={30}>
      <HeroSection>
        <HeroText>
          <H2>Hi, I'm</H2>
          <H1>Guho Kwon</H1>
          <H2>
            <ChecklistImage src={checkmark} alt="Checklist" />
            <HighlightUnderline>Web Backend Developer</HighlightUnderline>
          </H2>
          <H3>
            I specialized in node.JS and Springboot and I familiar with AWS,
            Docker
          </H3>
          <LogoContainer>
            <LogoLink href="https://github.com/9walnut" target="_blank">
              <LogoImage src={gmailImg} alt="gmai" />
            </LogoLink>
            <LogoLink href="https://github.com/9walnut" target="_blank">
              <LogoImage src={githubImg} alt="Github" />
            </LogoLink>
            <LogoLink href="링크 주소" target="_blank">
              <LogoImage src={linkedInImg} alt="LinkedIn" />
            </LogoLink>
            <LogoLink href="https://9walnut.tistory.com/" target="_blank">
              <LogoImage src={tistoryImg} alt="Tistory" />
            </LogoLink>
          </LogoContainer>
        </HeroText>
        <ProfileImage src={backgroundImage} alt="Profile" />
      </HeroSection>
    </Parallax>
    <MainContainer>
      <div id="portfolio">
        <SectionTitle>Portfolio</SectionTitle>
        {/* 오늘의 술 */}
        <ContentSection
          title="오늘의 술"
          imageSrc={ohsul}
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
          <Paragraph>
            <ParagraphMain>
              위치, 태그 정보를 기반으로 취향에 맞는 술집 정보를 제공하는 서비스
            </ParagraphMain>
            {/* <ul>
              <li>주요 기능 1</li>
              <li>주요 기능 2</li>
              <li>주요 기능 3</li>
            </ul> */}
          </Paragraph>
        </ContentSection>

        {/* 더 웨이브 */}
        <ContentSection
          title="The Wave"
          imageSrc={wave}
          deployLink="https://thewavemarket.co.kr/"
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
          <Paragraph>
            <ParagraphMain>
              친동생이 실제 판매 중인 레터링 풍선을 판매하는 쇼핑몰 컨셉의
              프로젝트
            </ParagraphMain>
          </Paragraph>
        </ContentSection>
      </div>
    </MainContainer>
    <div id="skills">
      <Skills />
    </div>
    <div id="contact">
      <Contact />
    </div>
  </div>
);

export default Home;

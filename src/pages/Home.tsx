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
import ohsulthumnail from "../assets/ohsulthumbnail.png";
import thewavethumbnail from "../assets/thewavethumbnail.png";
import ContentSection from "../components/ContentSection";

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
`;

const Paragraph = styled.p`
  max-width: 670px;
  margin: 5px 0;
  font-size: 1rem;
`;

const ParagraphMain = styled.span`
  font-weight: bolder;
`;

const ParagraphSpan = styled.span`
  color: green;
  font-weight: 500;
`;

const Home = () => (
  <div>
    <Navigation />
    <Parallax strength={30}>
      <HeroSection>
        <HeroText>
          <H2>Hi, I'm</H2>
          <H1>Guho Kwon</H1>
          <H2>Web Backend Developer</H2>
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
          <Paragraph>
            <ParagraphMain>
              위치, 태그 정보를 기반으로 취향에 맞는 술집 정보를 제공하는
              서비스입니다.
            </ParagraphMain>{" "}
            술, 분위기 등의 태그를 선택해 원하는 조건에 맞는 술집을 확인할 수
            있으며 리뷰 작성을 통해 술집 정보를 동적으로 업데이트합니다
          </Paragraph>
          <Paragraph>
            <ParagraphSpan>Spring boot</ParagraphSpan>를 사용해보며{" "}
            <ParagraphSpan>Spring Security</ParagraphSpan>을 활용하여{" "}
            CustomFilter를 구현해 볼수 있었습니다
          </Paragraph>
          <Paragraph>
            <ParagraphSpan>JPA</ParagraphSpan>를 활용해 DB에 접근할 수 있었고
            직접 쿼리를 작성해보는 경험을 해볼 수 있었습니다.
          </Paragraph>
          <Paragraph>
            <ParagraphSpan>Gitaction</ParagraphSpan>을 활용해서 CI / CD 파이프
            라인을 구축하여 배포를 자동화하여 오류를 최소화하고 Docker 이미지를
            Docker Hub에 관리 하는 등 이미지 및 컨테이너를 관리해볼 수
            있었습니다
          </Paragraph>
        </ContentSection>
        <ContentSection
          title="The Wave"
          imageSrc={thewavethumbnail}
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
              프로젝트 입니다.
            </ParagraphMain>
            <div>
              The Wave는 실제 가게명입니다. 제 능력으로 가족에게 도움이 되고
              싶은 마음에 진행한 프로젝트입니다
            </div>
          </Paragraph>
          <Paragraph>
            <ParagraphSpan>Node.JS</ParagraphSpan>와{" "}
            <ParagraphSpan>Sequelize(ORM)</ParagraphSpan>에 조금 더 익숙해진
            계기가 되었습니다
          </Paragraph>
          <Paragraph>
            <ParagraphSpan>Jenkins, Webhook</ParagraphSpan>을 활용해서 처음으로
            CI / CD 파이프 라인을 구축해 볼수 있었고 AWS의 리소스들을 직접 할당,
            연결, 설정하면서 <ParagraphSpan>Docker</ParagraphSpan>를 활용하여
            배포 경험도 쌓을 수 있었습니다
          </Paragraph>
          <Paragraph>
            <ParagraphSpan>OAuth2.0</ParagraphSpan>의 개념을 다지고 소셜 로그인
            기능을 구현해 볼 수 있었습니다
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

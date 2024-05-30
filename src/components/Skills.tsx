import React from "react";
import styled from "styled-components";
import htmlImg from "../assets/stackImg/HTML.svg";
import cssImg from "../assets/stackImg/CSS.svg";
import jsImg from "../assets/stackImg/JavaScript.svg";
import reactImg from "../assets/stackImg/React-Light.svg";
import nodetImg from "../assets/stackImg/NodeJS-Light.svg";
import nestImg from "../assets/stackImg/NestJS-Light.svg";
import javaImg from "../assets/stackImg/Java-Light.svg";
import spingImg from "../assets/stackImg/Spring-Light.svg";
import hibernateImg from "../assets/stackImg/Hibernate-Light.svg";
import mysqlImg from "../assets/stackImg/MySQL-Light.svg";
import mongboImg from "../assets/stackImg/MongoDB.svg";
import awsImg from "../assets/stackImg/AWS-Light.svg";
import k8sImg from "../assets/stackImg/Kubernetes.svg";
import dockerImg from "../assets/stackImg/Docker.svg";
import tsImg from "../assets/stackImg/TypeScript.svg";
import expressImg from "../assets/stackImg/ExpressJS-Light.svg";
import jenkinsImg from "../assets/stackImg/Jenkins-Light.svg";
import gitImg from "../assets/stackImg/Git.svg";
import githubImg from "../assets/stackImg/Github-Light.svg";
import gitactionsImg from "../assets/stackImg/GithubActions-Light.svg";

const SkillsContainer = styled.div`
  background-color: #254336;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;

const CategoryTitle = styled.h2`
  color: white;
  text-align: center;
  margin: 20px 0 10px 0;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 400px;
  margin: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 100px;
  @media (max-width: 768px) {
    width: 80px;
    margin: 5px;
  }
  @media (max-width: 480px) {
    width: 60px;
    margin: 3px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Text = styled.span`
  margin-top: 5px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Skills = () => (
  <SkillsContainer>
    <h1 style={{ color: "white" }}>Skills</h1>
    <CategoryContainer>
      {/* Frontend 카테고리 */}
      <Category>
        <CategoryTitle>Frontend</CategoryTitle>
        <ImageWrapper>
          <ImageContainer>
            <Image src={htmlImg}></Image>
            <Text>HTML</Text>
          </ImageContainer>
          {/* Frontend 기술 스택들 */}
          <ImageContainer>
            <Image src={cssImg}></Image>
            <Text>CSS</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={jsImg}></Image>
            <Text>JavaScript</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={tsImg}></Image>
            <Text>TypeScript</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={reactImg}></Image>
            <Text>React</Text>
          </ImageContainer>
        </ImageWrapper>
      </Category>
      {/* Backend 카테고리 */}
      <Category>
        <CategoryTitle>Backend</CategoryTitle>
        <ImageWrapper>
          {/* Backend 기술 스택들 */}
          <ImageContainer>
            <Image src={nodetImg}></Image>
            <Text>Node.JS</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={nestImg}></Image>
            <Text>NestJS</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={expressImg}></Image>
            <Text>Express</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={javaImg}></Image>
            <Text>JAVA</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={spingImg}></Image>
            <Text>Spring</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={hibernateImg}></Image>
            <Text>Hibernate</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={mysqlImg}></Image>
            <Text>MySQL</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={mongboImg}></Image>
            <Text>MongoDB</Text>
          </ImageContainer>
        </ImageWrapper>
      </Category>
      {/* DevOps 카테고리 */}
      <Category>
        <CategoryTitle>DevOps</CategoryTitle>
        <ImageWrapper>
          {/* DevOps 기술 스택들 */}
          <ImageContainer>
            <Image src={awsImg}></Image>
            <Text>AWS</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={k8sImg}></Image>
            <Text>Kubernetes</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={dockerImg}></Image>
            <Text>Docker</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={jenkinsImg}></Image>
            <Text>Jenkins</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={githubImg}></Image>
            <Text>Github</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={gitImg}></Image>
            <Text>Git</Text>
          </ImageContainer>
          <ImageContainer>
            <Image src={gitactionsImg}></Image>
            <Text>Gitactions</Text>
          </ImageContainer>
        </ImageWrapper>
      </Category>
    </CategoryContainer>
  </SkillsContainer>
);

export default Skills;

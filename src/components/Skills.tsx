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

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  max-width: 1200px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 3px solid #091292;
  border-radius: 10px;
  margin: 5px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 9px;
  justify-content: center;
`;

const Image = styled.img`
  width: 150px;
  height: auto;
`;

const Text = styled.span`
  margin-top: 5px;
`;

const Skills = () => (
  <SkillsContainer>
    <h1>Skills</h1>
    <CategoryContainer>
      {/* Frontend 카테고리 */}
      <Category>
        <ImageContainer>
          <Image src={htmlImg}></Image>
          <Text>HTML</Text>
        </ImageContainer>
        {/* Frontend 기술 스택들 */}
        <ImageContainer>
          <Image src={cssImg}></Image>
          <Text>CSS</Text>
        </ImageContainer>{" "}
        <ImageContainer>
          <Image src={jsImg}></Image>
          <Text>JavaScript</Text>
        </ImageContainer>{" "}
        <ImageContainer>
          <Image src={tsImg}></Image>
          <Text>TypeScript</Text>
        </ImageContainer>{" "}
        <ImageContainer>
          <Image src={reactImg}></Image>
          <Text>React</Text>
        </ImageContainer>
      </Category>
      {/* Backend 카테고리 */}
      <Category>
        {/* Backend 기술 스택들 */}
        <ImageContainer>
          <Image src={nodetImg}></Image>
          <Text>Node.JS</Text>
        </ImageContainer>{" "}
        <ImageContainer>
          <Image src={nestImg}></Image>
          <Text>NestJS</Text>
        </ImageContainer>{" "}
        <ImageContainer>
          <Image src={expressImg}></Image>
          <Text>Express</Text>
        </ImageContainer>{" "}
        <ImageContainer>
          <Image src={javaImg}></Image>
          <Text>JAVA</Text>
        </ImageContainer>{" "}
        <ImageContainer>
          <Image src={spingImg}></Image>
          <Text>Spring</Text>
        </ImageContainer>{" "}
        <ImageContainer>
          <Image src={hibernateImg}></Image>
          <Text>Hibernate</Text>
        </ImageContainer>{" "}
        <ImageContainer>
          <Image src={mysqlImg}></Image>
          <Text>MySQL</Text>
        </ImageContainer>{" "}
        <ImageContainer>
          <Image src={mongboImg}></Image>
          <Text>MongoDB</Text>
        </ImageContainer>
      </Category>
      {/* DevOps 카테고리 */}
      <Category>
        {/* DevOps 기술 스택들 */}
        <ImageContainer>
          <Image src={awsImg}></Image>
          <Text>AWS</Text>
        </ImageContainer>{" "}
        <ImageContainer>
          <Image src={k8sImg}></Image>
          <Text>Kubernetes</Text>
        </ImageContainer>{" "}
        <ImageContainer>
          <Image src={dockerImg}></Image>
          <Text>Docker</Text>
        </ImageContainer>{" "}
        <ImageContainer>
          <Image src={jenkinsImg}></Image>
          <Text>Jenkins</Text>
        </ImageContainer>
      </Category>
    </CategoryContainer>
  </SkillsContainer>
);

export default Skills;

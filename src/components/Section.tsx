import React from "react";
import styled from "styled-components";

// 섹션 스타일 정의
const SectionContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 50px 100px 0px 5px;
`;

// 이름 스타일 정의
const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 10px;
`;

// 직업 스타일 정의
const Occupation = styled.p`
  font-size: 16px;
`;

// Section 컴포넌트 정의
interface SectionProps {
  name: string;
  occupation: string;
}

const Section: React.FC<SectionProps> = ({ name, occupation }) => (
  <SectionContainer>
    <Name>{name}</Name>
    <Occupation>{occupation}</Occupation>
  </SectionContainer>
);

export default Section;

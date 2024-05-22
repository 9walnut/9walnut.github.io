// ContentSection.tsx
import React, { ReactNode } from "react";
import styled from "styled-components";

interface ContentSectionProps {
  title?: string;
  imageSrc?: string;
  deployLink?: string;
  codeLink?: string;
  techStacks?: string[];
  children: ReactNode;
}

const StyledSection = styled.section`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  background: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: 200px;
  border-radius: 10px;
`;

const ContentWrapper = styled.div`
  flex: 2;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
`;

const Link = styled.a`
  display: block;
  color: blue;
  text-decoration: underline;
  margin-bottom: 10px;
`;

const TechStacks = styled.div`
  margin-top: 10px;
`;

const TechStack = styled.span`
  margin-right: 10px;
  color: white;
  background-color: #6c757d;
  border-radius: 10rem;
  padding: 5px;
  font-size: 75%;
  font-weight: 700;
`;

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  imageSrc,
  deployLink,
  codeLink,
  techStacks,
  children,
}) => (
  <StyledSection>
    {imageSrc && (
      <ImageWrapper>
        <Image src={imageSrc} alt="Project" />
      </ImageWrapper>
    )}
    <ContentWrapper>
      {title && <Title>{title}</Title>}
      {children}
      {deployLink && (
        <Link href={deployLink} target="_blank">
          Deploy Link
        </Link>
      )}
      {codeLink && (
        <Link href={codeLink} target="_blank">
          Code Link
        </Link>
      )}
      {techStacks && (
        <TechStacks>
          {techStacks.map((stack, index) => (
            <TechStack key={index}>{stack}</TechStack>
          ))}
        </TechStacks>
      )}
    </ContentWrapper>
  </StyledSection>
);

export default ContentSection;

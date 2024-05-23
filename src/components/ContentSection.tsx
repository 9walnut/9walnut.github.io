// ContentSection.tsx
import React, { ReactNode } from "react";
import styled from "styled-components";

interface ContentSectionProps {
  title?: string;
  imageSrc?: string;
  deployLink?: string;
  codeLink?: string;
  techStacks?: string[];
  children: React.ReactNode;
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
  min-width: 150px;
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
  color: #091292;
`;

const Link = styled.a`
  margin-right: 10px;
  color: #3375e8;
  text-decoration: none;
  font-size: 100%;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
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
          Visit Site
        </Link>
      )}
      {codeLink && (
        <Link href={codeLink} target="_blank">
          GitHub Link
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

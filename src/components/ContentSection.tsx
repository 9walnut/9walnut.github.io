import React from "react";
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
  width: auto;
  max-width: 1200px;
  margin: 20px;
  background: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

  @media (max-width: 768px) {
    width: auto;
    margin-bottom: 10px;
  }
`;

const Image = styled.img`
  width: 450px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 280px;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 560px;
  width: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #6b8a7a;
  text-align: center;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin-right: 10px;
  color: #b7b597;
  text-decoration: none;
  font-size: 100%;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

const TechStacks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TechStack = styled.span`
  margin: 3px;
  color: white;
  background-color: #dad3be;
  border-radius: 1rem;
  padding: 8px;
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
      <LinksWrapper>
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
      </LinksWrapper>
      {children}

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

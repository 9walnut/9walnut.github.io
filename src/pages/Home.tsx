import Navigation from "../components/Navigation";
import Container from "../components/Container";
import Section from "../components/Section";
import backgroundImage from "../assets/hodu3.jpg";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  max-width: 900px; /* 최대 너비 900px로 설정 */
  height: auto; /* 비율에 맞춰 자동으로 높이 조절 */
  max-height: 400px;
`;

const Introduction = styled.p`
  font-size: 16px;
  margin-top: 20px;
  border: solid 1px #c1c0c0;

  & > div {
    margin-bottom: 10px;
  }
`;

const Home = () => (
  <div>
    <Navigation />
    <Section name="권구호" occupation="Web Backend Developer"></Section>
    <Container>
      <StyledImage src={backgroundImage} alt="예시" />
      <Introduction>
        <div>
          안녕하세요! 저는 권구호입니다. 웹 백엔드 개발자로 일하고 있습니다.
        </div>
        <div>
          React와 Node.js를 주로 다루며, 새로운 기술을 학습하고 적용하는 것을
          즐깁니다. 함께 일하고 싶으시다면 언제든 연락주세요!
        </div>
      </Introduction>
    </Container>
  </div>
);

export default Home;

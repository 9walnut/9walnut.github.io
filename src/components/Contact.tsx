import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import gmailImg from "../assets/logoImg/gmail.svg";
import githubImg from "../assets/logoImg/Github-Light.svg";
import tistoryImg from "../assets/logoImg/tistory.svg";
import linkedInImg from "../assets/logoImg/LinkedIn.svg";

const ContactContainer = styled.div`
  width: auto;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 1240px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  width: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
`;

const ContactLink = styled.a`
  margin: 5px 0;
  color: #333;
  text-decoration: none;
  font-weight: 700;
  &:hover {
    color: #007bff;
  }
`;

const ContactLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  max-width: 500px;
  padding: 20px;
  flex-grow: 1;
`;

const FormInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  height: 150px;
`;

const FormButton = styled.button`
  width: 200px;
  padding: 10px;
  border: none;
  color: #636b83;
  border-radius: 5px;
  background-color: #fed766;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-weight: 500;
  cursor: pointer;
  margin-left: auto;
  &:hover {
    background-color: #0056b3;
  }
`;

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_xg3wheo",
          "template_upym8rf",
          form.current,
          "YC_vq7ByK1eOJrNEf"
        )
        .then(
          (result: emailjs.EmailJSResponseStatus) => {
            console.log(result.text);
            alert("Message Sent!");
          },
          (error: emailjs.EmailJSResponseStatus) => {
            console.log(error.text);
            alert("Message Failed to Send.");
          }
        );

      form.current.reset();
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactInfo>
        <h1>Contact</h1>
        <div style={{ marginBottom: 20 }}>
          If you want to know more about me or my work or
          <div>if you would just like to say hello</div>
          <div>send me a message, I'd love to hear from you</div>
        </div>
        <div>
          <ContactLink href="mailto:kguho9202@gmail.com">
            <ContactLogo src={gmailImg} alt="Github" />
          </ContactLink>
          <ContactLink href="https://github.com/9walnut" target="_blank">
            <ContactLogo src={githubImg} alt="Github" />
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/your-profile/"
            target="_blank"
          >
            <ContactLogo src={linkedInImg} alt="LinkedIn" />
          </ContactLink>
          <ContactLink href="https://9walnut.tistory.com/" target="_blank">
            <ContactLogo src={tistoryImg} alt="Tistory" />
          </ContactLink>
        </div>
      </ContactInfo>
      <ContactForm ref={form} onSubmit={sendEmail}>
        <h2>Send me a message</h2>
        <FormInput
          type="text"
          name="user_name"
          placeholder="이름 (name)"
          required
        />
        <FormInput
          type="email"
          name="user_email"
          placeholder="이메일 주소 (email)"
          required
        />
        <FormTextArea name="message" placeholder="내용 (message)" required />
        <FormButton type="submit">Send</FormButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;

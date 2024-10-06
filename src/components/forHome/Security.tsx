import security from "/security.jpg";
import styled from "styled-components";

export default function Security() {
  return (
    <Parent>
      <TextAndLineCon>
        <LineCon>
          <Line />
          <RegisterEasySpan>Registrations Made Easy</RegisterEasySpan>
        </LineCon>
        <SecurityP>Security and Reliability</SecurityP>
        <GreyLine />
        <BigP>
          Rest assured that your event data is safe and secure with our web app.
          We prioritize data protection and employ industry-standard security
          measures to safeguard your information. Our reliable infrastructure
          ensures that your event management process remains uninterrupted,
          allowing you to focus on what matters most – creating exceptional
          events
        </BigP>
        <Btn>Get Started</Btn>
      </TextAndLineCon>
      <Pic src={security} alt="" />
    </Parent>
  );
}
const Pic = styled.img`
  width: auto;
  height: auto;
  @media (min-width: 1000px) {
    width: 40%;
    height: 40%;
  }
`;
const Btn = styled.button`
  border-radius: 2rem;
  border: none;
  background-color: #eb0d66;
  padding: 1.5rem;
  width: 40%;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`;
const BigP = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #737373;
  text-align: center;
  letter-spacing: 0.5px;
  @media (min-width: 1000px) {
    font-size: 22px;
    text-align: left;
  }
`;
const GreyLine = styled.hr`
  background-color: lightgray;
  height: 1px;
  opacity: 0.5;
`;
const SecurityP = styled.p`
  color: #eb0d66;
  font-size: 30px;
  font-weight: 600;
  @media (min-width: 1000px) {
    font-size: 48px;
  }
`;
const RegisterEasySpan = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #32c0ef;
`;
const Line = styled.hr`
  background-color: #32c0ef;
  height: 4px;
  width: 8rem;
  border: none;
`;
const LineCon = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const TextAndLineCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  @media (min-width: 1000px) {
    gap: 3.6rem;
  }
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 4.2rem 1.6rem;
  @media (min-width: 1000px) {
    margin: 0 auto;
    width: 80%;
    flex-direction: row;
    align-items: center;
    gap: 5.6rem;
  }
`;

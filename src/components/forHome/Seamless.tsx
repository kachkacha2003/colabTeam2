import styled from "styled-components";
import Carusel from "./Carusel";

export default function Seamless() {
  return (
    <Parent>
      <TextsAndLineCon>
        <LineCon>
          <Line />
          <SecureSpan>Secure</SecureSpan>
        </LineCon>
        <TextsCon>
          <Hone>Seamless Event Planning and Organization</Hone>
          <Para>
            Say goodbye to the hassles of event planning. Our user-friendly
            interface simplifies the process, allowing you to focus on your
            artistic endeavors. Create and manage events effortlessly, from
            setting dates and locations to providing event descriptions and
            ticketing options. Streamline your planning process and bring your
            vision to reality
          </Para>
        </TextsCon>
      </TextsAndLineCon>
      <Carusel />
    </Parent>
  );
}

const Para = styled.p`
  color: #94a3b8;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  @media (min-width: 1000px) {
    width: 70ch;
    font-size: 25px;
  }
`;
const Hone = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  @media (min-width: 1000px) {
    width: 17ch;
    font-size: 50px;
  }
`;
const TextsCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 4rem;
    align-items: center;
  }
`;
const SecureSpan = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #32c0ef;
  @media (min-width: 1000px) {
    font-size: 25px;
  }
`;
const Line = styled.hr`
  width: 20%;
  height: 4px;
  background-color: #32c0ef;
  border: none;
  @media (min-width: 1000px) {
    width: 5%;
  }
`;
const LineCon = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  @media (min-width: 1000px) {
    margin-left: 3%;
  }
`;
const TextsAndLineCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  @media (min-width: 1000px) {
    width: 70%;
    margin: 0 auto;
  }
`;
const Parent = styled.div`
  background-color: #0d162e;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3.2rem 1.6rem;
  @media (min-width: 1000px) {
    padding: 6rem 0;
  }
`;

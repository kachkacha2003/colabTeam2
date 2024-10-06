import styled from "styled-components";
import Carusel from "./Carusel";

export default function Seamless() {
  return (
    <Parent>
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
      <Carusel />
    </Parent>
  );
}

const Para = styled.p`
  color: #94a3b8;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
const Hone = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;
const TextsCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: center;
`;
const SecureSpan = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #32c0ef;
`;
const Line = styled.hr`
  width: 20%;
  height: 4px;
  background-color: #32c0ef;
`;
const LineCon = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;
const Parent = styled.div`
  background-color: #0d162e;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3.2rem 1.6rem;
`;

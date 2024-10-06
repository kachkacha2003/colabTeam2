import styled from "styled-components";
import pic from "/two persons.jpg";
export default function UnlockPotential() {
  return (
    <Parent>
      <ContentCon>
        <Line />
        <RedPara>Unlock Your Creative Potential</RedPara>
        <GreyLine />
        <Para>
          Our app empowers individual contributors and artists like you to
          unleash your creativity and organize remarkable events. Whether you're
          planning a solo exhibition, a live performance, or a collaborative
          workshop, our platform provides the tools and features you need to
          make your events a resounding success
        </Para>
        <Btn>Get Started</Btn>
      </ContentCon>
      <Pic src={pic} alt="" />
    </Parent>
  );
}
const GreyLine = styled.hr`
  background-color: lightgray;
  height: 1px;
`;
const Btn = styled.button`
  background-color: #32c0ef;
  width: 13rem;
  border-radius: 2rem;
  border: none;
  color: #fff;
  padding: 1.5rem;
  font-size: 16px;
  font-weight: 500;
`;
const Para = styled.p`
  font-size: 16px;
  color: lightgray;
  font-weight: 500;
  text-align: left;
`;
const RedPara = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #eb0d66;
  @media (min-width: 1000px) {
    font-size: 48px;
    width: 16ch;
  }
`;
const Line = styled.hr`
  width: 15%;
  height: 4px;
  background-color: #32c0ef;
  @media (min-width: 1000px) {
    width: 25%;
  }
`;
const Pic = styled.img`
  width: auto;
  height: auto;
  order: 1;
  @media (min-width: 1000px) {
    width: 40%;
    height: 40%;
    order: 0;
  }
`;
const ContentCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (min-width: 1000px) {
    gap: 4.4rem;
    width: 30%;
    order: 1;
  }
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  background-color: #fff;
  padding: 5rem 1.6rem;
  @media (min-width: 1000px) {
    flex-direction: row;
    padding: 7rem 2.4rem;
    align-items: center;
    margin: 0 auto;
  }
`;

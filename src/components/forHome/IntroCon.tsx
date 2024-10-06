import styled from "styled-components";

export default function IntroCon() {
  return (
    <Parent>
      <TextCon>
        <Para>Spotlight Your Creativity Curate Unforgettable Events</Para>
        <StyledSpan>RSVP and Managment Made Effortless for Creators</StyledSpan>
        <ButtonsCon>
          <BlueButton>Get Started</BlueButton>
          <RedButton>Explore Events</RedButton>
        </ButtonsCon>
      </TextCon>
    </Parent>
  );
}
const RedButton = styled.button`
  background-color: #de0e63;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 2rem;
  padding: 1.5rem 1rem;
  border: none;
`;
const BlueButton = styled.button`
  background-color: #32beed;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  border-radius: 2rem;
  padding: 1.5rem 1rem;
  border: none;
`;
const ButtonsCon = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;
const StyledSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  opacity: 0.5;
  color: #fff;
  text-align: center;
`;
const Para = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  width: 25ch;
  text-align: center;
  @media (min-width: 1000px) {
    font-size: 60px;
  }
`;
const TextCon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
`;
const Parent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0d162e;
  min-height: 75vh;
  padding: 0 3rem;
`;

import styled from "styled-components";

export default function Burger() {
  return (
    <Parent>
      <Para>Explore</Para>
      <Para>Login</Para>
      <Para>Sigup</Para>
    </Parent>
  );
}
const Para = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  background-color: #121212;
  padding: 1.6rem 2.4rem;
  min-height: 100vh;
  position: absolute;
  width: 100%;
  z-index: 99;
  top: 10.1rem;
  left: 0;
  transition: min-height 4ms ease-in-out;
  max-width: 50rem;
`;

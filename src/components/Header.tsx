import styled from "styled-components";
import logo from "/logo.svg";
import burger from "/icon-hamburger.svg";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import Burger from "./Burger";
export default function Header() {
  const [burgerShow, setBurgerShow] = useState<boolean>(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 1000px)");
  return (
    <Parent>
      <LogoCon>
        <Logo src={logo} alt="" />
        <CompanyNameSpan>SpotLight</CompanyNameSpan>
      </LogoCon>
      {isSmallDevice ? (
        <img src={burger} alt="" onClick={() => setBurgerShow(!burgerShow)} />
      ) : (
        <SpanCon>
          <Para>Explore</Para>
          <Para>Login</Para>
          <Para>Signup</Para>
        </SpanCon>
      )}
      {burgerShow ? <Burger /> : null}
    </Parent>
  );
}

const Para = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;
const SpanCon = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const CompanyNameSpan = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: #fff;
`;
const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`;
const LogoCon = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;
const Parent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d162e;
  padding: 3rem 2.4rem;
  border-bottom: 1px solid grey;
  position: relative;
  margin: 0 auto;
  @media (min-width: 1000px) {
    padding-left: 15%;
    padding-right: 15%;
    border: none;
  }
`;

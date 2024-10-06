import logo from "/logo.svg";
import styled from "styled-components";
import icon1 from "/icon-facebook.svg";
import icon2 from "/icon-instagram.svg";
import icon3 from "/icon-twitter.svg";

export default function Footer() {
  return (
    <Parent>
      <LogoAndTextCon>
        <LogoCon>
          <Logo src={logo} alt="" />
          <CompanyNameSpan>Spotlight</CompanyNameSpan>
        </LogoCon>
        <Para> Dashboard</Para>
      </LogoAndTextCon>
      <IconAndTInfoCon>
        <LogosCon>
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
        </LogosCon>
        <BottomPara>
          © SpotLight 2024 | All rights reserved | Pranay Goel
        </BottomPara>
      </IconAndTInfoCon>
    </Parent>
  );
}
const BottomPara = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  @media (min-width: 1000px) {
    font-size: 20px;
  }
`;
const LogosCon = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  margin: 0 auto;
`;
const IconAndTInfoCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-top: 3rem;
`;
const Para = styled.p`
  color: #e5e5e5;
  font-size: 20px;
  font-weight: 700;
  @media (min-width: 1000px) {
    font-size: 24px;
  }
`;
const CompanyNameSpan = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  @media (min-width: 1000px) {
    font-size: 24px;
  }
`;
const Logo = styled.img`
  width: 4rem;
  height: 4rem;
`;
const LogoCon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
const LogoAndTextCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid Gray;
  padding-bottom: 2.4rem;
  @media (min-width: 1000px) {
    padding-left: 15%;
    padding-right: 15%;
  }
`;
const Parent = styled.div`
  background-color: #0d162e;
  padding: 4.6rem 1.6rem;
`;

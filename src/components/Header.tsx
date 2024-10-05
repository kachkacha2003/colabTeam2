import styled from "styled-components";
import logo from "/logo.svg";
import burger from "/icon-hamburger.svg";
export default function Header() {
  return (
    <Parent>
      <LogoCon>
        <Logo src={logo} alt="" />
        <CompanyNameSpan>SpotLight</CompanyNameSpan>
      </LogoCon>
      <img src={burger} alt="" />
      <div></div>
    </Parent>
  );
}

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
  background-color: #121212;
  padding: 3rem 2rem;
`;

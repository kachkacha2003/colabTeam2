import React from "react";
import styled from "styled-components";
import icon from "/icon-previous.svg";
import logo from "/image/EventHubLogo.svg";

export default function SignUp() {
  return (
    <Parent>
      <Icon src={icon} alt="" />
      <LogoAndH1Con>
        <img src={logo} alt="" />
        <Hone>Create an account</Hone>
      </LogoAndH1Con>
      <Form>
        <InputsCon>
          <label htmlFor="">Name</label>
          <input type="text" />
        </InputsCon>
        <InputsCon>
          <label htmlFor="">Email</label>
          <input type="text" />
        </InputsCon>
        <InputsCon>
          <label htmlFor="">Password</label>
          <input type="text" />
        </InputsCon>
        <InputsCon>
          <label htmlFor="">Confirm Password</label>
          <input type="text" />
        </InputsCon>
      </Form>
    </Parent>
  );
}
const InputsCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const LogoAndH1Con = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;
const Hone = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #121212;
`;
const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2.4rem;
  background-color: #f3f4f6;
`;

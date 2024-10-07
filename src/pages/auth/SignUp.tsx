import React from "react";
import styled from "styled-components";
import icon from "/icon-previous.svg";
import logo from "/image/EventHubLogo.svg";
import hidden from "/inputhide.svg";
import shown from "/inputShow.svg";

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
          <Label htmlFor="name">Name</Label>
          <NameInput type="text" id="name" placeholder="John Doe" />
        </InputsCon>
        <InputsCon>
          <Label htmlFor="email">Email</Label>
          <EmailInput type="text" id="email" placeholder="example@gmail.com" />
        </InputsCon>
        <InputsCon>
          <Label htmlFor="password">Password</Label>
          <PAsswordInput type="password" id="password" />
        </InputsCon>
        <InputsCon>
          <Label htmlFor="Rpassword">Confirm Password</Label>
          <input type="password" id="Rpassword" />
        </InputsCon>
      </Form>
      <img src={hidden} alt="" />
      <img src={shown} alt="" />
    </Parent>
  );
}

const PAsswordInput = styled.input`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid lightgray;
  outline: none;
  color: #121212;
  &::placeholder {
    font-size: 16px;
    opacity: 0.5;
    font-weight: 600;
  }
`;
const EmailInput = styled.input`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid lightgray;
  outline: none;
  color: #121212;
  &::placeholder {
    font-size: 16px;
    opacity: 0.5;
    font-weight: 600;
  }
`;
const NameInput = styled.input`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid lightgray;
  outline: none;
  color: #121212;
  &::placeholder {
    font-size: 16px;
    opacity: 0.5;
    font-weight: 600;
  }
`;
const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
`;
const InputsCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
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

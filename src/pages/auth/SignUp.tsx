import styled from "styled-components";
import icon from "/icon-previous.svg";
import logo from "/image/EventHubLogo.svg";
import hidden from "/inputhide.svg";
import shown from "/inputShow.svg";
import { useState } from "react";

export default function SignUp() {
  const [showchars, setShowChars] = useState<boolean>(false);
  const [showcharsR, setShowCharsR] = useState<boolean>(false);

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
          <PAsswordInput
            type={`${showchars ? "password" : "text"}`}
            id="password"
            showchars={showchars}
            placeholder="Password"
          />
          {showchars ? (
            <Hiden
              src={hidden}
              alt=""
              onClick={() => setShowChars(!showchars)}
            />
          ) : (
            <Shown
              src={shown}
              alt=""
              onClick={() => setShowChars(!showchars)}
            />
          )}
        </InputsCon>
        <InputsCon>
          <Label htmlFor="Rpassword">Confirm Password</Label>
          <RpasswordInput
            type={`${showcharsR ? "password" : "text"}`}
            id="Rpassword"
            showcharsR={showcharsR}
            placeholder="Repeat  Password"
          />
          {showcharsR ? (
            <Hiden
              src={hidden}
              alt=""
              onClick={() => setShowCharsR(!showcharsR)}
            />
          ) : (
            <Shown
              src={shown}
              alt=""
              onClick={() => setShowCharsR(!showcharsR)}
            />
          )}
        </InputsCon>
      </Form>
      {/* <Hiden src={hidden} alt="" />
      <Shown src={shown} alt="" /> */}
    </Parent>
  );
}
// const Shownr = styled.img`
//   position: absolute;
//   width: 24px;
//   height: 24px;
//   right: 2rem;
//   top: 50%;
// `;
// const Hidenr = styled.img`
//   position: absolute;
//   width: 24px;
//   height: 24px;
//   right: 2rem;
//   top: 50%;
// `;
const Shown = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 2rem;
  top: 50%;
`;
const Hiden = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 2rem;
  top: 50%;
`;
const RpasswordInput = styled.input<{ showcharsR: boolean }>`
  /* background-image: url(${(props) => (props.showchars ? hidden : shown)});
  background-position: right 2rem top 50%;
  background-repeat: no-repeat; */
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
const PAsswordInput = styled.input<{ showchars: boolean }>`
  /* background-image: url(${(props) => (props.showchars ? hidden : shown)});
  background-position: right 2rem top 50%;
  background-repeat: no-repeat; */
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
  position: relative;
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

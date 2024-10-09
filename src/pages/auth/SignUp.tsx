import styled from "styled-components";
import icon from "/icon-previous.svg";
import logo from "/image/EventHubLogo.svg";
import bigLogo from "/image/EventHub+logo.png";
import hidden from "/inputhide.svg";
import shown from "/inputShow.svg";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ISignUp } from "../../types/SignUp";
import { useNavigate } from "react-router-dom";
import { signUpScema } from "../../scema/SignUp";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignUp() {
  const [showchars, setShowChars] = useState<boolean>(false);
  const [showcharsR, setShowCharsR] = useState<boolean>(false);
  const bg = useMediaQuery("only screen and (min-width : 1000px)");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm<ISignUp>({ resolver: yupResolver(signUpScema) });
  const inputData: SubmitHandler<ISignUp> = (data) => console.log(data);

  return (
    <Cover>
      <Parent>
        <Icon src={icon} alt="" onClick={() => navigate(-1)} />
        <LogoAndH1Con>
          <img src={logo} alt="" />
          <Hone>Create an account</Hone>
        </LogoAndH1Con>
        <Form onSubmit={handleSubmit(inputData)}>
          <InputsCon>
            <Label htmlFor="name">Name</Label>
            <NameInput
              type="text"
              id="name"
              placeholder="John Doe"
              {...register("name")}
              nameEror={errors?.name?.message}
            />
            {errors.name?.message ? <ErorSpan>Min 5 symbol</ErorSpan> : null}
          </InputsCon>
          <InputsCon>
            <Label htmlFor="email">Email</Label>
            <EmailInput
              type="text"
              id="email"
              placeholder="example@gmail.com"
              {...register("email")}
              emailEror={errors.email?.message}
            />
            {errors.email?.message ? (
              <ErorSpan>Please enter valid email</ErorSpan>
            ) : null}
          </InputsCon>
          <InputsCon>
            <Label htmlFor="password">Password</Label>
            <PAsswordInput
              type={`${showchars ? "password" : "text"}`}
              id="password"
              showchars={showchars}
              placeholder="Password"
              {...register("password")}
              passwordEror={errors.password?.message}
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
            {errors.password?.message ? (
              <ErorSpanpassword>Min 5 symbol</ErorSpanpassword>
            ) : null}
          </InputsCon>
          <InputsCon>
            <Label htmlFor="Rpassword">Confirm Password</Label>
            <RpasswordInput
              type={`${showcharsR ? "password" : "text"}`}
              id="Rpassword"
              showcharsR={showcharsR}
              placeholder="Repeat  Password"
              {...register("Rpassword")}
              RpasswordEror={errors.Rpassword?.message}
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
            {errors.Rpassword?.message ? (
              <ErorSpanpassword>{errors.Rpassword.message}</ErorSpanpassword>
            ) : null}
          </InputsCon>
          <Btn>Sign up</Btn>
        </Form>
        <BottomCon>
          <AlreadyP>Already have an acount ?</AlreadyP>
          <LoginSpan onClick={() => navigate("/login")}>Login</LoginSpan>
        </BottomCon>
      </Parent>
      {bg ? <BigLogo src={bigLogo} alt="" /> : null}
    </Cover>
  );
}
const ErorSpanpassword = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  right: 6rem;
  top: 60%;
`;
const ErorSpan = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  right: 2rem;
  top: 60%;
`;
const LoginSpan = styled.p`
  color: red;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;
const AlreadyP = styled.p`
  color: #121212;
  font-size: 16px;
  font-weight: 500;
`;
const BottomCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const Btn = styled.button`
  background-color: #121212;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  padding: 1.5rem;
  width: 100%;
  border: none;
  &:hover {
    cursor: pointer;
    color: orange;
    background-color: green;
  }
`;
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
const RpasswordInput = styled.input<{
  showcharsR: boolean;
  RpasswordEror: string | undefined;
}>`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 2rem;
  border: ${(props) =>
    props.RpasswordEror ? "1px solid red" : "1px solid lightgray"};
  outline: none;
  color: #121212;
  &::placeholder {
    font-size: 16px;
    opacity: 0.5;
    font-weight: 600;
  }
`;
const PAsswordInput = styled.input<{
  showchars: boolean;
  passwordEror: string | undefined;
}>`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 2rem;
  border: ${(props) =>
    props.passwordEror ? "1px solid red" : "1px solid lightgray"};
  outline: none;
  color: #121212;
  &::placeholder {
    font-size: 16px;
    opacity: 0.5;
    font-weight: 600;
  }
`;
const EmailInput = styled.input<{ emailEror: string | undefined }>`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 2rem;
  border: ${(props) =>
    props.emailEror ? " 1px solid red" : "1px solid lightgray "};
  outline: none;
  color: #121212;
  &::placeholder {
    font-size: 16px;
    opacity: 0.5;
    font-weight: 600;
  }
`;
const NameInput = styled.input<{ nameEror: string | undefined }>`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 2rem;
  border: ${(props) =>
    props.nameEror ? "1px solid red" : "1px solid lightgray"};
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
  gap: 1.5rem;
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
  min-height: 100vh;
  @media (min-width: 1000px) {
    width: 50%;
    gap: 5.4rem;
  }
`;
const BigLogo = styled.img`
  width: 50%;
`;
const Cover = styled.div`
  @media (min-width: 1000px) {
    display: flex;
  }
`;

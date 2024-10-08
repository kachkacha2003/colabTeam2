import { SubmitHandler, useForm } from "react-hook-form";
import icon from "/icon-previous.svg";
import styled from "styled-components";
import hidden from "/inputhide.svg";
import shown from "/inputShow.svg";
import { useState } from "react";
import { ILogin } from "../../types/Login";

export default function Login() {
  const [hide, setHide] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const inputData: SubmitHandler<ILogin> = (data) => console.log(data);
  return (
    <Parent>
      <Icon src={icon} alt="" />
      <InputsCon>
        <Hone>Sign In</Hone>
        <Form onSubmit={handleSubmit(inputData)}>
          <InputCon>
            <Label htmlFor="email">Email</Label>
            <EmailInput
              type="text"
              id="email"
              placeholder="Email"
              {...register("email")}
            />
          </InputCon>
          <InputCon>
            <Label htmlFor="password">Password</Label>
            <PasswordInput
              type={hide ? "password" : "text"}
              id="password"
              placeholder="Password"
              {...register("password")}
            />
            {hide ? (
              <Hiden src={hidden} alt="" onClick={() => setHide(!hide)} />
            ) : (
              <Shown src={shown} alt="" onClick={() => setHide(!hide)} />
            )}
          </InputCon>
          <Btn>Sign In</Btn>
        </Form>
        <BottomCon>
          <EventSpan> New To Eventhub ?</EventSpan>
          <span></span>
        </BottomCon>
      </InputsCon>
    </Parent>
  );
}

const EventSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #121212;
`;
const BottomCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
const PasswordInput = styled.input`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid lightgray;
  outline: none;
  color: #121212;
  &::placeholder {
    font-size: 18px;
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
    font-size: 18px;
    opacity: 0.5;
    font-weight: 600;
  }
`;
const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;
const InputCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  position: relative;
`;
const Hone = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;
const InputsCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;
const Parent = styled.div`
  background-color: #f3f4f6;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 16rem;
  min-height: 100vh;
`;

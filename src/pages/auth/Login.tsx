import { useForm } from "react-hook-form";
import icon from "/icon-previous.svg";
import styled from "styled-components";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <Parent>
      <Icon src={icon} alt="" />
    </Parent>
  );
}
const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

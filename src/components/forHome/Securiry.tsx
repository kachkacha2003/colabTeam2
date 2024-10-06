import React from "react";
import security from "/security.jpg";
import styled from "styled-components";

export default function Securiry() {
  return (
    <Parent>
      <TextAndLineCon></TextAndLineCon>
      <img src={security} alt="" />
    </Parent>
  );
}
const TextAndLineCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const Parent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 4.2rem 1.6rem;
`;

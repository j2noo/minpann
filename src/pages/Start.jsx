import { useState } from "react";
import styled from "styled-components";

const Start = () => {
  const [answer, setAnswer] = useState();
  const handleSubmit = () => {
    answer;
    alert(answer);
  };
  return (
    <StartLayout>
      <InputForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="답을 입력하세요"
          required
          onChange={(e) => setAnswer(e.target.value)}
        ></Input>
        <InputButton type="submit"></InputButton>
      </InputForm>
    </StartLayout>
  );
};
const StartLayout = styled.div`
  width: 100%;
  height: 1000px;
  background: url("assets/bg.png") no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 80%;
  height: 50px;
`;
const InputButton = styled.input``;
export default Start;

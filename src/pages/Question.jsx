import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { currPageState } from "../atom";

// eslint-disable-next-line react/prop-types
const Question = ({ answer }) => {
  const [currPage, setCurrPage] = useRecoilState(currPageState);
  const [inputValue, setInputValue] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue == answer) {
      alert("맞았습니다");
      setInputValue("");
      setCurrPage((curr) => curr + 1);
    } else {
      alert("틀렸습니다");
    }
  };
  return (
    <StartLayout>
      <div>현재 페이지 : {currPage} </div>
      <br />
      <div>정답 : {answer} </div>
      <br />
      <br />

      <InputForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="답을 입력하세요"
          required
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
  flex-direction: column;
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
export default Question;

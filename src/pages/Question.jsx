import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { currPageState } from "../atom";

// eslint-disable-next-line react/prop-types
const Question = ({ answer, bgSrc }) => {
  const setCurrPage = useSetRecoilState(currPageState);
  const [inputValue, setInputValue] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue == answer) {
      alert("정답입니다!");
      setInputValue("");
      setCurrPage((curr) => curr + 1);
    } else {
      alert("정답이 아닙니다!");
    }
  };
  return (
    <StartLayout $bgSrc={bgSrc}>
      <BgImg src={bgSrc} />
      <InputForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="답을 입력하세요"
          required
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></Input>
        <InputButton type="submit" value={"정답 확인"}></InputButton>
      </InputForm>
    </StartLayout>
  );
};
const StartLayout = styled.div`
  width: 100%;
  height: auto;
  /* aspect-ratio: 300 / 1; */
  /* overflow-y: scroll; */
  /* background: url(${(props) => props.$bgSrc}) no-repeat;
  background-size: 100%; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const BgImg = styled.img`
  width: 100%;
`;
const InputForm = styled.form`
  position: absolute;
  width: 100%; /* Make the input form full width */
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Add a semi-transparent background */
  padding: 15px 10px;

  /* background-color: rgb(45, 61, 134); */
`;

const Input = styled.input`
  width: 80%;
  height: 50px;
  border: none;
  border-radius: 5px;
  outline: none; /* Remove the outline */
  padding: 0 10px;
`;

const InputButton = styled.input`
  padding: 5px;
`;
export default Question;

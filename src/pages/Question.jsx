import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { currPageState } from "../atom";

// eslint-disable-next-line react/prop-types
const Question = ({ answer, bgSrc }) => {
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
    <StartLayout $bgSrc={bgSrc}>
      {/* <div>현재 페이지 : {currPage} </div>
      <br />
      <div>정답 : {answer} </div>
      <br />
      <br /> */}
      <BgImg src={bgSrc} />
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
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Make the input form full width */
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Add a semi-transparent background */
  padding: 10px; /* Add some padding to separate it from the edge */
`;

const Input = styled.input`
  width: 80%;
  height: 50px;
  border: none; /* Remove the border */
  outline: none; /* Remove the outline */
`;

const InputButton = styled.input``;
export default Question;

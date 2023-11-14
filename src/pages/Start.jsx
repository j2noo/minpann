import { useRecoilValue } from "recoil";
import { currPageState } from "../atom";
import Question from "./Question";
import img1 from "/assets/bg.png";

const Start = () => {
  const answers = ["답1", "답2", "답3", "안녕"];
  const imgSrcs = [img1, img1, img1, img1];
  const currPage = useRecoilValue(currPageState);

  let content;
  if (currPage < answers.length) {
    content = <Question answer={answers[currPage]} bgSrc={imgSrcs[currPage]} />;
  } else {
    content = <div>종료 페이지</div>;
  }

  return <div>{content}</div>;
};

export default Start;

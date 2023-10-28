import { useRecoilValue } from "recoil";
import { currPageState } from "../atom";
import Question from "./Question";

const Start = () => {
  const answers = ["답1", "답2", "답3"];
  const currPage = useRecoilValue(currPageState);

  let content;
  if (currPage < answers.length) {
    content = <Question answer={answers[currPage]} />;
  } else {
    content = <div>종료 페이지</div>;
  }

  return <div>{content}</div>;
};

export default Start;

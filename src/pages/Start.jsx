import { useRecoilValue } from "recoil";
import { currPageState } from "../atom";
import Question from "./Question";
import img1 from "/assets/bg.png";
import img2 from "/assets/bg2.png";
import img3 from "/assets/bg3.png";
import img4 from "/assets/bg4.png";

const Start = () => {
  const answers = ["답1", "답2", "답3", "안녕ws"];
  const imgSrcs = [img1, img2, img3, img4];
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

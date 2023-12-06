import { useRecoilValue } from "recoil";
import { currPageState } from "../atom";
import Question from "./Question";
import img1 from "/assets/1.png";
import img2 from "/assets/2.png";
import img3 from "/assets/3.png";
import img4 from "/assets/4.png";
import img5 from "/assets/5.png";
import img6 from "/assets/6.png";
import img7 from "/assets/7.png";
import img8 from "/assets/8.png";
import img9 from "/assets/9.png";
import img10 from "/assets/10.png";
import img11 from "/assets/11.png";
import img12 from "/assets/12.png";
import img13 from "/assets/13.png";
import last from "/assets/last.png";

const Start = () => {
  const answers = [
    "*",
    "라치오스",
    "*",
    "lion",
    "3",
    "국제관",
    "108",
    "박물관옆",
    "1004",
    "*",
    "B116",
    "0810",
    "*",
  ];
  const imgSrcs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    last,
  ];
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

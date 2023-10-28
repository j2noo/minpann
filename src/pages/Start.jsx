import Question from "./Question";

const Start = () => {
  const answers = ["정답1", "정답2", "정답3"];
  return (
    <div>
      {answers.map((answer, idx) => (
        <Question key={idx} answer={answer}></Question>
      ))}
    </div>
  );
};

export default Start;

import css from "./Feedback.module.css";

function Feedback({ data, feedbackCount, savedFeedback }) {

  const positive = Math.round(
    ((data.good + data.neutral) / feedbackCount) * 100
  );

  return (
    <>
      <ul className={css.list}>
        <li>Total: {feedbackCount}</li>
        <li>Good: {data.good}</li>
        <li>Neutral: {data.neutral}</li>
        <li>Bad: {data.bad}</li>
        <li>Positive: {positive}%</li>
      </ul>
    </>
  );
}

export default Feedback;

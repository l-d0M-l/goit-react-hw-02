import { useState, useEffect } from "react";
import "./App.css";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
  // const [state, setState] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  const [state, setState] = useState(() => {
    // check if the state is in local storage
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback !== 0) {
      return JSON.parse(savedFeedback);
    }
    //if nothing in local storage, then initiate as 0s
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(state));
  }, [state]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === 0) {
      setState({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      return;
    }

    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const totalFeedback = state.bad + state.good + state.neutral;

  return (
    <>
      <Description />
      <Options update={updateFeedback} feedbackCount={totalFeedback} />
      {totalFeedback ? (
        <Feedback data={state} feedbackCount={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;

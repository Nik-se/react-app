import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import State from "./components/StatesAndCities";
import { SubmitAnswers } from "./services/AnswerService";
import { Answer } from "./services/AnswerService";
import Card from "./components/Card";

function App() {
  const [stateData, setStateData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [started, setStarted] = useState(false); // State to track if the "Start" button is clicked
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleStart = async () => {
    try {
      const data = await State(); // Fetch state data
      setStateData(data); // Set state data
      setStarted(true); // Set started to true after clicking "Start"
      setSubmitted(false);
    } catch (error) {
      console.error("Error fetching state data:", error);
    }
  };

  // Conditionally render the section only if started is true
  if (!started || submitted) {
    return (
      <>
        <div>
          <h1 className="text-center text-bg-primary p-3">
            USA STATES CAPITOLS
          </h1>
        </div>
        <div className="d-flex justify-content-center p-3">
          <div>
            <Card />
          </div>
        </div>
        {submitted && (
          <div className="text-center">
            <strong>Your Score : {score}/100</strong>
          </div>
        )}
        <div className="text-center">
          <Button onClick={handleStart} label="Start" />
        </div>
      </>
    );
  }

  if (!stateData.length) {
    // Render loading state while fetching data
    return <div>Loading...</div>;
  }

  const { stateName, cityName1, cityName2, cityName3, cityName4, cityName5 } =
    stateData[currentQuestionIndex];
  const items = [cityName1, cityName2, cityName3, cityName4, cityName5];

  const handleSelectItem = (item: string) => {
    const updatedAnswers = [...answers]; // Copying the answers array
    updatedAnswers[currentQuestionIndex] = {
      stateName: stateName,
      capitolCity: item,
    };
    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < stateData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await SubmitAnswers(answers);
      const points = response.data.points;
      setScore(points);
      setSubmitted(true);
      console.log("Answers submitted successfully!");
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center text-bg-primary p-3">USA STATES CAPITOLS</h1>
      </div>
      <div>
        <h4 className="text-center">What is the capitol city of</h4>
      </div>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <ListGroup
            items={items}
            heading={stateName}
            onSelectItem={handleSelectItem}
          />
          <div className="text-center ml-2">
            <Button onClick={handlePreviousQuestion} label="Previous" />
            <Button onClick={handleNextQuestion} label="Next" />
          </div>
          <div>
            <Button onClick={handleSubmit} label="Submit" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

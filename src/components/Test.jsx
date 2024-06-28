import{ useState } from 'react';
const Test = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].correctOption) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    return <div>Your score is {score} / {questions.length}</div>;
  }

  return (
    <div>
      <h2>Test</h2>
      <p>{questions[currentQuestionIndex].question}</p>
      <ul>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name="option"
              checked={selectedOption === index}
              onChange={() => setSelectedOption(index)}
            />
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
};

export default Test;
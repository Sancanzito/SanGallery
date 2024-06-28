import{ useState } from 'react';
import { Card } from 'react-bootstrap';

const AddQuestion = ({ addQuestion }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState(0);

  const handleAddQuestion = () => {
    addQuestion({
      question,
      options,
      correctOption
    });
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectOption(0);
  };

  return (
    <Card>
      <h2>Add a Question</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Question"
      />
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
            placeholder={`Option ${index + 1}`}
          />
          <input
            type="radio"
            checked={correctOption === index}
            onChange={() => setCorrectOption(index)}
          />
        </div>
      ))}
      <button onClick={handleAddQuestion}>Add Question</button>
    </Card>
  );
};

export default AddQuestion;
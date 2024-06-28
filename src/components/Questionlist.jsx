import { Card } from "react-bootstrap";
const QuestionList = ({ questions, deleteQuestion }) => {
    return (
      <Card>
        <h2>Question List</h2>
        {questions.map((q, index) => (
          <div key={index}>
            <p>{q.question}</p>
            <ul>
              {q.options.map((option, idx) => (
                <li key={idx}>{option}</li>
              ))}
            </ul>
            <button onClick={() => deleteQuestion(index)}>Delete Question</button>
          </div>
        ))}
      </Card>
    );
  };
  
  export default QuestionList;
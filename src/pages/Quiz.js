import React, { useState } from "react";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: "Is React a JavaScript library?",
      answer: ""
    },
    {
      question: "Is Node.js a server-side runtime environment?",
      answer: ""
    },
    {
      question: "Is CSS a programming language?",
      answer: ""
    }
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const renderQuiz = () => {
    if (currentQuestion === questions.length) {
      // Quiz completed, show results
      const correctAnswers = answers.filter((answer, index) => answer === questions[index].answer);
      const result = `You got ${correctAnswers.length} out of ${questions.length} correct!`;
      return <p>{result}</p>;
    } else {
      // Show current question
      const question = questions[currentQuestion];
      return (
        <div>
          <p>{question.question}</p>
          <button onClick={() => handleAnswer("yes")}>Yes</button>
          <button onClick={() => handleAnswer("no")}>No</button>
        </div>
      );
    }
  };

  return <div>{renderQuiz()}</div>;
}

export default Quiz;

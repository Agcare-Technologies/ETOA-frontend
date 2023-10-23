// QuizCard.js
import React from "react";

const QuizCard = ({ onQuizCardClick, quizData }) => {
  const handleCardClick = () => {
    onQuizCardClick(quizData);
  };

  return (
    <div
      className='w-60 h-60 shadow-2xl rounded-md bg-orange-100 p-4 m-4'
      onClick={handleCardClick}
    >
      <h2>title</h2> {/* Display the title from quizData */}
    </div>
  );
};

export default QuizCard;

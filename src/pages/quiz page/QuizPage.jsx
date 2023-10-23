import React, { useState } from "react";
import QuizList from "../../components/QuizList";
import QuizFormat from "../../components/QuizFormat";
import { quizzes } from "../../mock data/quizQuestions";

const QuizPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  // Function to handle QuizCard click and set the selected quiz
  const handleQuizCardClick = (quizData) => {
    setSelectedQuiz(quizData);
  };

  // Function to go back to QuizList
  const handleGoBack = () => {
    setSelectedQuiz(null); // Clear selectedQuiz to return to QuizList
  };

  return (
    <div>
      {selectedQuiz ? (
        // Render QuizFormat when a quiz is selected and pass the handleGoBack function
        <QuizFormat quizData={selectedQuiz} onGoBack={handleGoBack} />
      ) : (
        // Render QuizList when no quiz is selected and pass the quizzes and onQuizCardClick function
        <QuizList quizzes={quizzes} onQuizCardClick={handleQuizCardClick} />
      )}
    </div>
  );
};

export default QuizPage;

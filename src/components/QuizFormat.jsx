import React, { useState } from "react";

const QuizFormat = ({ quizData, onGoBack }) => {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className='App'>
      {/* 1. Header */}
      <h1>{quizData.title}</h1>

      {/* 2. Current Score */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game */}
      {showResults ? (
        /* 4. Final Results */
        <div className='final-results'>
          <h1>Final Results</h1>
          <h2>
            {score} out of {quizData.questions.length} correct - (
            {(score / quizData.questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card */
        <div className='question-card'>
          {/* Current Question */}
          <h2>
            Question: {currentQuestion + 1} out of {quizData.questions.length}
          </h2>
          <h3 className='question-text'>
            {quizData.questions[currentQuestion].text}
          </h3>

          {/* List of possible answers */}
          <ul>
            {quizData.questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div>
        <button onClick={onGoBack}>GO BACK</button>
      </div>
    </div>
  );
};

export default QuizFormat;

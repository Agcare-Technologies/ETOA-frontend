import React from "react";
import ProgressCircle from "../../components/ProgressCircle";

const ProgressPage = () => {
  // Mock data
  const quizData = [
    { quizName: "Quiz 1", topic: "Acceptable Policy", percentage: 60 },
    { quizName: "Quiz 2", topic: "Change Management", percentage: 80 },
    { quizName: "Quiz 3", topic: "Data Breach Procedure", percentage: 90 },
    { quizName: "Quiz 4", topic: "Data Retention", percentage: 75 },
    { quizName: "Quiz 5", topic: "Change Security", percentage: 95 },
    { quizName: "Quiz 6", topic: "Identity Management", percentage: 100 },
    { quizName: "Quiz 7", topic: "IT Asset Disposable Policy", percentage: 75 },
  ];

  return (
    <div className='m-4 p-4'>
      <h1 className='text-4xl font-semibold'>Quiz Progress</h1>
      <table className='w-full border-collapse text-sm font-semibold'>
        <thead></thead>
        <tbody>
          {quizData.map((quiz, index) => (
            <tr
              key={index}
              className='hover:bg-gray-100 cursor-pointer border-b'
            >
              <td className='px-4 py-2 w-1/4'>{quiz.quizName}</td>
              <td className='px-4 py-2 w-1/4'>{quiz.topic}</td>
              <td className='px-4 py-2 w-1/4'>
                <ProgressCircle percentage={quiz.percentage} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgressPage;

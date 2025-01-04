import React from "react";
import Navbar from "../../components/navbar";
import { Button } from "../../../../ui/button";

const SocialView = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  const questions = [
    {
      id: 1,
      type: "mcq",
      question: "Which event marked the beginning of the French Revolution?",
      options: [
        "The Storming of the Bastille",
        "The Tennis Court Oath",
        "The March on Versailles",
        "The Declaration of the Rights of Man",
      ],
      correctAnswer: "The Storming of the Bastille",
      studentAnswer: "The Tennis Court Oath", // This would come from your submission data
      feedback:
        "Incorrect. The Storming of the Bastille on July 14, 1789, is widely considered the start of the French Revolution as it symbolized the first major action of revolutionary violence.",
    },
    {
      id: 4,
      type: "subjective",
      question:
        "Explain the causes and consequences of the Industrial Revolution in Europe.",
      correctAnswer:
        "The Industrial Revolution was driven by technological innovations, urbanization, and changes in agricultural practices. Key consequences included the rise of factories, improved living standards, but also poor working conditions and environmental impacts.",
      studentAnswer:
        "The Industrial Revolution changed how things were made in factories.", // This would come from submission
      feedback:
        "Partial credit. While you identified the basic concept, your answer lacks depth. Consider including specific causes like technological innovations and discussing both positive and negative consequences.",
    },
  ];

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <Navbar mode="view" />
      <div className="p-4 max-w-3xl mx-auto mt-20">
        <h1 className="text-2xl text-center font-bold mb-4">
          Test Results Review
        </h1>

        <div className="space-y-8">
          <div className="text-sm font-medium text-gray-500 text-center">
            Question Type: {currentQuestion.type}
          </div>

          <div className="border rounded-lg p-6 space-y-4">
            <h2 className="font-semibold">
              Question {currentQuestionIndex + 1}:
            </h2>
            <p className="text-lg">{currentQuestion.question}</p>

            {currentQuestion.type === "mcq" && (
              <div className="space-y-2">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      option === currentQuestion.correctAnswer
                        ? "border-green-500 bg-green-50"
                        : option === currentQuestion.studentAnswer
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200"
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}

            {currentQuestion.type === "subjective" && (
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-medium">Your Answer:</h3>
                  <p className="text-gray-700">
                    {currentQuestion.studentAnswer}
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-medium">Correct Answer:</h3>
                  <p className="text-gray-700">
                    {currentQuestion.correctAnswer}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-4 border-l-4 border-yellow-500 pl-4">
              <h3 className="font-medium">Feedback:</h3>
              <p className="text-gray-700">{currentQuestion.feedback}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-between">
          <div>
            {currentQuestionIndex > 0 && (
              <Button variant="light" onClick={handlePreviousQuestion}>
                Previous Question
              </Button>
            )}
          </div>
          {currentQuestionIndex < questions.length - 1 && (
            <Button onClick={handleNextQuestion}>Next Question</Button>
          )}
        </div>
      </div>
    </>
  );
};

export default SocialView;

import React, { useState } from "react";
import MCQ from "../../../app/components/mcq";
import Subjective from "../../../app/components/subjective";
import { Button } from "../../../../ui/button";
import TestNavbar from "../../components/testnavbar";

const SocialTest = () => {
  const questions = [
    {
      id: 1,
      question: "Which event marked the beginning of the French Revolution?",
      options: [
        "The Storming of the Bastille",
        "The Tennis Court Oath",
        "The March on Versailles",
        "The Declaration of the Rights of Man",
      ],
      correctAnswer: "The Storming of the Bastille",
    },
    {
      id: 2,
      question: "Which of these is a greenhouse gas?",
      options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
    },
    {
      id: 3,
      question: "Who is known as the 'Father of Indian Constitution'?",
      options: [
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Dr. B.R. Ambedkar",
        "Sardar Vallabhbhai Patel",
      ],
      correctAnswer: "Dr. B.R. Ambedkar",
    },
    {
      id: 4,
      type: "subjective",
      question:
        "Explain the causes and consequences of the Industrial Revolution in Europe.",
    },
    {
      id: 5,
      type: "subjective",
      question:
        "Describe the role of Mahatma Gandhi in India's independence movement and his philosophy of non-violence.",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleAnswerSelect = (answer) => {
    console.log("Selecting answer:", answer, typeof answer);
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: Number(answer),
    }));
  };

  return (
    <>
      <TestNavbar />
      <div className="p-4 max-w-3xl mx-auto mt-20">
        <h1 className="text-2xl text-center font-bold mb-4">
          Social Studies Test
        </h1>

        <div className="space-y-8">
          <div className="text-sm font-medium text-gray-500 text-center">
            Question Type: {questions[currentQuestionIndex].type || "MCQ"}
          </div>
          {questions[currentQuestionIndex].type === "subjective" ? (
            <Subjective
              key={currentQuestionIndex}
              question={questions[currentQuestionIndex].question}
              answer={selectedAnswers[currentQuestionIndex] || ""}
              onAnswerChange={handleAnswerSelect}
            />
          ) : (
            <MCQ
              key={currentQuestionIndex}
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              selectedOption={selectedAnswers[currentQuestionIndex] ?? null}
              onOptionSelect={handleAnswerSelect}
            />
          )}
        </div>

        <div className="mt-12 flex justify-between">
          <div>
            {currentQuestionIndex > 0 && (
              <Button variant="light" onClick={handlePreviousQuestion}>
                Back
              </Button>
            )}
          </div>
          <Button onClick={handleNextQuestion}>
            {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default SocialTest;

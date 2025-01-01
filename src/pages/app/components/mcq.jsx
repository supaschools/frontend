import React from "react";
import styles from "./css_modules/option.module.css";

const MCQ = ({ question, options, selectedOption, onOptionSelect }) => {
  const handleOptionSelect = (index) => {
    console.log("Clicking option:", index, typeof index);
    onOptionSelect(index);
  };

  return (
    <div className="mcq-container w-full flex flex-col items-center">
      {/* Question Section */}
      <div className="question-section w-full max-w-md mb-6">
        <p className="question-text text-xl">{question}</p>
      </div>

      {/* Options Section */}
      <div className="options-section w-full max-w-md flex flex-col gap-5">
        {options.map((option, index) => {
          const isSelected = selectedOption === index;
          console.log(`Option ${index}:`, {
            selectedOption,
            index,
            isSelected,
            selectedOptionType: typeof selectedOption,
            indexType: typeof index,
          });

          return (
            <div
              key={index}
              onClick={() => handleOptionSelect(index)}
              className={`${styles.card} bg-white rounded-lg flex items-center cursor-pointer transition-all duration-200 w-full`}
              style={{
                backgroundColor: isSelected ? "#dfe8f7" : "white",
                boxShadow: isSelected ? "0 4px #6d9fef" : "0 4px #e2e8f0",
              }}
            >
              <div
                className={`${styles.text} text-lg font-medium text-gray-800 px-8 py-4 w-full`}
              >
                {option}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MCQ;

import React from "react";
import { FiUploadCloud } from "react-icons/fi";
import styles from "./css_modules/option.module.css";

const Subjective = ({ question }) => {
  return (
    <div className="subjective-container w-full flex flex-col items-center">
      {/* Question Section */}
      <div className="question-section w-full max-w-md mb-6">
        <p className="question-text text-xl">{question}</p>
      </div>

      {/* Upload Section */}
      <div className="upload-section w-full max-w-md">
        <label
          htmlFor="solution-upload"
          className={`${styles.card} bg-white rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-200 w-full p-15`}
          style={{
            boxShadow: "0 4px #e2e8f0",
          }}
        >
          <FiUploadCloud className="w-10 h-10 text-gray-400 mb-3" />
          <p className="text-lg font-medium text-gray-600">
            Upload an image of your solution
          </p>
          <input
            id="solution-upload"
            type="file"
            accept="image/*"
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default Subjective;

import React from "react";
import { LineChart, Bot, BookOpen, Upload } from "lucide-react";

export const subjects = {
  maths: {
    title: "Mathematics",
    question: "Calculate the value of m in the equation 3·3²ᵐ - 11·3ᵐ = 4",
    icon: (activeSubject) => (
      <LineChart
        size={20}
        className={`${
          activeSubject === "maths" ? "text-white" : "text-[#407BFF]"
        }`}
      />
    ),
  },
  science: {
    title: "Science",
    question:
      "Anirudh took two metal oxides, aluminium oxide and magnesium oxide, but he forget to label them. How will you guide anirudh to identify the metal oxides and label them?",
    icon: (activeSubject) => (
      <Bot
        size={20}
        className={`${
          activeSubject === "science" ? "text-white" : "text-[#407BFF]"
        }`}
      />
    ),
  },

  social: {
    title: "Social Science",
    question:
      "The most powerful weapon for the spanish conqueror was not conventional millitary. Justify this statement.",
    icon: (activeSubject) => (
      <Upload
        size={20}
        className={`${
          activeSubject === "social" ? "text-white" : "text-[#407BFF]"
        }`}
      />
    ),
  },
  english: {
    title: "English",
    question: "Analyze the theme of the given poem.",
    icon: (activeSubject) => (
      <BookOpen
        size={20}
        className={`${
          activeSubject === "english" ? "text-white" : "text-[#407BFF]"
        }`}
      />
    ),
  },
};

export default function SubjectTabs({ activeSubject, handleSubjectChange }) {
  return (
    <div className="flex flex-wrap gap-3  pointer-events-auto">
      {Object.entries(subjects).map(([key, value]) => (
        <button
          key={key}
          type="button"
          onClick={() => handleSubjectChange(key)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium 
            transition-all duration-300 cursor-pointer z-10
            ${
              activeSubject === key
                ? "bg-[#407BFF] text-white"
                : "bg-[#407BFF]/10 text-[#407BFF] hover:bg-[#407BFF]/20"
            }`}
        >
          {value.icon(activeSubject)}
          {value.title}
        </button>
      ))}
    </div>
  );
}

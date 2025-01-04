import React from "react";
import { subjects } from "../SubjectTabs";
import img1 from "../../../../../assets/maths_demo_eval.jpg";

export default function PersonalizedInsights({ activeSubject, setActiveTab }) {
  const metrics = [
    { label: "Problem Solving", value: 85 },
    { label: "Concept Understanding", value: 92 },
    { label: "Critical Thinking", value: 78 },
  ];

  const analysis = {
    strengths: [
      "Strong grasp of fundamental concepts",
      "Excellent problem-solving approach",
      "Clear and organized thought process",
    ],
    weaknesses: [
      "Could improve on showing detailed work",
      "Need more practice with complex problems",
    ],
    overallFeedback:
      "Shows great potential with strong analytical skills. Focus on documenting problem-solving steps more thoroughly for better results.",
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-400 text-lg mb-6">
        Get detailed insights and performance analytics for each subject.
      </p>

      <div className="bg-[#0A0D1F] p-6 rounded-xl border border-[#407BFF]/20">
        <h3 className="text-white font-medium mb-4">
          {subjects[activeSubject].title} Performance
        </h3>
        <div className="w-full h-[500px] rounded-xl overflow-hidden mb-6">
          <img
            src={img1}
            alt={`${subjects[activeSubject].title} Insights`}
            className="w-full h-full object-contain bg-white/5 p-4"
          />
        </div>
        <div className="space-y-6">
          <div className="mt-8 space-y-4">
            <div>
              <h4 className="text-white font-medium mb-2">Strengths</h4>
              <ul className="list-disc list-inside text-gray-400">
                {analysis.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">
                Areas for Improvement
              </h4>
              <ul className="list-disc list-inside text-gray-400">
                {analysis.weaknesses.map((weakness, index) => (
                  <li key={index}>{weakness}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-2">Overall Feedback</h4>
              <p className="text-gray-400">{analysis.overallFeedback}</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={() => setActiveTab("04")}
            className="w-full bg-[#407BFF] hover:bg-[#407BFF]/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Personalize Learning Path
          </button>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ label, value }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white">{label}</span>
        <span className="text-[#407BFF]">{value}%</span>
      </div>
      <div className="w-full h-2 bg-[#407BFF]/20 rounded-full overflow-hidden">
        <div className="h-full bg-[#407BFF]" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

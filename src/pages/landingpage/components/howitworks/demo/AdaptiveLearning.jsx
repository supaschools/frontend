import React from "react";
import { BookOpen, Brain } from "lucide-react";
import { subjects } from "../SubjectTabs";

export default function AdaptiveLearning({ activeSubject, setActiveTab }) {
  const roadmapSteps = [
    {
      level: "Beginner",
      status: "completed",
      description: "Foundation concepts",
      progress: "100%",
    },
    {
      level: "Intermediate",
      status: "current",
      description: "Advanced topics",
      progress: "45%",
    },
    {
      level: "Advanced",
      status: "upcoming",
      description: "Expert material",
      progress: "0%",
    },
  ];

  const studyModules = [
    {
      title: "Factoring Quadratics",
      progress: "80%",
      status: "completed",
      duration: "15 mins",
    },
    {
      title: "Quadratic Formula",
      progress: "30%",
      status: "in-progress",
      duration: "20 mins",
    },
  ];

  return (
    <div className="space-y-6">
      <p className="text-gray-400 text-lg text-center">
        Tailored Mathematics exercises and study resources based on student's
        learning gaps.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#0A0D1F] p-8 rounded-xl border border-[#407BFF]/20 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#407BFF]/10">
              <BookOpen className="w-5 h-5 text-[#407BFF]" />
            </div>
            <h3 className="text-white font-medium">Study Materials</h3>
          </div>

          <div className="flex-1">
            <div className="space-y-4 mb-6">
              {studyModules.map((module) => (
                <div
                  key={module.title}
                  className="p-4 rounded-lg bg-[#1A1F35]/50 hover:bg-[#1A1F35] transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-white text-sm font-medium mb-1">
                        {module.title}
                      </h4>
                      <span className="text-gray-400 text-xs">
                        {module.duration}
                      </span>
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full
                      ${
                        module.status === "completed"
                          ? "bg-green-500/10 text-green-400"
                          : module.status === "in-progress"
                          ? "bg-[#407BFF]/10 text-[#407BFF]"
                          : "bg-gray-500/10 text-gray-400"
                      }`}
                    >
                      {module.progress}
                    </span>
                  </div>

                  <div className="h-1 rounded-full bg-[#407BFF]/10">
                    <div
                      className={`h-full rounded-full transition-all duration-300
                        ${
                          module.status === "completed"
                            ? "bg-green-500"
                            : module.status === "in-progress"
                            ? "bg-[#407BFF]"
                            : "bg-gray-600"
                        }`}
                      style={{ width: module.progress }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <button className="w-full px-4 py-2.5 border border-[#407BFF] text-[#407BFF] hover:bg-[#407BFF]/10 rounded-lg text-sm font-medium transition-colors duration-300">
              View Resources
            </button>
          </div>
        </div>

        <div className="bg-[#0A0D1F] p-8 rounded-xl border border-[#407BFF]/20 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#407BFF]/10">
              <Brain className="w-5 h-5 text-[#407BFF]" />
            </div>
            <h3 className="text-white font-medium">Practice Questions</h3>
          </div>

          <div className="relative mb-8 pl-4">
            <div className="absolute top-4 bottom-4 left-4 w-1 bg-gradient-to-b from-[#407BFF]/10 via-[#407BFF]/20 to-[#407BFF]/10 rounded-full" />

            <div className="relative space-y-8">
              {roadmapSteps.map((step, index) => (
                <div key={step.level} className="flex items-center group">
                  <div className="relative">
                    <div
                      className={`w-8 h-8 rounded-full transition-all duration-300 
                        ${
                          step.status === "completed"
                            ? "bg-[#407BFF] ring-4 ring-[#407BFF]/20"
                            : step.status === "current"
                            ? "bg-[#407BFF]/50 ring-4 ring-[#407BFF]/10"
                            : "bg-[#407BFF]/20"
                        } 
                        group-hover:scale-110`}
                    >
                      {step.status === "completed" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </div>

                    <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#1A1F35] text-white text-xs py-2 px-3 rounded-lg shadow-lg whitespace-nowrap">
                        <div className="font-medium mb-1">
                          {step.description}
                        </div>
                        <div className="text-[#407BFF]">{step.progress}</div>
                      </div>
                    </div>
                  </div>

                  <div className="ml-4">
                    <span
                      className={`text-sm font-medium transition-colors duration-300 block
                      ${
                        step.status === "completed"
                          ? "text-white"
                          : step.status === "current"
                          ? "text-gray-300"
                          : "text-gray-500"
                      }`}
                    >
                      {step.level}
                    </span>
                    <span className="text-xs text-gray-400">
                      {step.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <button className="w-full px-4 py-2.5 border border-[#407BFF] text-[#407BFF] hover:bg-[#407BFF]/10 rounded-lg text-sm font-medium transition-colors duration-300">
              Start Practice
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => setActiveTab("03")}
          className="px-6 py-3 bg-[#407BFF] hover:bg-[#407BFF]/90 text-white rounded-lg text-base font-medium transition-colors duration-300 flex items-center gap-2"
        >
          Have doubts ?
        </button>
      </div>
    </div>
  );
}

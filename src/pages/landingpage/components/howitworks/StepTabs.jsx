import React, { useEffect, useRef } from "react";
import { Upload, Bot, LineChart, BookOpen } from "lucide-react";

export const steps = [
  {
    number: "01",
    title: "Input Student Work",
    icon: <Upload className="w-6 h-6 text-[#407BFF]" />,
  },
  {
    number: "02",
    title: "Evaluation By AI",
    icon: <Bot className="w-6 h-6 text-[#407BFF]" />,
  },
  {
    number: "03",
    title: "Analysis And Feedback",
    icon: <LineChart className="w-6 h-6 text-[#407BFF]" />,
  },
  {
    number: "04",
    title: "Personalized Content",
    icon: <BookOpen className="w-6 h-6 text-[#407BFF]" />,
  },
];

export default function StepTabs({ activeTab, setActiveTab }) {
  return (
    <div className="md:w-64 flex-shrink-0">
      <div className="flex flex-row md:flex-col gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="w-full opacity-0 translate-y-8 transition-all duration-500"
            data-step
          >
            <div
              className={`bg-[#0A0D1F] p-4 rounded-xl border cursor-pointer
                transition-all duration-300 ease-in-out flex items-center gap-3 w-full
                ${
                  activeTab === step.number
                    ? "border-[#407BFF] bg-[#0C0F24]"
                    : "border-[#407BFF]/20 hover:border-[#407BFF]/60"
                }`}
              onClick={() => setActiveTab(step.number)}
            >
              <div className="p-2 rounded-lg bg-[#407BFF]/10">{step.icon}</div>
              <div>
                <div className="text-[#407BFF] text-sm font-medium opacity-50">
                  {step.number}
                </div>
                <h3 className="text-white font-medium">{step.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

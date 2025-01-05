import React from "react";
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

export default function StepTabs({
  activeTab,
  setActiveTab,
  uploadedImages,
  hasScanned,
}) {
  const handleStepClick = (stepNumber) => {
    const targetStep = parseInt(stepNumber);

    // Allow going back to any previous step
    if (targetStep < parseInt(activeTab)) {
      setActiveTab(stepNumber);
      return;
    }

    // Prevent moving to step 2 without images
    if (stepNumber === "02" && uploadedImages?.length === 0) {
      return;
    }

    // Prevent moving to step 3 without scanning
    if (stepNumber === "03" && !hasScanned) {
      return;
    }

    // Allow moving to next step if conditions are met
    if (targetStep === parseInt(activeTab) + 1) {
      setActiveTab(stepNumber);
    }
  };

  const isStepAccessible = (stepNumber) => {
    const step = parseInt(stepNumber);
    const current = parseInt(activeTab);

    if (step === 1) return true;
    if (step === 2) return uploadedImages?.length > 0;
    if (step === 3) return hasScanned;
    if (step === 4) return hasScanned;

    return step <= current;
  };

  return (
    <div className="md:sticky md:top-24 md:w-64 flex-shrink-0">
      <div className="flex flex-row md:flex-col gap-14">
        {steps.map((step) => {
          const isClickable = isStepAccessible(step.number);

          return (
            <div
              key={step.number}
              className={`w-full transition-all duration-500 ${
                isClickable ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              data-step
              onClick={() => handleStepClick(step.number)}
            >
              <div
                className={`bg-[#0A0D1F] p-4 rounded-xl border
                  transition-all duration-300 ease-in-out flex items-center gap-3 w-full
                  ${isClickable ? "hover:border-[#407BFF]/60" : ""}
                  ${
                    activeTab === step.number
                      ? "border-[#407BFF] bg-[#0C0F24]"
                      : "border-[#407BFF]/20"
                  }`}
              >
                <div className="p-2 rounded-lg bg-[#407BFF]/10">
                  {step.icon}
                </div>
                <div>
                  <div className="text-[#407BFF] text-sm font-medium opacity-50">
                    {step.number}
                  </div>
                  <h3 className="text-white font-medium">{step.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

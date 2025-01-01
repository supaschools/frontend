import React from "react";
import { ArrowRight, Upload, Bot, LineChart, BookOpen } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Input Student Work",
      description:
        "Upload assignments, quizzes, and exam responses to the platform",
      icon: <Upload className="w-8 h-8 text-[#407BFF]" />,
    },
    {
      number: "02",
      title: "Evaluation By AI",
      description: "AI evaluates and grade responses with very high accuracy",
      icon: <Bot className="w-8 h-8 text-[#407BFF]" />,
    },
    {
      number: "03",
      title: "Personalized Insights",
      description:
        "Provides feedback to both teacher and student, pin-pointing learning gaps",
      icon: <LineChart className="w-8 h-8 text-[#407BFF]" />,
    },
    {
      number: "04",
      title: "Adaptive Learning",
      description:
        "Based on strength and weaknesses, AI generates personalized learning materials and exercises",
      icon: <BookOpen className="w-8 h-8 text-[#407BFF]" />,
    },
  ];

  return (
    <section className="relative bg-[#000207] py-32">
      {/* Section title */}
      <div className="text-center mb-20">
        <div className="inline-block mb-8 px-4 py-1 rounded-full bg-[#407BFF]/10 text-[#407BFF]">
          HOW IT WORKS
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
          Steps to Personalized Learning
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
          Designed to be intuitive for both teachers and students, with no
          learning curve required. Integrates seamlessly into teacher's
          day-to-day work without added effort.
        </p>
      </div>

      {/* Flow chart */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Step card with enhanced hover effects */}
              <div
                className="bg-[#0A0D1F] p-8 rounded-xl border border-[#407BFF]/20 h-full 
                            transition-all duration-300 ease-in-out
                            hover:border-[#407BFF]/60 hover:shadow-lg hover:shadow-[#407BFF]/20
                            hover:translate-y-[-4px] hover:bg-[#0C0F24]"
              >
                <div
                  className="text-[#407BFF] text-5xl mb-6 opacity-50 font-bold 
                              group-hover:opacity-70 transition-opacity"
                >
                  {step.number}
                </div>
                <div
                  className="mb-4 p-2 rounded-lg bg-[#407BFF]/10 w-fit 
                              transition-colors duration-300 hover:bg-[#407BFF]/20"
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>

              {/* Connector arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="text-[#407BFF] w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-[#407BFF] opacity-[0.07] blur-[120px] transform -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}

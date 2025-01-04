import React from "react";
import { BookOpen } from "lucide-react";
import { subjects } from "../SubjectTabs";

export default function AdaptiveLearning({ activeSubject }) {
  return (
    <div className="space-y-6">
      <p className="text-gray-400 text-lg mb-6">
        Receive personalized learning recommendations based on your performance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <RecommendationCard
          title="Practice Questions"
          description={`Tailored ${subjects[activeSubject].title} exercises based on your learning needs`}
          buttonText="Start Practice"
        />
        <RecommendationCard
          title="Study Materials"
          description="Recommended resources to strengthen your understanding"
          buttonText="View Resources"
        />
      </div>
    </div>
  );
}

function RecommendationCard({ title, description, buttonText }) {
  return (
    <div className="bg-[#0A0D1F] p-6 rounded-xl border border-[#407BFF]/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-[#407BFF]/10">
          <BookOpen className="w-5 h-5 text-[#407BFF]" />
        </div>
        <h3 className="text-white font-medium">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <button className="px-4 py-2 bg-[#407BFF]/10 text-[#407BFF] rounded-full text-sm font-medium">
        {buttonText}
      </button>
    </div>
  );
}

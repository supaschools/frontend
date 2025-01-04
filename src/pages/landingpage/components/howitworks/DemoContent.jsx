import React from "react";
import UploadWork from "./demo/UploadWork";
import AIEvaluation from "./demo/AIEvaluation";
import PersonalizedInsights from "./demo/PersonalizedInsights";
import AdaptiveLearning from "./demo/AdaptiveLearning";

export default function DemoContent({
  activeTab,
  setActiveTab,
  activeSubject,
  uploadedImages,
  setUploadedImages,
}) {
  console.log("DemoContent Render:", {
    activeTab,
    setActiveTab: typeof setActiveTab,
    activeSubject,
  });

  const handleTabChange = (newTab) => {
    console.log("Attempting to change tab to:", newTab);
    if (typeof setActiveTab === "function") {
      setActiveTab(newTab);
      console.log("Tab change function called");
    }
  };

  switch (activeTab) {
    case "01":
      return (
        <UploadWork
          activeSubject={activeSubject}
          setActiveTab={handleTabChange}
          setUploadedImages={setUploadedImages}
        />
      );
    case "02":
      return (
        <AIEvaluation
          activeSubject={activeSubject}
          uploadedImages={uploadedImages}
          setActiveTab={handleTabChange}
        />
      );
    case "03":
      return (
        <PersonalizedInsights
          activeSubject={activeSubject}
          setActiveTab={handleTabChange}
        />
      );
    case "04":
      return <AdaptiveLearning activeSubject={activeSubject} />;
    default:
      return null;
  }
}

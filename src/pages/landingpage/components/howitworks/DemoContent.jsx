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
  hasScanned,
  setHasScanned,
}) {
  console.log("DemoContent Render:", {
    activeTab,
    uploadedImages,
    hasScanned,
  });

  const handleTabChange = (newTab) => {
    if (newTab === "02" && uploadedImages.length === 0) {
      console.log("Preventing navigation to step 2 - no images");
      return;
    }

    console.log("Changing tab to:", newTab);
    setActiveTab(newTab);
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
          hasScanned={hasScanned}
          setHasScanned={setHasScanned}
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

import React from "react";
import CombinedEvaluation from "./demo/CombinedEvaluation";
import AdaptiveLearning from "./demo/AdaptiveLearning";
import VirtualAssistant from "./demo/VirtualAssistant";

export default function DemoContent({
  activeTab,
  setActiveTab,
  activeSubject,
  uploadedImages,
  setUploadedImages,
  hasScanned,
  setHasScanned,
}) {
  switch (activeTab) {
    case "01":
      return (
        <CombinedEvaluation
          activeSubject={activeSubject}
          setActiveTab={setActiveTab}
          uploadedImages={uploadedImages}
          setUploadedImages={setUploadedImages}
          hasScanned={hasScanned}
          setHasScanned={setHasScanned}
        />
      );
    case "02":
      return (
        <AdaptiveLearning
          activeSubject={activeSubject}
          setActiveTab={setActiveTab}
        />
      );
    case "03":
      return <VirtualAssistant activeSubject={activeSubject} />;
    default:
      return null;
  }
}

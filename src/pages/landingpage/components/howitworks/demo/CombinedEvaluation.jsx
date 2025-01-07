import React, { useState } from "react";
import UploadWork from "./UploadWork";
import AIEvaluation from "./AIEvaluation";
import PersonalizedInsights from "./PersonalizedInsights";

export default function CombinedEvaluation({
  activeSubject,
  setActiveTab,
  uploadedImages,
  setUploadedImages,
  hasScanned,
  setHasScanned,
}) {
  const [evaluationStep, setEvaluationStep] = useState("upload");

  return (
    <div className="space-y-8">
      {evaluationStep === "upload" && (
        <UploadWork
          activeSubject={activeSubject}
          setActiveTab={setActiveTab}
          setUploadedImages={(images) => {
            setUploadedImages(images);
            setEvaluationStep("evaluation");
          }}
        />
      )}

      {evaluationStep === "evaluation" && (
        <AIEvaluation
          activeSubject={activeSubject}
          uploadedImages={uploadedImages}
          setActiveTab={setActiveTab}
          hasScanned={hasScanned}
          setHasScanned={setHasScanned}
          onComplete={() => setEvaluationStep("insights")}
        />
      )}

      {evaluationStep === "insights" && (
        <PersonalizedInsights
          activeSubject={activeSubject}
          setActiveTab={setActiveTab}
        />
      )}
    </div>
  );
}

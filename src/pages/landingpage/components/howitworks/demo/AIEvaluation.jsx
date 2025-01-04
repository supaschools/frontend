import React, { useState, useEffect } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import { subjects } from "../SubjectTabs";

export default function AIEvaluation({
  activeSubject,
  uploadedImages,
  setActiveTab,
}) {
  const [scanPosition, setScanPosition] = useState(0);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    if (isScanning) {
      const startTime = Date.now();
      const duration = 3000; // 3 seconds for full scan

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeProgress =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        setScanPosition(easeProgress * 100);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsScanning(false);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isScanning]);

  const handleFeedbackClick = () => {
    console.log("See Feedback clicked, changing to tab 03");
    setActiveTab("03");
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-400 text-lg mb-6">
        Our AI system evaluates student work with detailed analysis and scoring.
      </p>

      <div className="bg-[#0A0D1F] p-6 rounded-xl border border-[#407BFF]/20">
        <h3 className="text-white font-medium mb-4">
          {subjects[activeSubject].title} Evaluation
        </h3>

        {/* Scanning Container */}
        <div className="relative mb-8 h-[800px] border border-[#407BFF]/20 rounded-lg overflow-hidden">
          {/* Display uploaded images */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            {uploadedImages.map((url, index) => (
              <div
                key={index}
                className="w-full h-full flex items-center justify-center"
              >
                <img
                  src={url}
                  alt={`Uploaded image ${index + 1}`}
                  className="w-auto h-[700px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Scanning Line */}
          <div
            className="absolute left-0 w-full h-1 bg-[#407BFF] blur-[2px] z-10"
            style={{
              top: `${scanPosition}%`,
              transition: "top 16ms linear",
            }}
          />

          {/* Scanning Gradient */}
          <div
            className="absolute left-0 w-full bg-gradient-to-b from-[#407BFF]/20 to-transparent z-10"
            style={{
              height: "200px",
              top: `${scanPosition}%`,
              transform: "translateY(-50%)",
              opacity: isScanning ? 0.5 : 0,
              transition: "top 16ms linear, opacity 300ms ease",
            }}
          />

          {/* "Scanning" Text */}
          {isScanning && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 bg-[#407BFF] text-white px-3 py-1 rounded-full text-sm z-20"
              style={{
                top: `${scanPosition}%`,
                transition: "top 16ms linear",
              }}
            >
              Scanning...
            </div>
          )}
        </div>

        <div className="space-y-4">
          <EvaluationItem
            icon={<CheckCircle className="text-green-500 mt-1" size={18} />}
            title="Answer Accuracy"
            description="Analyzing solution steps and methodology"
            isVisible={scanPosition > 30}
          />
          <EvaluationItem
            icon={<CheckCircle className="text-green-500 mt-1" size={18} />}
            title="Concept Understanding"
            description="Evaluating grasp of core concepts"
            isVisible={scanPosition > 60}
          />
          <EvaluationItem
            icon={<AlertCircle className="text-[#407BFF] mt-1" size={18} />}
            title="Areas for Improvement"
            description="Identifying knowledge gaps"
            isVisible={scanPosition > 90}
          />
        </div>

        {/* See Feedback Button */}
        <div className="mt-6 flex justify-center">
          <button
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              !isScanning
                ? "bg-[#407BFF] text-white hover:bg-[#407BFF]/90 transform hover:scale-105"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
            disabled={isScanning}
            onClick={handleFeedbackClick}
          >
            {isScanning ? "Analyzing..." : "See Feedback"}
          </button>
        </div>
      </div>
    </div>
  );
}

function EvaluationItem({ icon, title, description, isVisible }) {
  return (
    <div
      className={`flex items-start gap-3 transition-all duration-500 ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-4"
      }`}
    >
      {icon}
      <div>
        <p className="text-white font-medium">{title}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}

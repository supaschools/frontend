import React, { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { subjects } from "../SubjectTabs";

export default function AIEvaluation({
  activeSubject,
  uploadedImages,
  setActiveTab,
  hasScanned,
  setHasScanned,
}) {
  const [scanPosition, setScanPosition] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    if (uploadedImages.length > 0 && !hasScanned) {
      setIsScanning(true);
    }

    if (hasScanned) {
      setIsScanning(false);
      setScanPosition(100);
      return;
    }

    if (isScanning) {
      const startTime = Date.now();
      const duration = 2000;

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;

        if (elapsed < duration) {
          const progress = elapsed / duration;
          const easeProgress = 1 - Math.cos((progress * Math.PI) / 2);
          setScanPosition(easeProgress * 100);
          requestAnimationFrame(animate);
        } else {
          setIsScanning(false);
          setHasScanned(true);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isScanning, hasScanned, setHasScanned, uploadedImages]);

  const handleFeedbackClick = () => {
    console.log("See Feedback clicked, changing to tab 03");
    setActiveTab("03");
  };

  return (
    <div className="space-y-2">
      <p className="text-gray-400 text-base mb-2">
        Our AI system evaluates student work with detailed analysis and scoring.
      </p>

      <div className="bg-[#0A0D1F] p-3 rounded-xl border border-[#407BFF]/20">
        <h3 className="text-white font-medium mb-2">
          {subjects[activeSubject].title} Evaluation
        </h3>

        {/* Scanning Container */}
        <div className="relative mb-4 h-[400px] border border-[#407BFF]/20 rounded-lg overflow-hidden">
          {/* Display uploaded images */}
          <div className="absolute inset-0 flex items-center justify-center p-2">
            {uploadedImages.map((url, index) => (
              <div
                key={index}
                className="w-full h-full flex items-center justify-center"
              >
                <img
                  src={url}
                  alt={`Uploaded image ${index + 1}`}
                  className="w-auto h-[320px] object-contain"
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
              className="absolute left-1/2 transform -translate-x-1/2 bg-[#407BFF] text-white px-2 py-0.5 rounded-full text-xs z-20"
              style={{
                top: `${scanPosition}%`,
                transition: "top 16ms linear",
              }}
            >
              Scanning...
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <EvaluationItem
            icon={<XCircle className="text-red-500 mt-0.5" size={14} />}
            title="Answer Accuracy"
            description="Checking solution steps"
            isVisible={scanPosition > 30}
          />
          <EvaluationItem
            icon={<CheckCircle className="text-green-500 mt-0.5" size={14} />}
            title="Concept Understanding"
            description="Evaluating grasp of core concepts"
            isVisible={scanPosition > 60}
          />
          <EvaluationItem
            icon={<AlertCircle className="text-[#407BFF] mt-0.5" size={14} />}
            title="Areas for Improvement"
            description="Identifying knowledge gaps"
            isVisible={scanPosition > 90}
          />
        </div>

        {/* See Feedback Button */}
        <div className="mt-6 mb-2 flex justify-center">
          <button
            className={`px-4 py-1 rounded-lg font-medium transition-all duration-300 ${
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
      className={`flex items-start gap-2 transition-all duration-500 ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-4"
      }`}
    >
      {icon}
      <div>
        <p className="text-white font-medium text-sm">{title}</p>
        <p className="text-gray-400 text-xs">{description}</p>
      </div>
    </div>
  );
}

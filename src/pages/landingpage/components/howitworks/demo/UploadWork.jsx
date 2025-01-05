import React from "react";
import { Upload } from "lucide-react";
import { subjects } from "../SubjectTabs";
import img1 from "../../../../../assets/maths_demo_sol.jpeg";
import mathsDemoImg from "../../../../../assets/maths_demo_sol.jpeg";
import scienceDemoImg from "../../../../../assets/science_demo_sol.jpeg";
import socialDemoImg from "../../../../../assets/social_demo_sol.jpeg";
import englishDemoImg from "../../../../../assets/social_demo_sol.jpeg";

const demoImages = {
  maths: mathsDemoImg,
  science: scienceDemoImg,
  social: socialDemoImg,
  english: englishDemoImg,
};

export default function UploadWork({
  activeSubject,
  setActiveTab,
  setUploadedImages,
}) {
  const [dragActive, setDragActive] = React.useState(false);
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const [previewUrls, setPreviewUrls] = React.useState([]);

  React.useEffect(() => {
    setSelectedFiles([]);
    setPreviewUrls([]);
    // Cleanup old preview URLs
    previewUrls.forEach((url) => {
      URL.revokeObjectURL(url);
    });
  }, [activeSubject]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files) {
      const files = Array.from(e.dataTransfer.files);
      setSelectedFiles((prev) => [...prev, ...files]);

      // Create preview URLs for images
      const newPreviewUrls = files
        .map((file) => {
          if (file.type.startsWith("image/")) {
            return URL.createObjectURL(file);
          }
          return null;
        })
        .filter((url) => url !== null);

      setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
      setUploadedImages(newPreviewUrls); // Save to parent state
    }
  };

  // Cleanup preview URLs when component unmounts
  React.useEffect(() => {
    return () => {
      previewUrls.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [previewUrls]);

  const handleEvaluate = () => {
    setActiveTab("02");
  };

  return (
    <div className="space-y-2">
      <p className="text-gray-400 text-base mb-4">
        Select any subject and drag and drop student response for evaluation
      </p>

      <div
        key={activeSubject}
        className="bg-[#0A0D1F] p-4 rounded-xl border border-[#407BFF]/20"
      >
        <div className="mb-3">
          <h3 className="text-white font-medium mb-1">Question:</h3>
          <p className="text-gray-400 text-sm">
            {subjects[activeSubject]?.question || "Select a subject"}
          </p>
        </div>

        <div className="mt-4">
          <div
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors min-h-[200px] flex items-center justify-center ${
              dragActive
                ? "border-[#407BFF] bg-[#407BFF]/10"
                : "border-gray-600 hover:border-[#407BFF]"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {previewUrls.length > 0 ? (
              <div className="w-full h-full flex items-center justify-center">
                {previewUrls.map((url, index) => (
                  <div
                    key={index}
                    className="w-full flex justify-center items-center"
                  >
                    <img
                      src={url}
                      alt={`Dropped file ${index + 1}`}
                      className="w-full h-72 object-contain rounded-lg hover:opacity-90 transition-opacity max-w-2xl"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                <Upload className="w-10 h-10 mx-auto text-gray-400" />
                <p className="text-gray-400 text-base">
                  Drag and drop your files here
                </p>
              </div>
            )}
          </div>
          <p className="text-gray-400 text-sm mt-2">
            {selectedFiles.length > 0
              ? `${selectedFiles.length} file(s) selected: ${selectedFiles
                  .map((f) => f.name)
                  .join(", ")}`
              : "no files selected"}
          </p>

          <div className="flex justify-center mt-4">
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedFiles.length > 0
                  ? "bg-[#407BFF] text-white hover:bg-[#407BFF]/90"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
              disabled={selectedFiles.length === 0}
              onClick={() => {
                console.log("Button clicked");
                handleEvaluate();
              }}
            >
              Evaluate
            </button>
          </div>

          {/* Only show example images if no files are uploaded */}
          {selectedFiles.length === 0 && (
            <div className="flex justify-center gap-4 mt-4">
              <img
                src={demoImages[activeSubject]}
                alt={`${subjects[activeSubject]?.title} demo solution`}
                className="w-48 h-48 object-contain opacity-100 hover:opacity-90 transition-opacity cursor-pointer brightness-110"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

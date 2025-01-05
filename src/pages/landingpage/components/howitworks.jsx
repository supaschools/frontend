import React, { useState, useEffect } from "react";
import StepTabs from "./howitworks/StepTabs";
import SubjectTabs from "./howitworks/SubjectTabs";
import DemoContent from "./howitworks/DemoContent";
import SectionTitle from "./howitworks/SectionTitle";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("01");
  const [activeSubject, setActiveSubject] = useState("maths");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [hasScanned, setHasScanned] = useState(false);

  // Add debugging to track state changes
  useEffect(() => {
    console.log("State updated:", {
      activeTab,
      uploadedImages,
      hasScanned,
    });
  }, [activeTab, uploadedImages, hasScanned]);

  const handleSubjectChange = (subject) => {
    // Only reset state when changing subjects
    if (subject !== activeSubject) {
      console.log("Changing subject to:", subject);
      setActiveSubject(subject);
      setActiveTab("01");
      setUploadedImages([]);
      setHasScanned(false);
    }
  };

  return (
    <section className="relative bg-[#000207] py-32">
      <SectionTitle />

      <div className="max-w-full mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row gap-16 relative">
          <div className="md:w-64 relative">
            <StepTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              uploadedImages={uploadedImages}
              hasScanned={hasScanned}
            />
          </div>

          <div className="flex-1 pointer-events-auto relative z-10">
            <div className="sticky top-[88px] z-20 pb-4">
              <div className="flex justify-end">
                <div className="max-w-[800px] w-full">
                  <SubjectTabs
                    activeSubject={activeSubject}
                    handleSubjectChange={handleSubjectChange}
                  />
                </div>
              </div>
            </div>

            <div className="relative flex justify-end mt-6">
              <div className="animate-fadeIn max-w-[800px] w-full">
                <DemoContent
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  activeSubject={activeSubject}
                  uploadedImages={uploadedImages}
                  setUploadedImages={setUploadedImages}
                  hasScanned={hasScanned}
                  setHasScanned={setHasScanned}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-[#407BFF] opacity-[0.07] blur-[120px] transform -translate-x-1/2 -translate-y-1/2 z-0" />
    </section>
  );
}

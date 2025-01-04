import React, { useState, useEffect } from "react";
import StepTabs from "./howitworks/StepTabs";
import SubjectTabs from "./howitworks/SubjectTabs";
import DemoContent from "./howitworks/DemoContent";
import SectionTitle from "./howitworks/SectionTitle";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("01");
  const [activeSubject, setActiveSubject] = useState("maths");
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const stepElements = document.querySelectorAll("[data-step]");
    stepElements.forEach((el, index) => {
      observer.observe(el);
      // Add staggered delay to each element
      el.style.transitionDelay = `${index * 200}ms`;
    });

    return () => observer.disconnect();
  }, []);

  const handleSubjectChange = (subject) => {
    console.log("Changing subject to:", subject);
    setActiveSubject(subject);
  };

  return (
    <section className="relative bg-[#000207] py-32">
      <SectionTitle />

      <div className="max-w-full mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:sticky md:top-0 md:h-fit pl-0 md:w-64">
            <div className="sticky top-[88px]">
              <StepTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
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

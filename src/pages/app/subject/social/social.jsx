import React, { useState } from "react";
import Navbar from "../../components/navbar";
import AssessmentCard from "../../../../ui/assessmentCard";
import { Button } from "../../../../ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SocialPage = () => {
  const [activeTab, setActiveTab] = useState("notCompleted");
  const navigate = useNavigate();

  // Sample assessment data
  const assessments = [
    {
      id: 1,
      title: "Social Studies Quiz 1",
      isCompleted: true,
    },
    {
      id: 2,
      title: "History Assessment",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Geography Test",
      isCompleted: true,
    },
    {
      id: 4,
      title: "World History Final",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Civics and Government",
      isCompleted: true,
    },
    {
      id: 6,
      title: "Economics Basics",
      isCompleted: false,
    },
    {
      id: 7,
      title: "Cultural Studies Assessment",
      isCompleted: true,
    },
    {
      id: 8,
      title: "Political Science Quiz",
      isCompleted: false,
    },
    {
      id: 9,
      title: "Ancient Civilizations Test",
      isCompleted: false,
    },
    {
      id: 10,
      title: "Modern World History",
      isCompleted: true,
    },
  ];

  const filteredAssessments = assessments.filter((assessment) => {
    switch (activeTab) {
      case "completed":
        return assessment.isCompleted;
      case "notCompleted":
        return !assessment.isCompleted;
      default:
        return true;
    }
  });

  const handleBackClick = () => {
    const currentPath = window.location.pathname;
    const parentPath = currentPath.substring(0, currentPath.lastIndexOf("/"));
    navigate(parentPath);
  };

  return (
    <>
      <Navbar mode="normal" />
      <div className="container mx-auto p-4 mt-20">
        <div className="flex items-center mb-6">
          <Button
            onClick={handleBackClick}
            variant="light"
            className="rounded-full h-14 w-14"
          >
            <ChevronLeft className="h-14 w-14 font-bold stroke-2" />
          </Button>
          <h1 className="text-2xl font-bold text-center flex-1 mr-12">
            Social Science
          </h1>
        </div>

        <div className="flex gap-4 mb-6">
          <Button
            onClick={() => setActiveTab("notCompleted")}
            variant={activeTab === "notCompleted" ? "solid" : "light"}
          >
            Not Completed
          </Button>
          <Button
            onClick={() => setActiveTab("completed")}
            variant={activeTab === "completed" ? "solid" : "light"}
          >
            Completed
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredAssessments.map((assessment) => (
            <AssessmentCard
              key={assessment.id}
              assessmentId={assessment.id}
              title={assessment.title}
              isCompleted={assessment.isCompleted}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialPage;

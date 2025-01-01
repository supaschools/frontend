import React, { useState } from "react";
import Navbar from "../../components/navbar";
import AssessmentCard from "../../../../ui/assessmentCard";
import { Button } from "../../../../ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SocialPage = () => {
  const [activeTab, setActiveTab] = useState("notStarted");
  const navigate = useNavigate();

  // Sample assessment data
  const assessments = [
    {
      id: 1,
      title: "Social Studies Quiz 1",
      isCompleted: true,
      isStarted: true,
    },
    {
      id: 2,
      title: "History Assessment",
      isCompleted: false,
      isStarted: false,
    },
    {
      id: 3,
      title: "Geography Test",
      isCompleted: true,
      isStarted: false,
    },
    {
      id: 4,
      title: "World History Final",
      isCompleted: false,
      isStarted: true,
    },
    {
      id: 5,
      title: "Civics and Government",
      isCompleted: true,
      isStarted: true,
    },
    {
      id: 6,
      title: "Economics Basics",
      isCompleted: false,
      isStarted: false,
    },
    {
      id: 7,
      title: "Cultural Studies Assessment",
      isCompleted: true,
      isStarted: true,
    },
    {
      id: 8,
      title: "Political Science Quiz",
      isCompleted: false,
      isStarted: true,
    },
    {
      id: 9,
      title: "Ancient Civilizations Test",
      isCompleted: false,
      isStarted: false,
    },
    {
      id: 10,
      title: "Modern World History",
      isCompleted: true,
      isStarted: true,
    },
  ];

  const filteredAssessments = assessments.filter((assessment) => {
    switch (activeTab) {
      case "completed":
        return assessment.isCompleted && assessment.isStarted;
      case "pending":
        return !assessment.isCompleted && assessment.isStarted;
      case "notStarted":
        return !assessment.isStarted;
      default:
        return true;
    }
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-20">
        <div className="flex items-center mb-6">
          <Button
            onClick={() => navigate(-1)}
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
            onClick={() => setActiveTab("notStarted")}
            variant={activeTab === "notStarted" ? "solid" : "light"}
          >
            Not Started
          </Button>
          <Button
            onClick={() => setActiveTab("pending")}
            variant={activeTab === "pending" ? "solid" : "light"}
          >
            In Progress
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
              isStarted={assessment.isStarted}
              isCompleted={assessment.isCompleted}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialPage;

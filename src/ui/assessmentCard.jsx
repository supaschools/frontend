import React from "react";
import styles from "./css_modules/quizcard.module.css";
import { Link } from "react-router-dom";
import { Button } from "./button";

function AssessmentCard({ assessmentId, title, isStarted, isCompleted }) {
  const getButtonText = () => {
    if (!isStarted) return "Start";
    if (!isCompleted) return "Continue";
    return "Review";
  };

  return (
    <div
      className={`${styles.card} bg-white rounded-lg flex justify-between items-center`}
    >
      <div
        className={`${styles.text} text-lg font-medium text-gray-800 px-8 py-5`}
      >
        {title}
      </div>
      <div className="pr-4">
        <Button asChild variant="light" size="sm">
          <Link to={`${window.location.pathname}/${assessmentId}`}>
            {getButtonText()}
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default AssessmentCard;

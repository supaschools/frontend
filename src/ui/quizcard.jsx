import React from "react";
import styles from "./css_modules/quizcard.module.css"; // Import the CSS module
import { Link } from "react-router-dom";
import { buttonVariants } from "./button";

function Card({ quiz }) {
  return (
    <div
      className={`${styles.card} bg-white rounded-lg flex justify-between items-center`}
    >
      <div
        className={`${styles.text} text-lg font-medium text-gray-800 px-8 py-5`}
      >
        {quiz.title}
      </div>
      <div>
        <Link
          to={quiz.active ? `${window.location.pathname}/${quiz.link}` : "#"}
          className={buttonVariants({
            variant: "light",
            size: "sm",
          })}
          onClick={(e) => !quiz.active && e.preventDefault()}
          style={{
            cursor: quiz.active ? "pointer" : "not-allowed",
            opacity: quiz.active ? 1 : 0.5,
          }}
        >
          <div className="text-xs font-semibold text-blue-600 p-2">
            {quiz.active ? "Practice" : "Coming Soon"}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;

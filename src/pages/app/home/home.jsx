import React from "react";
import Card from "../../../ui/quizcard";
import Navbar from "../components/navbar";

const Home = () => {
  const quizzes = [
    { title: "Social Science", id: 1, active: true, link: "social" },
    { title: "English", id: 2, active: false, link: "english" },
    { title: "Science", id: 3, active: false, link: "science" },
    { title: "Mathematics", id: 4, active: false, link: "maths" },
  ];

  return (
    <>
      <Navbar mode="normal" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mt-14 sm:mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

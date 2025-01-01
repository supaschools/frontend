import React from "react";
import {
  Search,
  BookOpen,
  UserSquare2,
  BookOpenCheck,
  GraduationCap,
  LineChart,
  Users,
  MessageCircle,
  BarChart3,
} from "lucide-react";

import { Space } from "lucide-react";
import { Button } from "../../../ui/button";

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-[#000207] py-60">
      <div className="relative px-6 lg:px-20 flex flex-col lg:flex-row-reverse items-start mb-60">
        <div className="lg:w-1/2 lg:pl-10">
          <div className="inline-block mb-8 px-4 py-1 rounded-full bg-[#407BFF]/10 text-[#407BFF]">
            PERSONALIZATION WAS TOUGH, NOT ANYMORE
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white mb-12">
            Understand Your Students Better and Personalize
          </h1>

          <div className="space-y-12">
            <div className="flex items-start gap-4">
              <span className="p-2 rounded-lg bg-[#4285f4]/10">
                <LineChart size={24} className="text-[#4285f4]" />
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Actionable Feedback
                </h3>
                <p className="text-gray-400 text-xl sm:text-xl">
                  Provide students with continuous, insightful feedback to help
                  them identify and work on areas of improvement effectively.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="p-2 rounded-lg bg-[#4285f4]/10">
                <BookOpenCheck size={24} className="text-[#4285f4]" />
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Personalized Learning Resources
                </h3>
                <p className="text-gray-400 text-xl sm:text-xl">
                  Unlock personalized materials and exercises designed to match
                  each student's unique needs and pace of learning.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="p-2 rounded-lg bg-[#4285f4]/10">
                <UserSquare2 size={24} className="text-[#4285f4]" />
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  On-Demand Virtual Assistance
                </h3>
                <p className="text-gray-400 text-xl sm:text-xl">
                  Support students at home with a virtual teacher available
                  anytime to guide, explain, and answer questions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 lg:pr-20 mt-16 lg:mt-0 relative">
          <div className="absolute top-1/2 left-[20%] w-[500px] h-[500px] rounded-full bg-[#407BFF] opacity-[0.15] blur-[80px] transform -translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative">
            <h2 className="text-4xl sm:text-4xl font-bold text-white mb-6">
              Most of Student data
              <br />
              Remains Untapped
            </h2>
            <p className="text-xl sm:text-xl text-gray-400 mb-8 leading-relaxed">
              Homework solutions, quiz answers, and exam responses contain
              valuable insights into students' understanding and learning gaps
            </p>
            <Button className="inline-flex items-center">
              See How
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative px-6 lg:px-20 flex flex-col lg:flex-row items-start">
        <div className="lg:w-1/2 lg:pr-10">
          <div className="inline-block mb-8 px-4 py-1 rounded-full bg-[#407BFF]/10 text-[#407BFF]">
            REDUCE TEACHER WORKLOAD WITH AI
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white mb-12">
            Automate Tasks and Focus on What Matters Most
          </h1>

          <div className="space-y-12">
            <div className="flex items-start gap-4">
              <span className="p-2 rounded-lg bg-[#4285f4]/10">
                <BookOpen size={24} className="text-[#4285f4]" />
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  AI-Powered Lesson Planning
                </h3>
                <p className="text-gray-400 text-xl sm:text-xl">
                  Generate customized lesson plans and teaching materials in
                  minutes, saving hours of preparation time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="p-2 rounded-lg bg-[#4285f4]/10">
                <GraduationCap size={24} className="text-[#4285f4]" />
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Automated Grading Assistant
                </h3>
                <p className="text-gray-400 text-xl sm:text-xl">
                  Quick and consistent grading of assignments and exams with AI,
                  providing detailed feedback automatically.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="p-2 rounded-lg bg-[#4285f4]/10">
                <Search size={24} className="text-[#4285f4]" />
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Instant Progress Insights
                </h3>
                <p className="text-gray-400 text-xl sm:text-xl">
                  Real-time analysis of student performance to identify learning
                  gaps and adjust teaching strategies accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-20 mt-16 lg:mt-0 relative">
          <div className="absolute top-1/2 left-[20%] w-[500px] h-[500px] rounded-full bg-[#407BFF] opacity-[0.15] blur-[80px] transform -translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative">
            <h2 className="text-4xl sm:text-4xl font-bold text-white mb-6">
              <span className="text-[#407BFF] text-8xl">30%</span>
              <br />
              of teaching tasks
              <br />
              can be automated
            </h2>
            <p className="text-xl sm:text-xl text-gray-400 mb-8 leading-relaxed">
              Let AI handle routine tasks like grading and lesson planning,
              giving you more time to focus on meaningful student interactions
            </p>
            <Button className="inline-flex items-center">
              See How
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative px-6 lg:px-20 flex flex-col lg:flex-row-reverse items-start mt-60">
        <div className="lg:w-1/2 lg:pl-10">
          <div className="inline-block mb-8 px-4 py-1 rounded-full bg-[#407BFF]/10 text-[#407BFF]">
            BRINGING EVERYONE ON THE SAME PAGE
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white mb-12">
            More Transparent Than Ever
          </h1>

          <div className="space-y-12">
            <div className="flex items-start gap-4">
              <span className="p-2 rounded-lg bg-[#4285f4]/10">
                <Users size={24} className="text-[#4285f4]" />
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Informed Parent-Teacher Meetings
                </h3>
                <p className="text-gray-400 text-xl sm:text-xl">
                  Parents come prepared with detailed progress insights, making
                  PTMs more productive and focused on improvement strategies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="p-2 rounded-lg bg-[#4285f4]/10">
                <MessageCircle size={24} className="text-[#4285f4]" />
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Regular Parent Updates
                </h3>
                <p className="text-gray-400 text-xl sm:text-xl">
                  Keep parents in the loop with automated progress reports and
                  real-time updates on their child's learning journey.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="p-2 rounded-lg bg-[#4285f4]/10">
                <BarChart3 size={24} className="text-[#4285f4]" />
              </span>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Administrative Oversight
                </h3>
                <p className="text-gray-400 text-xl sm:text-xl">
                  School administrators can monitor teaching effectiveness and
                  student progress through comprehensive analytics dashboards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 lg:pr-20 mt-16 lg:mt-0 relative">
          <div className="absolute top-1/2 left-[20%] w-[500px] h-[500px] rounded-full bg-[#407BFF] opacity-[0.15] blur-[80px] transform -translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative">
            <h2 className="text-4xl sm:text-4xl font-bold text-white mb-6">
              Parent-School
              <br />
              Communication Gap
            </h2>
            <p className="text-xl sm:text-xl text-gray-400 mb-8 leading-relaxed">
              Bridge the communication gap between teachers, parents, and
              administrators with real-time insights and regular updates
            </p>
            <Button className="inline-flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import React, { useState } from "react";
import { Button } from "../../ui/button";
import Navbar from "../landingpage/components/navbar";
import { BookOpen, Upload, Bot, LineChart } from "lucide-react";

const Demo = () => {
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeSubject, setActiveSubject] = useState("maths");

  const subjects = {
    maths: {
      title: "Mathematics",
      question: "Solve the quadratic equation: x² + 5x + 6 = 0",
      icon: (
        <LineChart
          size={24}
          className={`${
            activeSubject === "maths" ? "text-white" : "text-[#4285f4]"
          }`}
        />
      ),
    },
    science: {
      title: "Science",
      question:
        "Explain the process of photosynthesis and its importance in the ecosystem.",
      icon: (
        <Bot
          size={24}
          className={`${
            activeSubject === "science" ? "text-white" : "text-[#4285f4]"
          }`}
        />
      ),
    },
    english: {
      title: "English",
      question:
        "Analyze the theme and literary devices used in the given poem excerpt.",
      icon: (
        <BookOpen
          size={24}
          className={`${
            activeSubject === "english" ? "text-white" : "text-[#4285f4]"
          }`}
        />
      ),
    },
    social: {
      title: "Social Science",
      question: "Explain the causes and effects of the Industrial Revolution.",
      icon: (
        <Upload
          size={24}
          className={`${
            activeSubject === "social" ? "text-white" : "text-[#4285f4]"
          }`}
        />
      ),
    },
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!image) return;

    setLoading(true);
    try {
      const response = await fetch("/api/gemini", {
        // You'll need to create this endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: image,
          question: subjects[activeSubject].question,
        }),
      });

      const data = await response.json();
      setResponse(data.response);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error processing request");
    }
    setLoading(false);
  };

  return (
    <section className="relative bg-[#000207] min-h-screen">
      <Navbar mode="demo" />

      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#407BFF] opacity-[0.15] blur-[80px]" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#407BFF] opacity-[0.15] blur-[80px]" />

      <div className="container mx-auto px-6 lg:px-20 py-20">
        <div className="text-center mb-12">
          <div className="inline-block mb-8 px-4 py-1 rounded-full bg-[#407BFF]/10 text-[#407BFF]">
            AI ASSIGNMENT EVALUATOR
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white mb-6">
            Get Instant Feedback on Your Work
          </h1>
        </div>

        {/* Subject Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(subjects).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveSubject(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 
                ${
                  activeSubject === key
                    ? "bg-[#407BFF] text-white"
                    : "bg-[#407BFF]/10 text-[#407BFF] hover:bg-[#407BFF]/20"
                }`}
            >
              {value.icon}
              {value.title}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-[#0A0D1F] p-8 rounded-xl border border-[#407BFF]/20 hover:border-[#407BFF]/60 transition-colors">
            <h2 className="text-xl font-semibold text-white mb-4">Question:</h2>
            <p className="text-gray-400 text-lg">
              {subjects[activeSubject].question}
            </p>
          </div>
          <div className="bg-[#0A0D1F] p-8 rounded-xl border border-[#407BFF]/20 hover:border-[#407BFF]/60 transition-colors">
            <label className="block text-xl font-semibold text-white mb-4">
              Upload Your Solution
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="text-gray-400 w-full
                file:mr-4 file:py-2 file:px-4 
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-[#407BFF] file:text-white
                hover:file:bg-[#407BFF]/90
                file:transition-colors"
            />
          </div>

          {image && (
            <div className="bg-[#0A0D1F] p-8 rounded-xl border border-[#407BFF]/20 hover:border-[#407BFF]/60 transition-colors">
              <img
                src={image}
                alt="Uploaded solution"
                className="max-w-full rounded-lg mb-6"
              />
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300
                  ${
                    loading
                      ? "bg-gray-600 text-gray-300"
                      : "bg-[#407BFF] text-white hover:bg-[#407BFF]/90"
                  }`}
              >
                {loading ? "Processing..." : "Check Solution"}
              </button>
            </div>
          )}

          {response && (
            <div className="bg-[#0A0D1F] p-8 rounded-xl border border-[#407BFF]/20 hover:border-[#407BFF]/60 transition-colors">
              <h2 className="text-xl font-semibold text-white mb-4">
                AI Feedback:
              </h2>
              <p className="text-gray-400 text-lg">{response}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Demo;

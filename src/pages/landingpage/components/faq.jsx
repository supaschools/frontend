import React, { useState } from "react";
import { Plus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What about data privacy and security?",
      answer:
        "We understand the sensitive nature of this information and have implemented robust measures to protect it. Our approach is unique: Pi learns like a teacher, not an AI, which means we never train on your data. Your information remains exclusively yours and stays within your school, allowing you to use Pi just as you would any other assessment submission platform. We also ensure that no unsecured third-party access is allowed. All your uploaded assessments are stored securely on Australian servers, encrypted in transit, and access is audited. For more details, please refer to our Legal pages.",
    },
    {
      question: "How much time does it take for teacher to learn?",
      answer: "Your answer here about learning time",
    },
    {
      question: "Can I trust the accuracy of Pi's grading?",
      answer: "Your answer here about grading accuracy",
    },
    {
      question: "Can Pi be used in any subject or year level?",
      answer: "Your answer here about subject compatibility",
    },

    {
      question: "How can I get started?",
      answer: "Your answer here about onboarding process",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#000207] py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#407BFF]/10 text-[#407BFF]">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Got Questions?
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Faster purchasing might seem like magic; let's get to brass tacks.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full p-6 flex items-center justify-between text-left text-white hover:bg-gray-900/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-medium">{faq.question}</span>
                <Plus
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  } text-[#407BFF]`}
                />
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-400">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { FaPaperclip, FaMicrophone, FaPaperPlane } from "react-icons/fa";

const chatMessages = [
  {
    sender: "student",
    message: "Can you help me understand the quadratic formula?",
  },
  {
    sender: "ai",
    message: [
      "The quadratic formula is used to find the roots of a quadratic equation: ",
      { type: "math", content: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}" },
    ],
  },
  {
    sender: "student",
    message:
      "That makes more sense! Can you show me an example with real numbers?",
  },
  {
    sender: "ai",
    message: [
      "Let's solve ",
      { type: "math", content: "x^2 + 2x - 15 = 0" },
      "\nUsing ",
      { type: "math", content: "a=1, b=2, c=-15" },
      ":\n",
      { type: "math", content: "\\frac{-2 \\pm \\sqrt{4 - 4(1)(-15)}}{2(1)}" },
      "\n",
      { type: "math", content: "= \\frac{-2 \\pm \\sqrt{4 + 60}}{2}" },
      "\n",
      { type: "math", content: "= \\frac{-2 \\pm \\sqrt{64}}{2}" },
      "\n",
      { type: "math", content: "= \\frac{-2 \\pm 8}{2}" },
      "\n",
      { type: "math", content: "x = 3 \\text{ or } x = -5" },
    ],
  },
];

export default function VirtualAssistant({ activeSubject }) {
  const renderMessage = (content) => {
    if (typeof content === "string") {
      return content;
    }
    if (Array.isArray(content)) {
      return content.map((item, i) => (
        <React.Fragment key={i}>
          {item.type === "math" ? <InlineMath math={item.content} /> : item}
        </React.Fragment>
      ));
    }
    return content;
  };

  const [userMessage, setUserMessage] = React.useState("");

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      // Logic to handle sending the message (e.g., updating chatMessages)
      setUserMessage(""); // Clear input after sending
    }
  };

  return (
    <div className="bg-[#0A0D1F] rounded-xl p-6">
      <h2 className="text-white text-xl font-semibold mb-6">
        Vinci: Your Friendly Study Companion
      </h2>
      <div className="space-y-4">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "student" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] rounded-xl p-4 mb-2 ${
                msg.sender === "student"
                  ? "bg-[#407BFF] text-white"
                  : "bg-[#1C1F35] text-gray-200"
              }`}
            >
              <p className="whitespace-pre-line break-words leading-8">
                {renderMessage(msg.message)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center border rounded-lg p-2 bg-white">
        <FaPaperclip className="text-gray-500 cursor-pointer" />
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Message Vinci"
          className="flex-grow p-2 outline-none"
        />
        <FaMicrophone className="text-gray-500 cursor-pointer" />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-blue-500 text-white p-2 rounded-lg flex items-center"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}

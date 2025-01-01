import React, { useState } from "react";
import { Button } from "./button";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("Pending");

  return (
    <div className="flex justify-center items-center space-x-10 py-4 bg-gray-50 border-b-2 border-gray-200 sticky top-0 z-50">
      <Button
        variant={activeTab === "Pending" ? "withoutShadow" : "light"}
        onClick={() => setActiveTab("Pending")}
        size="sm"
      >
        <div className="text-xs">Pending</div>
      </Button>
      <Button
        variant={activeTab === "Completed" ? "withoutShadow" : "light"}
        onClick={() => setActiveTab("Completed")}
        size="sm"
      >
        <div className="text-xs">Completed</div>
      </Button>
    </div>
  );
};

export default TabComponent;

import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="h-full transition-all duration-300 ease-in-out"
        style={{
          width: `${progress}%`,
          backgroundColor: "#5AA8D6",
        }}
      />
    </div>
  );
};

export default ProgressBar;

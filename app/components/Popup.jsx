"use client";

import { useEffect, useState } from "react";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check local storage for "hidePopup" preference
    const hidePopup = localStorage.getItem("hidePopup");
    if (!hidePopup) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDontShowAgain = () => {
    localStorage.setItem("hidePopup", "true");
    setShowPopup(false);
  };

  if (!showPopup) return null; // Don't render the popup if it shouldn't show

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg dark:shadow-gray-900/50 text-center max-w-sm font-lateef font-normal text-foreground">
        <h2 className="mb-4 text-2xl">hey there, thx for visiting my blog!</h2>
        <p className="mb-4 text-xl">
          the website's migrating from myexpositions.com, so it's still a bit
          messy.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleClosePopup}
            className="px-4 py-2 bg-underlineBlue text-white rounded text-xl"
          >
            close
          </button>
          <button
            onClick={handleDontShowAgain}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-gray-200 rounded text-xl"
          >
            don't show again
          </button>
        </div>
      </div>
    </div>
  );
}

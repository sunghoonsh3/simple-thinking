import { useState } from "react";

export default function RejectionTips({ className = "" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const tips = [
    {
      category: "Application Strategy",
      items: [
        "Target quality over quantity - research companies thoroughly before applying",
        "Customize your resume and cover letter for each position",
        "Follow up professionally but don't be pushy",
      ],
    },
    {
      category: "Interview Preparation",
      items: [
        "Practice the STAR method for behavioral questions",
        "Prepare thoughtful questions about the company and role",
        "Research the interviewer's background when possible",
      ],
    },
    {
      category: "Mindset",
      items: [
        "Each rejection brings you closer to the right opportunity",
        "Ask for feedback when possible - most won't respond, but some will",
        "Keep a rejection journal to track patterns and improve",
      ],
    },
  ];

  return (
    <div className={`${className}`}>
      {/* Arrow and Tips Label */}
      <div
        className="flex items-center space-x-2 cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Curved Arrow */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`text-red-400 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        <span className="text-red-400 font-lateef text-lg group-hover:text-red-500 transition-colors duration-300">
          tips
        </span>
      </div>

      {/* Expandable Tips Content */}
      <div
        className={`
        overflow-hidden transition-all duration-500 ease-out
        ${isExpanded ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}
      `}
      >
        <div className="space-y-6">
          {tips.map((section, index) => (
            <div key={section.category} className="space-y-3">
              <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 uppercase tracking-wide">
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.items.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start space-x-2">
                    <span className="text-neutral-400 dark:text-neutral-500 text-xs mt-1.5">•</span>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

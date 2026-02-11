import { useState, useEffect } from "react";

export default function RejectionItem({
  company,
  position,
  rejectionData,
  onReplyToggle,
  showReply,
  className = "",
}) {
  const [showEmail, setShowEmail] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);

  // Simulate reply notification appearing after email is opened
  useEffect(() => {
    if (showEmail && !hasNotification && !showReply) {
      const timer = setTimeout(() => {
        setHasNotification(true);
      }, 2000); // Notification appears 2 seconds after opening email
      return () => clearTimeout(timer);
    }
  }, [showEmail, hasNotification, showReply]);

  const handleClick = () => {
    if (!showEmail) {
      // First click - open email
      setShowEmail(true);
    } else if (hasNotification && !showReply) {
      // Second click - if notification exists, reveal reply and close email
      setShowEmail(false);
      setHasNotification(false);
      onReplyToggle();
    } else {
      // Close email
      setShowEmail(false);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setShowEmail(false);
  };

  return (
    <div className={`${className}`}>
      {/* Company Label with Notification */}
      <div
        className="cursor-pointer group transition-all duration-300 relative"
        onClick={handleClick}
      >
        <div className="relative">
          <span className="text-neutral-600 dark:text-neutral-400 font-lateef tracking-wide text-xl hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-300">
            {company}
          </span>

          {/* Notification Badge */}
          {hasNotification && (
            <div className="absolute -top-2 -right-6 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          )}

          {/* Subtle underline that appears on hover */}
          <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 transition-all duration-500 ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
        </div>
      </div>

      {/* Email Modal - Positioned to not jump too high */}
      {showEmail && rejectionData && (
        <div className="absolute top-10 left-0 w-96 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl dark:shadow-gray-900/50 transition-all duration-300 ease-out z-50">
          {/* Email Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {company.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {rejectionData.subject}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {rejectionData.sender}
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <svg
                className="w-4 h-4 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Email Body */}
          <div className="p-4 space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {rejectionData.body.map((paragraph, index) => (
              <p key={index}>
                {paragraph.highlight ? (
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {paragraph.text}
                  </span>
                ) : (
                  paragraph.text
                )}
              </p>
            ))}

            <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-400">{rejectionData.signature}</p>
            </div>
          </div>

          {/* Email Footer with notification hint */}
          <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-b-lg border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{rejectionData.timestamp}</span>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded text-xs">
                  Rejection
                </span>
                {hasNotification && (
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs animate-pulse">
                    New Reply Available
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

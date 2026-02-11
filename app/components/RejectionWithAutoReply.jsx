import { useState, useEffect, useRef } from "react";

export default function RejectionWithAutoReply({
  company,
  position,
  rejectionData,
  className = "",
}) {
  const [showEmail, setShowEmail] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [emailJustClosed, setEmailJustClosed] = useState(false);
  const [textWidth, setTextWidth] = useState(0);
  const replyRef = useRef(null);
  const textRef = useRef(null);
  const emailRef = useRef(null);

  // Measure text width on component mount
  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, []);

  // Handle click outside email to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showEmail &&
        emailRef.current &&
        !emailRef.current.contains(event.target)
      ) {
        setShowEmail(false);
        setEmailJustClosed(true);
      }
    };

    if (showEmail) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showEmail]);

  // Show reply when email is closed (after being opened)
  useEffect(() => {
    if (emailJustClosed && !showEmail && !showReply) {
      const timer = setTimeout(() => {
        setShowReply(true);
        setEmailJustClosed(false); // Reset the trigger
        // Scroll to reply after it appears
        setTimeout(() => {
          if (replyRef.current) {
            replyRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 300);
      }, 1000); // Reply appears 1 second after closing email
      return () => clearTimeout(timer);
    }
  }, [emailJustClosed, showEmail, showReply]);

  const handleClick = () => {
    if (!showEmail) {
      setShowEmail(true);
    } else {
      setShowEmail(false);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setShowEmail(false);
    setEmailJustClosed(true); // Trigger the reply to appear
  };

  const handleCloseReply = (e) => {
    e.stopPropagation();
    setShowReply(false);
    // Don't reset emailJustClosed here - let the useEffect handle it
  };

  // Get company-specific tips from your experience
  const getTipsContent = (companyName) => {
    const tips = {
      LeapYear: {
        subject: "re: build with people who share your obsession",
        body: [
          "The process starts with an application, followed by a call with Hank if you're shortlisted.",
          "You can share updates until the deadline. Traction helps.",
          "In the final interview, Hank asked why we cared about our idea, what made us qualified, and how our team worked.",
          "It was hard to read whether he liked us or not.",
          "LeapYear looks for founder-market fit, strong team dynamics, and someone who can sell. Not just build.",
          "Our team split before the decision came out, which probably sealed our fate.",
          "In hindsight, the team matters as much as the idea.",
          "Only apply if you'd bet on your cofounders for at least a year and you're all genuinely excited about the problem.",
        ],
      },

      Telora: {
        subject: "re: choose your co-founder like you're getting married",
        body: [
          "The process starts with an application, followed by a 15-minute call with Eliam if you're shortlisted.",
          "Before applying, try to get an intro through a current fellow. It helps.",
          "In my first call with Eliam (before I had co-founders), he focused entirely on finding a strong partner (go to hackathons, work together first, and test for fit).",
          "It felt nearly impossible to move forward without a co-founder.",
          "Later, I had a second call and met Angie at a dinner event in Miami, this time with co-founders I had recently teamed up with.",
          "Even then, they were hesitant to invest. As Angie put it, 90% of their early portfolio failures came from co-founder issues. She compared it to marriage. You're raising a startup together, so choose carefully.",
          "Eliam also asked about the most technical thing we'd built and how technical we really were.",
          "Make sure you're ready to answer that, and having strong technical depth in your team is a big plus.",
        ],
      },
      "Solo Founders": {
        subject: "re: for founders with paying customers",
        body: [
          "The process begins with an application, followed by a 15-minute call with Julian if you're shortlisted.",
          "He asked why I cared about the problem I was solving, what progress I had made, and why I believed I was the right person to tackle it.",
          "The focus wasn't on technical ability or startup experience. It was on whether the problem was real, urgent, and solvable quickly.",
          "He mentioned one team estimated 2–3 months just to launch an MVP, which he felt completely missed the mark.",
          "It felt like the application already filtered for capability. The interview was about conviction and traction.",
          "With that, this fellowship feels designed for solo founders who already have some momentum, especially those with paying customers and a clear path to growth in SF.",
          "If you're building something people are already paying for, apply — and focus on showing real progress and a bold plan, not just your skills.",
        ],
      },
      YC: {
        subject: "re: conviction over politeness",
        body: [
          "Anish, a friend from KP Fellowship, and I applied with Squire, an app meant to act like Jarvis: sitting on your desktop, listening to conversations, and automating repetitive work.",
          "I was not fully convinced. Anish had been working on it alone, and I joined late.",
          "The interview process is simple. You can do it online, but we chose to do it in person and I flew to San Francisco.",
          "The interview lasts about 30 minutes. If you get a call later that day, you are in. If you get an email, you are out.",
          "There is no shortage of YC advice, but one thing stood out.",
          "You need extreme conviction. People who got in said you have to sound so confident it almost feels arrogant, especially as a student.",
          "You do not have a long track record, so confidence becomes the signal.",
          "We lacked that level of conviction and presence, and it showed.",
        ],
      },

      "Dorm Room Fund": {
        subject: "re: connect with your student interviewers",
        body: [
          "You submit an application and are interviewed by the student team.",
          "I made it to the second round. After that, there is a final-day selection for admitted fellows.",
          "I did not reach that stage, so I cannot speak to it.",
          "Since students run the process, it felt less structured and the selection criteria were not always clear.",
          "I did not ask for feedback, but I wish I had applied earlier so I could have tried again.",
          "It is a strong program and one I would have enjoyed.",
          "My advice is to learn what your interviewers care about and shape the conversation around their interests.",
        ],
      },

      NEA: {
        subject: "re: finance background helps more than technical",
        body: [
          "The process has multiple rounds, but I only reached the first, an interview with a partner.",
          "She asked about my career goals and the types of startups I was interested in, typical VC questions.",
          "I did not advance, but she gave me her phone number and said she stays in touch with everyone at this stage.",
          "I wish I had made it further. Past fellows say NEA gives one of the best inside looks at venture capital.",
          "My impression was that they favored candidates with finance backgrounds over purely technical ones.",
          "If you apply, strengthen your finance knowledge and have evidence to show it.",
          "I still stay in touch with the interviewer and have referred deals to her. One is currently being explored, which has been fascinating to watch.",
        ],
      },

      PearVC: {
        subject: "re: strong ecosystem and stable Wi-Fi required",
        body: [
          "The process starts with a call with one of the VCs who runs the fellowship.",
          "It was clear they value people embedded in strong startup ecosystems, since fellows are used heavily for sourcing.",
          "I spoke briefly with Khalil. My Wi-Fi was unstable, so the call was audio-only and felt rushed.",
          "I would recommend applying if you attend schools like Harvard, MIT, CMU, or Berkeley.",
          "And make sure your internet works.",
        ],
      },
    };
    return tips[companyName] || tips["LeapYear"];
  };

  const tipsContent = getTipsContent(company);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Company Label */}
      <div
        className="cursor-pointer group transition-all duration-300 relative"
        onClick={handleClick}
      >
        <div className="relative">
          <span
            ref={textRef}
            className="text-neutral-600 dark:text-neutral-400 font-lateef tracking-wide text-xl hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-300"
          >
            {company}
          </span>

          {/* Subtle underline that appears on hover - limited to text width */}
          <div
            className="absolute bottom-0 left-0 h-px group-hover:scale-x-100 scale-x-0 transition-transform duration-500 ease-out origin-left"
            style={{
              backgroundColor: "#5AA8D6",
              width: `${textWidth}px`,
            }}
          />
        </div>
      </div>

      {/* Email Modal */}
      {showEmail && (
        <div ref={emailRef} className="relative w-full max-w-md">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl dark:shadow-gray-900/50 transition-all duration-300 ease-out">
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
              {/* Close button */}
              <button
                onClick={handleClose}
                className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 relative group"
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

                {/* Tooltip hint */}
                <div className="absolute top-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 whitespace-nowrap bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                    close to see my tips
                  </span>
                </div>
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
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {rejectionData.signature}
                </p>
              </div>
            </div>

            {/* Email Footer */}
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-b-lg border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{rejectionData.timestamp}</span>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded text-xs">
                    Rejection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reply appears after closing email */}
      {showReply && (
        <div
          ref={replyRef}
          className="transition-all duration-700 ease-out"
          style={{
            opacity: showReply ? 1 : 0,
            transform: showReply ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          {/* Thread connector */}
          <div className="flex items-center space-x-3 mb-4 text-gray-400 dark:text-gray-500">
            <div className="w-8 h-px bg-gray-200 dark:bg-gray-700"></div>
            <span className="text-xs italic">my tips</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
          </div>

          {/* Your tips/reflection */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
            {/* Tips header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border dark:border-gray-700">
                  <img src="/favicon.ico" alt="favicon" className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg text-gray-900 dark:text-gray-100 font-lateef">
                    {tipsContent.subject}
                  </div>
                  {/* <div className="text-xs text-gray-500">my reflection</div> */}
                </div>
              </div>

              {/* Close button for reply */}
              <button
                onClick={handleCloseReply}
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

            {/* Tips body */}
            <div className="p-4 space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {tipsContent.body.map((tip, index) => (
                <p key={index}>{tip}</p>
              ))}
            </div>

            {/* Tips footer */}
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-b-lg border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                {/* <span>reflection</span>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    lessons learned
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

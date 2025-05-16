import { useEffect, useRef } from "react";

export default function ReplyItem({ company, show, className = "" }) {
  const replyRef = useRef(null);

  // Scroll reply into view when it appears
  useEffect(() => {
    if (show && replyRef.current) {
      setTimeout(() => {
        replyRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [show]);

  // Get company-specific tips/encouragement
  const getReplyContent = (companyName) => {
    const replies = {
      LeapYear: {
        subject: "Re: Tips",
        author: "A fellow founder",
        email: "someone.who.cares@example.com",
        body: [
          "I saw your email thread and wanted to reach out. I've been there too - got rejected by LeapYear in their early days.",
          "What I learned: they were looking for a very specific technical profile. Your background is strong, but sometimes timing just isn't right.",
          "Keep building. I ended up creating something better than what I was initially rejected for. That 'no' was redirecting me toward my actual path.",
          "Your persistence shows character. That matters more than people think.",
        ],
        signature: "Keep going,\nSomeone who's walked this path",
      },
      Telora: {
        subject: "Re: Tips",
        author: "Former Telora engineer",
        email: "former.engineer@example.com",
        body: [
          "I was part of the engineering team when you interviewed. The decision wasn't about your skills - you impressed everyone technically.",
          "Internal politics played a role. They ended up hiring someone's referral, which happens more often than companies admit.",
          "Your technical assessment was in the top 10%. Save it as a portfolio piece - it shows your thought process beautifully.",
          "Companies like Telora will always exist. Focus on finding teams that value what you bring, not just who you know.",
        ],
        signature: "Rooting for you,\nAn insider who's been there",
      },
      "Solo Founders": {
        subject: "Re: Tips",
        author: "SF Fellow, Cohort 3",
        email: "fellow.cohort3@example.com",
        body: [
          "I got rejected twice before getting into Solo Founders. Third time was the charm, but here's what changed:",
          "Show real traction, not just potential. They want to see you've already started building something people want.",
          "Your application showed promise, but needed more evidence of initial validation. User testimonials, early revenue, or significant engagement.",
          "The fellowship is great, but it's not the only path. Some of the most successful founders I know never needed external validation.",
        ],
        signature: "You've got this,\nSF Fellow, Cohort 3",
      },
    };
    return replies[companyName] || replies["LeapYear"];
  };

  const replyContent = getReplyContent(company);

  if (!show) return null;

  return (
    <div
      ref={replyRef}
      className={`${className} transition-all duration-500 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      {/* Thread connector */}
      <div className="flex items-start space-x-4 mb-3">
        <div className="flex flex-col items-center">
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="w-px h-4 bg-gray-200"></div>
        </div>

        <div className="flex-1">
          {/* Reply header */}
          <div className="text-neutral-600 font-lateef text-lg italic mb-2">
            {replyContent.subject}
          </div>
        </div>
      </div>

      {/* Reply email content */}
      <div className="ml-6 bg-green-50 border border-green-200 rounded-lg shadow-sm">
        {/* Reply header */}
        <div className="flex items-center justify-between p-4 border-b border-green-200 bg-green-100 rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">💌</span>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                {replyContent.subject}
              </div>
              <div className="text-xs text-gray-600">{replyContent.email}</div>
            </div>
          </div>
        </div>

        {/* Reply body */}
        <div className="p-4 space-y-3 text-sm text-gray-700 leading-relaxed">
          <p className="font-medium text-gray-600">
            {replyContent.author} just replied:
          </p>

          {replyContent.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="pt-3 border-t border-green-200">
            <p className="text-xs text-gray-500 whitespace-pre-line">
              {replyContent.signature}
            </p>
          </div>
        </div>

        {/* Reply footer */}
        <div className="px-4 py-3 bg-green-100 rounded-b-lg border-t border-green-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Just now</span>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">
                Encouragement
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

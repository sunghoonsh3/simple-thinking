// rejections-data.js
export const rejectionsData = {
  LeapYear: {
    subject: "LeapYear April 2025 - Application Update",
    // sender: "build@takeleapyear.com",
    applicantName: "Tristan",
    body: [
      {
        text: "We apologize for the slow response. Thank you for applying to LeapYear and for your patience while we have been reviewing applications.",
      },
      {
        text: "We are sorry to say we cannot offer you a place in the April cycle.",
        highlight: true,
      },
      {
        text: "We did really enjoy our interview and amongst all apps, yours was in the top 10%.",
      },
      {
        text: "So, Tristan let me know you guys split up the other week. I was bummed to hear it to be honest but recognize maybe you guys had different interests. I just wanted to let you know that I was really impressed from our interview and BrickBase was one of our top applicants. We really loved the mission to streamline construction documentation and you guys seemed like a great team. We spent a good amount of time discussing BrickBase as a finalist in this LeapYear cycle.",
      },
      {
        text: "We wish you the best of luck on what you build next and if LeapYear ever makes sense for you in the future, we definitely encourage you to apply again to a future batch. We fund new teams every 3 months and we've funded a number of repeat applicants. Keep building!",
      },
      {
        text: "The world needs more builders.",
        highlight: true,
      },
    ],
    signature: "Sincerely,\nHank and the LeapYear Team",
    timestamp: "2:00 AM (18 hours ago)",
  },

  Telora: {
    subject: "Summer 2025 Fellowship Decision",
    // sender: "eliam@hello.jointelora.com",
    applicantName: "Tristan",
    body: [
      {
        text: "Tristan,",
      },
      {
        text: "Thank you for applying to Telora. Unfortunately, your application was not selected for the summer 2025 fellowship.",
        highlight: true,
      },
      {
        text: "Your case is unique because your application was particularly promising. We invited you to interview, but it doesn’t seem like we had a chance to connect. Please let me know what kept you from meeting with me so we can improve our interview process.",
      },
      {
        text: "Applications are now open for fellowships starting in January and June of 2026. If you still want to start a startup, you should definitely apply again.",
      },
      {
        text: "Have a great summer,",
      },
    ],
    signature: "EM",
    timestamp: "Sun, May 18, 7:08 AM",
  },

  "Solo Founders": {
    subject: "Solo Founders Program — Application Outcome",
    // sender: "julian@solofounders.vc",
    applicantName: "Tristan",
    body: [
      {
        text: "Thank you for taking the time to speak with me about the Solo Founders Program.",
      },
      {
        text: "Unfortunately, we are unable to offer you a spot in the first SFP batch.",
        highlight: true,
      },
      {
        text: "The constraints of having only six spots meant making difficult choices. We interviewed less than 5% of applicants, and our final cohort represents less than 1% of all who applied. I'm sure we're missing out on many founders who will build remarkable companies.",
      },
      {
        text: "I'm very impressed by what you've done in the past and think this idea could be really good. I also think that you will potentially discover something else that you want to work on even more than this idea. But I think you should pursue this idea for at least a while longer to really see if it's the one that you want and if it's solving a real problem.",
      },
      {
        text: "Despite not being able to include you in this cohort, we'll soon be launching the Solo Founders Community, which is much larger than 6 participants. We'll keep you updated as we build resources and opportunities for Solo Founders. This program is just the beginning.",
      },
      {
        text: "Being a solo founder means challenging conventional wisdom. We believe solo founders like you will build remarkable companies and change perceptions of what’s possible.",
        highlight: true,
      },
    ],
    signature:
      "Thanks again for sharing what you’re building with me.\n\nJulian",
    timestamp: "Mon, Apr 21, 2:57 PM",
  },
};

export const rejectionsList = [
  { company: "LeapYear", position: "Fellowship" },
  { company: "Telora", position: "Fellowship" },
  { company: "Solo Founders", position: "Fellowship" },
];

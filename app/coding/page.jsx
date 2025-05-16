// import { useState, useEffect } from "react";

// export default function TerminalLanding() {
//   const [currentLineIndex, setCurrentLineIndex] = useState(0);
//   const [currentText, setCurrentText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [completedLines, setCompletedLines] = useState([]);

//   // All terminal lines
//   const lines = [
//     { type: "command", text: "$ whoami" },
//     { type: "output", text: "→ builder of curious, useful things" },
//     { type: "command", text: "$ pwd" },
//     { type: "output", text: "→ /simple/thinking/code" },
//     { type: "command", text: "$ ls" },
//     { type: "output", text: "→ projects  ideas  experiments" },
//     { type: "command", text: "$ cat mission.txt" },
//     {
//       type: "output",
//       text: "→ code, for people — elegant, clear, and real-world",
//     },
//   ];

//   useEffect(() => {
//     if (currentLineIndex < lines.length) {
//       setIsTyping(true);
//       setCurrentText("");

//       const currentLine = lines[currentLineIndex];
//       let charIndex = 0;

//       const typeInterval = setInterval(() => {
//         if (charIndex < currentLine.text.length) {
//           setCurrentText(currentLine.text.slice(0, charIndex + 1));
//           charIndex++;
//         } else {
//           clearInterval(typeInterval);
//           setIsTyping(false);

//           // Move to next line after a pause
//           const nextLineDelay = currentLine.type === "command" ? 600 : 400;
//           setTimeout(() => {
//             setCompletedLines((prev) => [...prev, currentLine]);
//             setCurrentLineIndex((prev) => prev + 1);
//           }, nextLineDelay);
//         }
//       }, 40 + Math.random() * 40); // Vary typing speed slightly

//       return () => clearInterval(typeInterval);
//     }
//   }, [currentLineIndex]);

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-8">
//       <div className="max-w-4xl w-full">
//         <div className="font-mono text-lg space-y-2">
//           {/* Completed lines */}
//           {completedLines.map((line, index) => (
//             <div key={index}>
//               {line.type === "command" ? (
//                 <span className="text-gray-900">{line.text}</span>
//               ) : (
//                 <span className="text-gray-600">{line.text}</span>
//               )}
//             </div>
//           ))}

//           {/* Currently typing line */}
//           {currentLineIndex < lines.length && (
//             <div>
//               {lines[currentLineIndex].type === "command" ? (
//                 <span className="text-gray-900">
//                   {currentText}
//                   {isTyping && <span className="animate-pulse">▊</span>}
//                 </span>
//               ) : (
//                 <span className="text-gray-600">
//                   {currentText}
//                   {isTyping && <span className="animate-pulse">▊</span>}
//                 </span>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

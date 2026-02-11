import Header from "@/app/components/Header";
import ThemeProvider from "@/app/components/ThemeProvider";
import { Lateef, Gowun_Batang } from "next/font/google";
import "./globals.css";

// need to import korean font

// thinking about Nanum Pen Script, Dongle, Hi Melody, Gowun Batang, Gamja Flower, Poor Story, Cute Font

// import lateef font
const lateef = Lateef({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-lateef",
});

const gowunBatang = Gowun_Batang({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gowunBatang",
});

export const metadata = {
  title: "Simple Thinking",
  description: "a blog by tristan sharing simple thoughts and reflections",
  icons: {
    icon: "/favicon.ico",
  },
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lateef.variable} ${gowunBatang.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="transition-colors duration-300">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// lib/books-data.js
// Single source of truth for all book data

/**
 * Book recommendation levels (matching existing UI)
 * - "it's okay" - decent read
 * - "worth a read" - recommended
 * - "highly recommend" - strong recommendation
 * - "read this shit" - life-changing / must-read
 */

// Tier order for sorting (higher = better)
const tierOrder = {
  "read this shit": 4,
  "highly recommend": 3,
  "worth a read": 2,
  "it's okay": 1,
};

// Sort books by tier (best first)
function sortByTier(books) {
  return [...books].sort(
    (a, b) => tierOrder[b.recommendation] - tierOrder[a.recommendation],
  );
}

// All books organized by year
export const booksByYear = {
  2026: sortByTier([
    {
      title: "구의 증명 by 최진영",
      description: "love, greed, and the cost of obsession",
      recommendation: "highly recommend",
      isKorean: true,
    },
  ]),
  2025: sortByTier([
    {
      title: "오늘부터 개발자 by 김병욱",
      description: "a non-major's honest guide to becoming a developer",
      recommendation: "it's okay",
      isKorean: true,
    },
    {
      title: "어떤 생각들은 나의 세계가 된다 by 이충녕",
      description: "everyday philosophy for finding meaning in small moments",
      recommendation: "worth a read",
      isKorean: true,
    },
    {
      title: "실리콘밸리는 무엇을 기획하고 어떻게 개발하는가 by 첸한",
      description: "inside look at how silicon valley builds products",
      recommendation: "it's okay",
      isKorean: true,
    },
    {
      title: "Startup Playbook by Sam Altman",
      description: "concise startup advice",
      recommendation: "worth a read",
      isKorean: false,
    },
    {
      title: "인어 사냥 by 차인표",
      description: "a story about mermaid oil and human greed",
      recommendation: "highly recommend",
      isKorean: true,
    },
    {
      title: "봄 밤의 모든 것 by 백수린",
      description: "delicate stories of loss, memory, and hope",
      recommendation: "highly recommend",
      isKorean: true,
    },
    {
      title: "First Lie Wins by Ashley Elston",
      description: "a con artist thriller full of identity twists",
      recommendation: "highly recommend",
      isKorean: false,
    },
    {
      title: "좋은지 나쁜지 누가 아는가 by 류시화",
      description: "poetic reflections on life's hidden meanings",
      recommendation: "highly recommend",
      isKorean: true,
    },
    {
      title: "Over Lin Alaska by Stradlater",
      description: "indie fiction with atmospheric storytelling",
      recommendation: "worth a read",
      isKorean: false,
    },
    {
      title: "모든 걸음에는 이유가 있다 by 김아영",
      description:
        "a journalist's essay on quitting the race and finding peace",
      recommendation: "it's okay",
      isKorean: true,
    },
    {
      title: "고양이 시리즈 by 베르나르 베르베르",
      description: "civilization seen through the eyes of cats",
      recommendation: "highly recommend",
      isKorean: true,
    },
  ]),
  2024: sortByTier([
    {
      title: "Vegetarian by Han Kang",
      description: "a woman's quiet rebellion against conformity",
      recommendation: "it's okay",
      isKorean: false,
    },
    {
      title: "The Givers by David Callahan",
      description: "how philanthropy shapes american power",
      recommendation: "it's okay",
      isKorean: false,
    },
    {
      title: "Options Trading Simplified for Beginners",
      description: "basics of options trading explained simply",
      recommendation: "it's okay",
      isKorean: false,
    },
    {
      title: "The Man Who Solved the Market by Gregory Zuckerman",
      description: "the story of jim simons and renaissance technologies",
      recommendation: "worth a read",
      isKorean: false,
    },
    {
      title: "You^2",
      description: "quantum leap thinking for exponential growth",
      recommendation: "worth a read",
      isKorean: false,
    },
    {
      title: "The Psychology of Money by Morgan Housel",
      description: "timeless lessons on wealth and behavior",
      recommendation: "worth a read",
      isKorean: false,
    },
    {
      title: "Hooked by Nir Eyal",
      description: "how to build habit-forming products",
      recommendation: "highly recommend",
      isKorean: false,
    },
    {
      title: "You Look Like a Thing and I Love You by Janelle Shane",
      description: "a funny and insightful look at how AI actually works",
      recommendation: "highly recommend",
      isKorean: false,
    },
  ]),
};

// Life-changing books (special category, not tied to a specific year)
export const lifeChangingBooks = [
  {
    title: "Silence by Shusaku Endo",
    description: "faith tested in the face of suffering",
    recommendation: "read this shit",
    isKorean: false,
  },
  {
    title: "The 22 Immutable Laws of Marketing",
    description: "timeless principles of positioning and branding",
    recommendation: "read this shit",
    isKorean: false,
  },
  {
    title: "Think and Grow Rich by Napoleon Hill",
    description: "the original blueprint for success mindset",
    recommendation: "read this shit",
    isKorean: false,
  },
];

// Helper functions for data access

/**
 * Get the most recent year with books
 */
export function getMostRecentYear() {
  const years = getAvailableYears();
  return Math.max(...years);
}

/**
 * Get all available years sorted descending
 */
export function getAvailableYears() {
  return Object.keys(booksByYear)
    .map(Number)
    .sort((a, b) => b - a);
}

/**
 * Get books for a specific year
 */
export function getBooksByYear(year) {
  return booksByYear[year] || [];
}

/**
 * Get all past years (excluding the most recent)
 */
export function getPastYears() {
  const years = getAvailableYears();
  return years.slice(1);
}

/**
 * Get total count of past books (excluding most recent year)
 */
export function getPastBooksCount() {
  const pastYears = getPastYears();
  return pastYears.reduce(
    (total, year) => total + (booksByYear[year]?.length || 0),
    0,
  );
}

/**
 * Get past books grouped by year (excluding most recent year)
 */
export function getPastBooksGroupedByYear() {
  return getPastYears().map((year) => ({
    year,
    books: booksByYear[year] || [],
  }));
}

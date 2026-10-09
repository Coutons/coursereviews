export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  gradient: string;
  emoji: string;
  excerpt: string;
}

export const posts: Post[] = [
  {
    slug: "best-photography-courses",
    title: "The Best Photography Courses on Udemy in 2026: Camera Basics, Phone, Food, Real Estate and Lightroom",
    date: "October 5, 2026",
    category: "Photography",
    gradient: "linear-gradient(135deg,#334155,#0ea5e9)",
    emoji: "📷",
    excerpt: "We ranked 342 photography courses from 210K student reviews — here are the top 12."
  },
  {
    slug: "best-language-learning-courses",
    title: "The Best Language Learning Courses on Udemy in 2026: English, IELTS, Spanish, French, German, Chinese and Japanese",
    date: "October 5, 2026",
    category: "Language",
    gradient: "linear-gradient(135deg,#0284c7,#7c3aed)",
    emoji: "🗣️",
    excerpt: "From IELTS 7.5 to conversational Spanish — full comparison plus pricing."
  },
  {
    slug: "best-music-courses",
    title: "The Best Music Courses on Udemy in 2026: Piano, Guitar, Music Theory, Singing, Production and DJing",
    date: "October 5, 2026",
    category: "Music",
    gradient: "linear-gradient(135deg,#9333ea,#ec4899)",
    emoji: "🎵",
    excerpt: "Piano, guitar, theory, vocals, production — 9 courses rated 4.6+."
  },
];

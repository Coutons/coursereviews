export interface Course {
  slug: string;
  title: string;
  provider: string;
  category: string;
  categorySlug: string;
  instructor: string;
  instructorSlug: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  level: string;
  duration: string;
  updated: string;
  gradient: string;
  emoji: string;
  bestseller?: boolean;
  description: string;
}

export const courses: Course[] = [
  {
    slug: "complete-python-bootcamp-zero-hero",
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    provider: "Udemy",
    category: "Python",
    categorySlug: "python",
    instructor: "Jose Portilla",
    instructorSlug: "jose-portilla",
    rating: 4.6,
    reviews: 566376,
    price: 199.99,
    level: "Beginner",
    duration: "22h total",
    updated: "09/2026",
    gradient: "linear-gradient(135deg,#3776AB,#1e3a5f)",
    emoji: "🐍",
    bestseller: true,
    description: "Learn Python 3 from scratch: syntax, OOP, web scraping, automation, and job-ready portfolio projects."
  },
  {
    slug: "excel-beginner-to-advanced",
    title: "Microsoft Excel - Excel from Beginner to Advanced 2026",
    provider: "Udemy",
    category: "Excel",
    categorySlug: "excel",
    instructor: "Kyle Pew",
    instructorSlug: "kyle-pew",
    rating: 4.7,
    reviews: 543696,
    price: 139.99,
    level: "All levels",
    duration: "18.5h total",
    updated: "10/2026",
    gradient: "linear-gradient(135deg,#217346,#0e3b24)",
    emoji: "📗",
    bestseller: true,
    description: "Master Excel: formulas, PivotTables, Power Query, dashboards, and VBA for analysts and finance teams."
  },
  {
    slug: "complete-web-development-bootcamp",
    title: "The Complete Full-Stack Web Development Bootcamp",
    provider: "Udemy",
    category: "Javascript",
    categorySlug: "javascript",
    instructor: "Dr. Angela Yu",
    instructorSlug: "angela-yu",
    rating: 4.7,
    reviews: 474585,
    price: 124.99,
    level: "Beginner",
    duration: "65h total",
    updated: "10/2026",
    gradient: "linear-gradient(135deg,#f7df1e,#f97316)",
    emoji: "⚡",
    bestseller: true,
    description: "HTML, CSS, JavaScript, Node, React, MongoDB and Web3 — one complete full-stack bootcamp."
  },
  {
    slug: "ultimate-aws-solutions-architect",
    title: "Ultimate AWS Certified Solutions Architect Associate 2026",
    provider: "Udemy",
    category: "Aws",
    categorySlug: "aws",
    instructor: "Stephane Maarek",
    instructorSlug: "stephane-maarek",
    rating: 4.7,
    reviews: 297485,
    price: 129.99,
    level: "Intermediate",
    duration: "27h total",
    updated: "09/2026",
    gradient: "linear-gradient(135deg,#FF9900,#7c2d12)",
    emoji: "☁️",
    bestseller: true,
    description: "Pass the SAA-C03: EC2, S3, VPC, IAM, serverless, plus practice exams and hands-on labs."
  },
  {
    slug: "web-developer-bootcamp-2026",
    title: "The Web Developer Bootcamp 2026",
    provider: "Udemy",
    category: "Web Development",
    categorySlug: "web-development",
    instructor: "Colt Steele",
    instructorSlug: "colt-steele",
    rating: 4.7,
    reviews: 286415,
    price: 159.99,
    level: "Beginner",
    duration: "74h total",
    updated: "08/2026",
    gradient: "linear-gradient(135deg,#4F46E5,#0ea5e9)",
    emoji: "🌐",
    description: "The legendary bootcamp: HTML, CSS, JS, Node, Express, Mongo, auth, and deployment."
  },
  {
    slug: "complete-sql-bootcamp",
    title: "The Complete SQL Bootcamp: Go from Zero to Hero",
    provider: "Udemy",
    category: "Postgresql",
    categorySlug: "sql",
    instructor: "Jose Portilla",
    instructorSlug: "jose-portilla",
    rating: 4.7,
    reviews: 258007,
    price: 159.99,
    level: "Beginner",
    duration: "9h total",
    updated: "09/2026",
    gradient: "linear-gradient(135deg,#0ea5e9,#1e3a8a)",
    emoji: "🗄️",
    description: "PostgreSQL from SELECT to window functions, joins, and query optimization."
  },
  {
    slug: "react-complete-guide",
    title: "React - The Complete Guide (incl. Next.js, Redux)",
    provider: "Udemy",
    category: "Redux",
    categorySlug: "javascript",
    instructor: "Academind by Maximilian Schwarzmüller",
    instructorSlug: "academind",
    rating: 4.6,
    reviews: 242065,
    price: 199.99,
    level: "Intermediate",
    duration: "68h total",
    updated: "10/2026",
    gradient: "linear-gradient(135deg,#61dafb,#4F46E5)",
    emoji: "⚛️",
    description: "Hooks, Router, Redux, Next.js 15, Server Components, and TypeScript."
  },
  {
    slug: "angular-complete-guide",
    title: "Angular - The Complete Guide",
    provider: "Udemy",
    category: "Angular",
    categorySlug: "web-development",
    instructor: "Maximilian Schwarzmüller",
    instructorSlug: "academind",
    rating: 4.7,
    reviews: 224681,
    price: 129.99,
    level: "Intermediate",
    duration: "36h total",
    updated: "07/2026",
    gradient: "linear-gradient(135deg,#dd0031,#7c2d12)",
    emoji: "🅰️",
    description: "Standalone components, signals, RxJS, NgRx, and deployment."
  },
  {
    slug: "shamanic-life-coach-certification",
    title: "Shamanic Life Coach Certification (Accredited)",
    provider: "Udemy",
    category: "Health & Fitness",
    categorySlug: "health-and-fitness",
    instructor: "Joeel & Natalie",
    instructorSlug: "joeelnatalie",
    rating: 4.6,
    reviews: 1656,
    price: 18.99,
    level: "All levels",
    duration: "12h total",
    updated: "10/2026",
    gradient: "linear-gradient(135deg,#65a30d,#14532d)",
    emoji: "🧘",
    description: "Accredited life-coach certification based on shamanic practice and transformation."
  },
  {
    slug: "financial-planning-coaching",
    title: "Financial Planning Coaching Certification Holistic Coaching",
    provider: "Udemy",
    category: "Finance & Accounting",
    categorySlug: "finance-and-accounting",
    instructor: "Holistic Coach Academy",
    instructorSlug: "holistic-coach",
    rating: 4.2,
    reviews: 1552,
    price: 16.99,
    level: "Beginner",
    duration: "8h total",
    updated: "10/2026",
    gradient: "linear-gradient(135deg,#16a34a,#052e16)",
    emoji: "💰",
    description: "Holistic financial coaching for clients and independent practice."
  },
  {
    slug: "management-consulting-toolkit",
    title: "Management Consulting Techniques, Tools and Frameworks",
    provider: "Udemy",
    category: "Business",
    categorySlug: "business",
    instructor: "Asen Gyczew",
    instructorSlug: "asen-gyczew",
    rating: 4.5,
    reviews: 1408,
    price: 13.99,
    level: "Intermediate",
    duration: "11h total",
    updated: "09/2026",
    gradient: "linear-gradient(135deg,#1e3a8a,#0ea5e9)",
    emoji: "💼",
    description: "McKinsey/BCG frameworks, MECE, case interviews, and problem solving."
  },
  {
    slug: "facebook-marketing-2026",
    title: "1000% More Engagement: 2026 Facebook Marketing, Facebook Ads",
    provider: "Udemy",
    category: "Social Media Marketing",
    categorySlug: "social-media-marketing",
    instructor: "Alex Genadinik",
    instructorSlug: "alex-genadinik",
    rating: 4.0,
    reviews: 1102,
    price: 17.99,
    level: "Beginner",
    duration: "9.5h total",
    updated: "10/2026",
    gradient: "linear-gradient(135deg,#1877f2,#1e1b4b)",
    emoji: "📱",
    description: "Facebook Ads and organic growth in 2026: targeting, creatives, and retargeting."
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function formatReviews(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(0) + "K";
  return String(n);
}

export const providers = ["Udemy", "Coursera", "edX", "Udacity", "Pluralsight", "YouTube", "LinkedIn Learning"];

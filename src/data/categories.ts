export interface Category {
  slug: string;
  name: string;
  group: string;
  courses: number;
  icon: string;
  color: string;
  description: string;
}

export const groups: string[] = [
  "Development",
  "IT & Software",
  "Design",
  "Business",
  "Marketing",
  "Office Productivity",
  "Finance & Accounting",
  "Photography & Video",
  "Personal Development",
  "Health & Fitness",
  "Music",
  "Teaching & Academics",
  "Lifestyle",
];

export const categories: Category[] = [
  { slug: "web-development", name: "Web Development", group: "Development", courses: 957, icon: "🌐", color: "#4F46E5", description: "HTML, CSS, JavaScript, React, Next.js and the best full-stack bootcamps." },
  { slug: "python", name: "Python", group: "Development", courses: 661, icon: "🐍", color: "#3776AB", description: "From zero to hero: automation, Django, Flask, and data." },
  { slug: "sql", name: "SQL", group: "Development", courses: 631, icon: "🗄️", color: "#E38B00", description: "PostgreSQL, MySQL, query optimization and data modeling." },
  { slug: "javascript", name: "JavaScript", group: "Development", courses: 581, icon: "⚡", color: "#F7DF1E", description: "ES2026, TypeScript, Node, and modern frameworks." },
  { slug: "data-science", name: "Data Science", group: "Development", courses: 542, icon: "📊", color: "#10B981", description: "Pandas, ML, statistics, and portfolio projects." },
  { slug: "artificial-intelligence", name: "Artificial Intelligence", group: "Development", courses: 498, icon: "🤖", color: "#8B5CF6", description: "LLMs, prompt engineering, LangChain, and agents." },
  { slug: "it-and-software", name: "IT & Software", group: "IT & Software", courses: 1870, icon: "💻", color: "#0EA5E9", description: "Networking, operating systems, troubleshooting, and IT support." },
  { slug: "it-certifications", name: "IT Certifications", group: "IT & Software", courses: 864, icon: "🎖️", color: "#EF4444", description: "AWS, Azure, CompTIA, CKA, and Security+." },
  { slug: "hacking", name: "Hacking", group: "IT & Software", courses: 312, icon: "🕶️", color: "#111827", description: "Ethical hacking, pentesting, and bug bounty." },
  { slug: "aws", name: "AWS", group: "IT & Software", courses: 428, icon: "☁️", color: "#FF9900", description: "Solutions Architect, DevOps, and serverless." },
  { slug: "graphic-design", name: "Graphic Design", group: "Design", courses: 445, icon: "🎨", color: "#EC4899", description: "Figma, Illustrator, branding, and layout." },
  { slug: "ux-design", name: "UX Design", group: "Design", courses: 389, icon: "✏️", color: "#6366F1", description: "Research, wireframes, prototyping, and design systems." },
  { slug: "photoshop", name: "Photoshop", group: "Design", courses: 298, icon: "🖼️", color: "#31A8FF", description: "Retouching, compositing, and digital imaging." },
  { slug: "3d-modeling", name: "3D Modeling", group: "Design", courses: 591, icon: "🧊", color: "#7C3AED", description: "Blender, Maya, texturing, and rendering." },
  { slug: "business", name: "Business", group: "Business", courses: 1095, icon: "💼", color: "#1E3A8A", description: "Strategy, startups, and entrepreneurship." },
  { slug: "data-analysis", name: "Data Analysis", group: "Business", courses: 512, icon: "📈", color: "#059669", description: "Excel, Power BI, Tableau, and SQL for analysts." },
  { slug: "project-management", name: "Project Management", group: "Business", courses: 376, icon: "📋", color: "#D97706", description: "PMP, Agile, Scrum, and team leadership." },
  { slug: "leadership", name: "Leadership & Management", group: "Business", courses: 294, icon: "🧭", color: "#0F766E", description: "People management, communication, and coaching." },
  { slug: "digital-marketing", name: "Digital Marketing", group: "Marketing", courses: 487, icon: "📣", color: "#F59E0B", description: "Ads, funnels, email, and growth." },
  { slug: "seo", name: "SEO", group: "Marketing", courses: 243, icon: "🔍", color: "#16A34A", description: "Technical SEO, content, and link building." },
  { slug: "social-media-marketing", name: "Social Media Marketing", group: "Marketing", courses: 198, icon: "📱", color: "#E11D48", description: "Instagram, TikTok, and Facebook Ads." },
  { slug: "excel", name: "Excel", group: "Office Productivity", courses: 605, icon: "📗", color: "#217346", description: "Formulas, PivotTables, Power Query, and VBA." },
  { slug: "office-productivity", name: "Office Productivity", group: "Office Productivity", courses: 605, icon: "🗂️", color: "#475569", description: "Notion, Google Workspace, and automation." },
  { slug: "finance-and-accounting", name: "Finance & Accounting", group: "Finance & Accounting", courses: 734, icon: "💰", color: "#15803D", description: "Investing, accounting, and financial modeling." },
  { slug: "bitcoin", name: "Bitcoin", group: "Finance & Accounting", courses: 121, icon: "₿", color: "#F7931A", description: "Crypto, blockchain, and DeFi." },
  { slug: "photography", name: "Photography", group: "Photography & Video", courses: 342, icon: "📷", color: "#334155", description: "Camera basics, portrait, landscape, and Lightroom." },
  { slug: "video-editing-and-animation", name: "Video Editing & Animation", group: "Photography & Video", courses: 415, icon: "🎬", color: "#7C2D12", description: "Premiere, After Effects, and DaVinci." },
  { slug: "personal-development", name: "Personal Development", group: "Personal Development", courses: 1121, icon: "🌱", color: "#65A30D", description: "Productivity, habits, and public speaking." },
  { slug: "health-and-fitness", name: "Health & Fitness", group: "Health & Fitness", courses: 870, icon: "💪", color: "#DC2626", description: "Yoga, nutrition, coaching, and mental health." },
  { slug: "music", name: "Music", group: "Music", courses: 276, icon: "🎵", color: "#9333EA", description: "Piano, guitar, theory, and production." },
  { slug: "guitar", name: "Guitar", group: "Music", courses: 143, icon: "🎸", color: "#B45309", description: "Acoustic, electric, and fingerstyle." },
  { slug: "language-learning", name: "Language Learning", group: "Teaching & Academics", courses: 388, icon: "🗣️", color: "#0284C7", description: "English, IELTS, Spanish, and Japanese." },
  { slug: "engineering", name: "Engineering", group: "Teaching & Academics", courses: 214, icon: "⚙️", color: "#52525B", description: "Electrical, mechanical, and civil engineering." },
  { slug: "lifestyle", name: "Lifestyle", group: "Lifestyle", courses: 187, icon: "🌻", color: "#EA580C", description: "Cooking, drawing, travel, and gaming." },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

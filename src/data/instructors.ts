export interface Instructor {
  slug: string;
  name: string;
  courses: number;
  reviews: string;
  students: string;
  rating: number;
  emoji: string;
  gradient: string;
  specialty: string;
}

export const instructors: Instructor[] = [
  { slug: "jose-portilla", name: "Jose Portilla", courses: 50, reviews: "1.3M", students: "3.2M", rating: 4.6, emoji: "🧑‍🏫", gradient: "linear-gradient(135deg,#3776AB,#0f172a)", specialty: "Python, SQL, Data" },
  { slug: "365-careers", name: "365 Careers", courses: 73, reviews: "1.3M", students: "2.8M", rating: 4.5, emoji: "📊", gradient: "linear-gradient(135deg,#059669,#064e3b)", specialty: "Data, Finance, Excel" },
  { slug: "angela-yu", name: "Dr. Angela Yu", courses: 8, reviews: "1.1M", students: "2.5M", rating: 4.7, emoji: "👩‍💻", gradient: "linear-gradient(135deg,#f59e0b,#b45309)", specialty: "Web Dev, iOS, Python" },
  { slug: "stephane-maarek", name: "Stephane Maarek", courses: 41, reviews: "1.1M", students: "2.1M", rating: 4.7, emoji: "☁️", gradient: "linear-gradient(135deg,#FF9900,#7c2d12)", specialty: "AWS, Kafka, Cloud" },
  { slug: "academind", name: "Academind by Maximilian Schwarzmüller", courses: 44, reviews: "783K", students: "1.9M", rating: 4.6, emoji: "⚛️", gradient: "linear-gradient(135deg,#4F46E5,#7c3aed)", specialty: "React, Angular, Next.js" },
  { slug: "kyle-pew", name: "Kyle Pew", courses: 28, reviews: "717K", students: "1.4M", rating: 4.6, emoji: "📗", gradient: "linear-gradient(135deg,#217346,#14532d)", specialty: "Excel, Office" },
  { slug: "maven-analytics", name: "Maven Analytics", courses: 39, reviews: "613K", students: "1.2M", rating: 4.6, emoji: "📈", gradient: "linear-gradient(135deg,#0ea5e9,#1e3a8a)", specialty: "Power BI, SQL" },
  { slug: "colt-steele", name: "Colt Steele", courses: 29, reviews: "606K", students: "1.6M", rating: 4.7, emoji: "🌐", gradient: "linear-gradient(135deg,#ec4899,#4F46E5)", specialty: "Web Dev, JS" },
];

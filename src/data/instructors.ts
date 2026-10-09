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
  /** Avatar: local path ("/images/instructors/my-avatar.jpg") or absolute URL ("https://…"). Defaults to "/images/instructors/<slug>.svg". */
  image?: string;
}

export const instructors: Instructor[] = [
  { slug: "jose-portilla", name: "Jose Portilla", courses: 50, reviews: "1.3M", students: "3.2M", rating: 4.6, emoji: "🧑‍🏫", image: "https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg", specialty: "Python, SQL, Data" },
  { slug: "365-careers", name: "365 Careers", courses: 73, reviews: "1.3M", students: "2.8M", rating: 4.5, emoji: "📊", image: "https://img-c.udemycdn.com/user/200_H/8280056_7887_3.jpg", specialty: "Data, Finance, Excel" },
  { slug: "angela-yu", name: "Dr. Angela Yu", courses: 8, reviews: "1.1M", students: "2.5M", rating: 4.7, emoji: "👩‍💻", image: "https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg", specialty: "Web Dev, iOS, Python" },
  { slug: "stephane-maarek", name: "Stephane Maarek", courses: 41, reviews: "1.1M", students: "2.1M", rating: 4.7, emoji: "☁️", image: "https://img-c.udemycdn.com/user/200_H/16122994_284f_18.jpg", specialty: "AWS, Kafka, Cloud" },
  { slug: "academind", name: "Academind by Maximilian Schwarzmüller", courses: 44, reviews: "783K", students: "1.9M", rating: 4.6, emoji: "⚛️", image: "https://img-c.udemycdn.com/user/200_H/13952972_e853.jpg", specialty: "React, Angular, Next.js" },
  { slug: "kyle-pew", name: "Kyle Pew", courses: 28, reviews: "717K", students: "1.4M", rating: 4.6, emoji: "📗", image: "https://img-c.udemycdn.com/user/200_H/16649710_ee35_3.jpg", specialty: "Excel, Office" },
  { slug: "maven-analytics", name: "Maven Analytics", courses: 39, reviews: "613K", students: "1.2M", rating: 4.6, emoji: "📈", image: "https://img-c.udemycdn.com/user/200_H/75004102_f8b0_2.jpg", specialty: "Power BI, SQL" },
  { slug: "colt-steele", name: "Colt Steele", courses: 29, reviews: "606K", students: "1.6M", rating: 4.7, emoji: "🌐", image: "https://img-c.udemycdn.com/user/200_H/4466306_6fd8_3.jpg", specialty: "Web Dev, JS" },
];

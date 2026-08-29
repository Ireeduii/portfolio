"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection, { Project } from "@/app/components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModel";

const projectsData: Project[] = [
  {
    id: 1,
    title: "CityVoice — Иргэний гомдол мэдээллийн систем",
    category: "Full-Stack",
    tech: "Next.js • Prisma • Clerk • Tailwind CSS • PostgreSQL • Vercel • Geolocation",
    summary:
      "Улаанбаатар хотын тулгамдсан асуудлыг зураг болон байршилтай нь бүртгэж, админ эрхээр хянах боломжтой платформын хөгжүүлэлт.",
    description:
      "CityVoice систем нь иргэдийн амьдарч буй орчин тойрон дахь тулгамдсан асуудал (хог хаягдал, гэрэлтүүлэг г.м.)-ийг гар утсаараа зураг дарж, GPS байршлын хамт шууд мэдээлэх боломжийг олгодог.",
    features: [
      "Интерактив газрын зураг болон байршил тогтоох",
      "Clerk ашигласан найдвартай нэвтрэлтийн систем",
      "Админ хяналтын самбар (Dashboard) болон статус хяналт",
      "Зураг хадгалах болон датабаз менежмент (Prisma + PostgreSQL)",
    ],
    githubUrl: "https://github.com/Ireeduii/issue-reporter.git",
  },
  {
    id: 2,
    title: "Lost and Found",
    category: "Full-Stack / Team Project",
    tech: "React • MongoDB • Mongoose • Cloudinary • Tailwind CSS",
    summary:
      "Гээгдүүлсэн болон олдсон эд зүйлсийг бүртгэж, зурагтай нь тохируулах ба үүний дараа хүмүүстэй холбох багийн төсөл.",
    description:
      "Хүмүүсийн алдсан, олсон эд зүйлсийг зарлал болгон оруулах, хайх, шүүлтүүр хийх боломжтой вэб юм. Зургийг Cloudinary-д хадгалж, MongoDB-г Mongoose-оор удирдан багийнхантай хамт хөгжүүлсэн.",
    features: [
      "Rest API хөгжүүлэлт",
      "MongoDB NoSQL датабаз болон Mongoose",
      "Cloudinary API ашиглан зураг оруулах, устгах систем",
      "Search буюу хайлт, шүүлтүүр",
    ],
    githubUrl: "https://github.com/Team-3A/Lost-and-Found.git",
    liveUrl: "https://lost-and-found-tau-self.vercel.app/auth/signup",
  },
  {
    id: 3,
    title: "Skill Map & Team Builder",
    category: "Full-Stack",
    tech: "Next.js • React • Tailwind CSS • TypeScript • PostgreSQL & Prisma • Clerk Auth",
    summary:
      "Ажилтнуудын ур чадварыг зураглаж, төслийн багийг оновчтой бүрдүүлэхэд зориулсан удирдлагын систем.",
    description:
      "Компанийн эсвэл багийн гишүүдийн техникийн болон хувь хүний ур чадварыг нэгдсэн байдлаар зураглаж харах, тухайн төслийн шаардлагад нийцсэн чадвартай ажилтнуудыг сонгож баг бүрдүүлэхэд туслах юм.",
    features: [
      "Төслийн шаардлагад үндэслэсэн оновчтой багийн сонголт",
      "Хэрэглэгчдийн мэдээллийг хялбар удирдах интерфейс",
      "Цэвэр бөгөөд хурдан ажиллагаатай UI загвар",
    ],
    githubUrl: "https://github.com/Ireeduii/employee-teambuilder.git",
    liveUrl: "https://employee-teambuilder.vercel.app/",
  },
  {
    id: 4,
    title: "Code Vault - Хөгжүүлэлтийн код хадгалах сан",
    category: "Full-Stack",
    tech: "Next.js • TypeScript • PostgreSQL & Prisma • Clerk Auth • Google Gemini AI API",
    summary:
      "Хэрэгтэй код хэсгүүд, скриптүүд болон ложикийг ангилан хадгалж, хялбар байдлаар эргүүлэн хайж ашиглахад зориулсан хөгжүүлэгчийн хэрэгсэл.",
    description:
      "Өдөр тутмын програмчлал болон төсөл дээр ажиллах явцад дахин ашиглах шаардлагатай кодын хэсгүүд, бодлогын санаанууд болон тохиргоонуудыг нэг дор цэгцтэй хадгалж, хурдан хайж олох боломжийг олгох вэб юм.",
    features: [
      "Кодын хэсгүүдийг хэл болон төрлөөр нь ангилах систем",
      "Хурдан бөгөөд оновчтой хайлтын систем",
      "Цэвэрхэн бөгөөд хөгжүүлэгчдэд ээлтэй UI дизайн",
    ],
    githubUrl: "https://github.com/Ireeduii/code-vault.git",
    liveUrl: "https://code-vault-es5a.vercel.app/dashboard",
  },
];

export default function Dark3DPortfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#121214] text-zinc-100 selection:bg-purple-500 selection:text-white relative overflow-hidden font-sans">
      {/* Background Glow Effects */}
      <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-[25%] right-[-15%] w-[600px] h-[600px] bg-gradient-to-tl from-zinc-800/40 via-purple-950/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[550px] h-[550px] bg-gradient-to-tr from-purple-900/25 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <Navbar />

      <Hero />

      <ProjectsSection
        projects={projectsData}
        onSelectProject={(project: Project) => setSelectedProject(project)}
      />

      <SkillsSection />

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

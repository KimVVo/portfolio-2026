import React, { useState } from "react";
import { FaGithub, FaXmark } from "react-icons/fa6";

import ADHDImage from "../assets/adhd.png";
import AITravelImage from "../assets/ai-travel.jpg";
import UnityPluginsImage from "../assets/unity_plugins.jpg";
import IndoorNavImage from "../assets/indoor-nav.jpg";
import ProfileProjectImage from "../assets/portfolio-2026-image.jpg";
import NavigationMapGif from "../assets/navigation_map.gif";
import UnityPluginsGif from "../assets/unity_plugin.gif";
import calendarGif from "../assets/calendar_gif.gif";
const projects = [
  {
    title: "Portfolio Website 2026",
    image: ProfileProjectImage,
    video:
      "https://raw.githubusercontent.com/KimVVo/portfolio-2026/main/portfolio-2026-gif.gif", // Direct video or GIF URL
    github: "https://github.com/KimVVo/portfolio-2026",
    role: "Independent Project (Developer)",
    date: "August 2026 - Present",
    description: [
      "Built a responsive personal portfolio using React and Tailwind CSS to showcase projects, technical skills, education, certifications, and work experience.",
      "Implemented React Router and reusable components for multi-page navigation and maintainable frontend architecture.",
      "Designed a responsive, user-centered interface with custom styling, interactive project cards, GitHub integration, and mobile-friendly layouts.",
    ],
    technologies: ["JavaScript", "CSS", "HTML", "React", "Tailwind CSS"],
    accent: "teal",
  },
  {
    title: "ADHD Study Planner",
    image: ADHDImage,
    video: calendarGif, // Replace with your local video path or hosted link
    github: "https://github.com/KimVVo/ADHD",
    role: "Developer (Team of 4)",
    date: "Jan 2025 – Jun 2025",
    description: [
      "Developed a website with a Pomodoro timer, task management, and focus mode.",
      "Implemented gamified characters and daily streaks while collecting and visualizing user study data.",
      "Integrated an AI-powered chatbot to help users organize their schedules.",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    accent: "pink",
  },
  {
    title: "AI Travel Planner",
    image: AITravelImage,
    video: "/videos/ai-travel-demo.mp4",
    github: "https://github.com/LinhTran00/BooWay",
    role: "Developer (Team of 4)",
    date: "Oct 2024",
    description: [
      "Integrated AI to generate personalized daily travel plans for users around the world.",
      "Developed the project in 24 hours during HackUNT 2024.",
      "Customized trips based on budget, interests, family size, and vacation length.",
    ],
    technologies: [
      "Google Gemini API",
      "Firebase",
      "Google OAuth",
      "React",
      "Tailwind CSS",
    ],
    accent: "yellow",
  },
  {
    title: "Accessibility Unity Plugins",
    image: UnityPluginsImage,
    video: UnityPluginsGif,
    github: "https://github.com/LinhTran00/UnityPlugin",
    role: "Developer (Team of 4)",
    date: "Jun 2024 – Dec 2024",
    description: [
      "Developed seven accessibility plugins for Unity to improve usability for visually and cognitively impaired players.",
      "Implemented tools for color contrast checking, text enhancement, colorblind simulation, blue-light filtering, and other accessibility features.",
    ],
    technologies: ["C/C++", "Unity Editor"],
    accent: "teal",
  },
  {
    title: "Indoor Campus Navigation Website",
    image: IndoorNavImage,
    video: NavigationMapGif,
    github:
      "https://github.com/Pranitha-Gaddam/UNT-Discovery-Park-Indoor-Navigation",
    role: "Developer (Team of 4)",
    date: "Jan 2024 – May 2024",
    description: [
      "Developed an interactive indoor navigation website for UNT students.",
      "Used JOSM to create an indoor map and QGIS to reference vectors to a geographic coordinate system.",
      "Implemented interactive map features including zooming, searching, and dynamic map displays.",
    ],
    technologies: ["JavaScript", "JOSM", "QGIS", "HTML", "CSS", "MySQL"],
    accent: "pink",
  },
];

const accentStyles = {
  teal: {
    card: "bg-[#8ED3DC]",
    bubble: "bg-[#fbeeda]",
  },
  pink: {
    card: "bg-[#F28BB5]",
    bubble: "bg-[#fbeeda]",
  },
  yellow: {
    card: "bg-[#FFF0A8]",
    bubble: "bg-[#fbeeda]",
  },
};

const Projects = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#fbeeda] px-6 pb-32 pt-24 text-[#102A63] sm:px-10"
    >
      <div className="mx-auto max-w-5xl">
        {/* HEADING */}
        <div className="mb-12 text-center">
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-4xl">
            <span className="text-[#F28BB5]">~</span> Projects{" "}
            <span className="blinking-dash"></span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#102A63]/75 md:text-base">
            A collection of projects I've built through coursework, hackathons,
            research, and independent development.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid gap-10">
          {projects.map((project) => {
            const style = accentStyles[project.accent];

            return (
              <article
                key={project.title}
                className={`overflow-hidden rounded-3xl border-2 border-[#102A63] ${style.card} shadow-[6px_6px_0_#102A63] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[9px_9px_0_#102A63]`}
              >
                <div className="grid md:grid-cols-[220px_1fr]">
                  {/* PROJECT IMAGE WITH CLICK TO PLAY */}
                  <div className="flex items-center justify-center p-6 md:p-7">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveVideo({
                          title: project.title,
                          src: project.video,
                        })
                      }
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-[#102A63] bg-[#fbeeda] shadow-[3px_3px_0_#102A63] transition-all hover:scale-105"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-44 w-full object-cover md:h-48 md:w-48"
                      />
                      {/* Play Overlay Badge */}
                      <div className="absolute inset-0 flex items-center justify-center bg-[#102A63]/40 opacity-0 transition-opacity group-hover:opacity-100">
                        <span className="rounded-lg border-2 border-[#102A63] bg-[#fbeeda] px-3 py-1 text-xs font-bold text-[#102A63] shadow-[2px_2px_0_#102A63]">
                          ▶ Play Demo
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* PROJECT INFORMATION */}
                  <div className="border-t-2 border-[#102A63] p-6 md:border-l-2 md:border-t-0 md:p-8">
                    {/* Title + GitHub */}
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-2xl font-bold text-[#102A63] md:text-3xl">
                        {project.title}
                      </h3>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="flex w-fit items-center gap-2 rounded-lg border-2 border-[#102A63] bg-[#fbeeda] px-3 py-2 text-sm font-bold text-[#102A63] shadow-[2px_2px_0_#102A63] transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#102A63]"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    </div>

                    {/* Role + Date */}
                    <p className="mt-2 text-sm font-semibold text-[#102A63]/75">
                      {project.role} · {project.date}
                    </p>

                    {/* Description */}
                    <ul className="mt-5 space-y-2 text-sm leading-6 text-[#102A63]/90 md:text-base">
                      {project.description.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="font-bold text-[#F28BB5]">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Bubbles */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className={`rounded-full border-2 border-[#102A63] ${style.bubble} px-3 py-1.5 text-xs font-bold text-[#102A63] shadow-[2px_2px_0_#102A63] transition-transform hover:-translate-y-0.5 sm:text-sm`}
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM */}
        <div className="mt-14 text-center">
          <p className="font-mono text-xl font-bold text-[#102A63]/70">
            More projects coming soon <span className="text-[#F28BB5]">♡</span>
          </p>
        </div>
      </div>

      {/* VIDEO MODAL OVERLAY */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#102A63]/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl border-4 border-[#102A63] bg-[#fbeeda] p-4 shadow-[8px_8px_0_#102A63]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="mb-4 flex items-center justify-between px-2">
              <h4 className="font-mono text-lg font-bold text-[#102A63]">
                {activeVideo.title} — Demo
              </h4>
              <button
                onClick={() => setActiveVideo(null)}
                className="rounded-full border-2 border-[#102A63] bg-[#F28BB5] p-2 text-[#102A63] shadow-[2px_2px_0_#102A63] transition-transform hover:scale-110"
                aria-label="Close modal"
              >
                <FaXmark />
              </button>
            </div>

            {/* Modal Content (Supports both video and GIF links) */}
            <div className="overflow-hidden rounded-2xl border-2 border-[#102A63] bg-black">
              {activeVideo.src.endsWith(".gif") ||
              activeVideo.src.endsWith(".jpg") ||
              activeVideo.src.endsWith(".png") ? (
                <img
                  src={activeVideo.src}
                  alt={activeVideo.title}
                  className="w-full object-contain"
                />
              ) : (
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  className="w-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

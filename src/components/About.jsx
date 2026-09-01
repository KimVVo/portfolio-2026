import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaXmark,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa6";
import profileImage from "../assets/profile.png";
import resume from "../assets/resume.pdf";
import { Link } from "react-router-dom";
import UNTLogo from "../assets/unt_logo.png";
import GgLogo from "../assets/google_logo.webp";
import AWSLogo from "../assets/aws_logo.png";

const About = () => {
  const [showResume, setShowResume] = useState(false);

  // Lock background scrolling when modal is open
  useEffect(() => {
    if (showResume) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup: restore scrolling if component unmounts while modal is open
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showResume]);

  return (
    <main id="about" className="min-h-screen bg-[#fbeeda] text-[#102A63]">
      {/* ============================= */}
      {/* ABOUT INTRO */}
      {/* ============================= */}

      <section className="px-6 pt-12 pb-8 md:px-10 min-h-screen ">
        {/* Title */}
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          <span className="text-[#F28BB5]">~</span> About{" "}
          <span className="blinking-dash"></span>
        </h1>

        {/* Main About Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-10 md:grid-cols-2">
          {/* Profile Image */}
          <div className="flex flex-col items-center justify-center gap-3">
            {/* Profile Image Container */}
            <div className="rounded-full border-2 border-[#102A63] bg-white p-1 shadow-[0_0_0_3px_#FFF8E8,0_0_0_5px_#102A63]">
              <img
                src={profileImage}
                alt="Kim"
                className="h-44 w-44 rounded-full object-cover md:h-52 md:w-52"
              />
            </div>
            <p className="text-lg font-bold text-[#F28BB5]"> Hi, I'm Kim!👋</p>
            {/* My Location */}
            <p className="flex items-center gap-1 text-sm font-bold text-[#102A63] md:text-base">
              <span>📍</span> Dallas, Texas
            </p>
          </div>

          {/* About Text */}
          <div>
            {/* Social & Contact Row */}
            <div className="mb-6 flex items-center gap-3">
              <a
                href="mailto:your-email@example.com"
                className="group inline-flex items-center gap-1.5 font-mono text-md font-bold text-[#F28BB5]"
              >
                Contact me
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>

              {/* Social Icons Container */}
              <div className="flex w-fit gap-2 rounded-md border-2 border-[#102A63] bg-[#F28BB5] p-2 shadow-[2px_2px_0_#102A63]">
                <a
                  href="https://github.com/KimVVo"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-[#102A63] bg-white p-1.5 transition hover:-translate-y-0.5"
                >
                  <FaGithub size={17} />
                </a>

                <a
                  href="https://linkedin.com/in/kimvo11"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-[#102A63] bg-white p-1.5 transition hover:-translate-y-0.5"
                >
                  <FaLinkedin size={17} />
                </a>
              </div>
            </div>
            {/* Description */}
            <p className="text-sm leading-6">
              My name is{" "}
              <strong>
                <span className="text-[#F28BB5]">Kim Vo</span>
              </strong>{" "}
              and I'm a{" "}
              <strong> software developer and Computer Science graduate</strong>{" "}
              from the University of North Texas in May 2026 with a{" "}
              <strong>3.9 GPA</strong>.
            </p>

            <p className="mt-3 text-sm leading-6">
              Through academic projects and my experience as{" "}
              <strong> a Research Assistant at UNT</strong>, I gained hands-on
              experience building software and solving real-world problems. My
              technical skills include{" "}
              <strong>Java, Python, JavaScript, React, SQL, and AWS</strong>.
            </p>
            <p className="mt-3 text-sm leading-6">
              I’m a fast learner who enjoys continuously learning and
              challenging myself with new technologies. In May 2026, I earned my
              <strong> AWS Certified Solutions Architect – Associate </strong>
              certification, building on my AWS knowledge and cloud skills. I’m
              also building my own AI-powered web application to develop my
              software engineering and AI skills further.
            </p>
            <p className="mt-3 text-sm leading-6">
              My motto is simple: <strong>Never stop learning.</strong>
            </p>
            {/* Resume Modal Trigger Button */}
            <button
              onClick={() => setShowResume(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-[#102A63] bg-[#F28BB5] px-4 py-2.5 text-sm font-bold text-[#102A63] shadow-[3px_3px_0_#102A63] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#102A63]"
            >
              <FaFilePdf size={16} />
              View Resume
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-2">
          <span className="text-[10px] font-bold tracking-widest text-[#102A63]">
            SCROLL
          </span>
          <div className="relative flex h-8 w-5 justify-center rounded-full border-2 border-[#102A63] bg-white p-1 shadow-[2px_2px_0_#102A63]">
            <span className="h-1.5 w-1 animate-bounce rounded-full bg-[#F28BB5]" />
          </div>
          <div className="relative h-24 w-0.5 overflow-hidden rounded-full bg-[#F8A7B9]/40">
            <div className="absolute top-0 h-1/2 w-full animate-pulse bg-[#102A63]" />
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* EDUCATION */}
      {/* ============================= */}

      <section id="education" className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-[#F28BB5]">~</span> Education{" "}
            <span className="blinking-dash"></span>
          </h2>

          <div className="mt-6 rounded-2xl border-2 border-[#102A63] bg-[#8ED3DC] p-6 shadow-[5px_5px_0_#102A63]">
            <h3 className="text-xl font-bold text-[#102A63]">
              University of North Texas
            </h3>

            <p className="mt-2 text-sm font-semibold">
              Bachelor of Science in Computer Science
            </p>

            <p className="mt-1 text-sm">
              Denton, Texas · August 2023 – May 2026
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-lg border-2 border-[#102A63] bg-white px-3 py-1 text-sm font-bold">
                GPA: 3.90
              </span>

              <span className="rounded-lg border-2 border-[#102A63] bg-[#F28BB5] px-3 py-1 text-sm font-bold">
                Summa Cum Laude
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* ============================= */}
      {/* CERTIFICATIONS */}
      {/* ============================= */}

      <section id="certifications" className="scroll-mt-24 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-[#F28BB5]">~</span> Certifications{" "}
            <span className="blinking-dash"></span>
          </h2>

          <div className="mt-8 space-y-6">
            {/* AWS Solutions Architect */}
            <div className="flex items-center gap-5 rounded-2xl border-2 border-[#102A63] bg-[#8ED3DC] p-5 shadow-[4px_4px_0_#102A63]">
              <div className="flex-shrink-0">
                <img
                  src={AWSLogo}
                  alt="Amazon Web Services logo"
                  className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#102A63] sm:text-xl">
                  AWS Certified Solutions Architect – Associate
                </h3>

                <p className="mt-1 text-sm font-semibold">
                  Amazon Web Services (AWS)
                </p>

                <p className="mt-1 text-sm text-gray-700">
                  Issued May 2026 · Expires May 2029
                </p>

                <a
                  href="https://www.credly.com/badges/27c1ecf1-6984-4be0-9216-f3f59952cb8a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-bold text-[#102A63] underline transition hover:text-[#F28BB5]"
                >
                  Show Credential →
                </a>
              </div>
            </div>

            {/* AWS Cloud Practitioner */}
            <div className="flex items-center gap-5 rounded-2xl border-2 border-[#102A63] bg-[#F28BB5] p-5 shadow-[4px_4px_0_#102A63]">
              <div className="flex-shrink-0">
                <img
                  src={AWSLogo}
                  alt="Amazon Web Services logo"
                  className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#102A63] sm:text-xl">
                  AWS Certified Cloud Practitioner
                </h3>

                <p className="mt-1 text-sm font-semibold">
                  Amazon Web Services (AWS)
                </p>

                <p className="mt-1 text-sm text-gray-700">
                  Issued Feb 2026 · Expires Feb 2029
                </p>

                <a
                  href="https://www.credly.com/badges/fca3947c-9c08-4c86-816f-a52d167043c5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-bold text-[#102A63] underline transition hover:text-[#8ED3DC]"
                >
                  Show Credential →
                </a>
              </div>
            </div>

            {/* UNT Security Certificate */}
            <div className="flex items-center gap-5 rounded-2xl border-2 border-[#102A63] bg-[#8ED3DC] p-5 shadow-[4px_4px_0_#102A63]">
              <div className="flex-shrink-0">
                <img
                  src={UNTLogo}
                  alt="University of North Texas logo"
                  className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#102A63] sm:text-xl">
                  Security Certificate
                </h3>

                <p className="mt-1 text-sm font-semibold">
                  University of North Texas
                </p>

                <p className="mt-1 text-sm text-gray-700">Completed May 2025</p>
              </div>
            </div>

            {/* Google Data Analytics */}
            <div className="flex items-center gap-5 rounded-2xl border-2 border-[#102A63] bg-[#F28BB5] p-5 shadow-[4px_4px_0_#102A63]">
              <div className="flex-shrink-0">
                <img
                  src={GgLogo}
                  alt="Google logo"
                  className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#102A63] sm:text-xl">
                  Google Data Analytics Professional Certificate
                </h3>

                <p className="mt-1 text-sm font-semibold">Google</p>

                <p className="mt-1 text-sm text-gray-700">
                  Completed October 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* TECHNICAL SKILLS */}
      {/* ============================= */}

      <section id="technical-skills" className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-[#F28BB5]">~</span> Technical Skills{" "}
            <span className="blinking-dash"></span>
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Languages */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-black">
                Languages
              </h3>

              <div className="flex flex-wrap gap-2">
                {["Java", "C", "C++", "Python", "JavaScript", "SQL", "R"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full border-2 border-[#102A63] bg-[#8ED3DC] px-3 py-2 text-sm font-semibold text-[#102A63] shadow-[2px_2px_0_#102A63]"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Software Engineering */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-black">
                Software Engineering
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "Object-Oriented Programming",
                  "REST API Design & Development",
                  "Data Structures & Algorithms",
                  "Software Design",
                  "Testing & Debugging",
                  "Agile Collaboration",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border-2 border-[#102A63] bg-[#F28BB5] px-3 py-2 text-sm font-semibold text-[#102A63] shadow-[2px_2px_0_#102A63]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-black">
                Frontend Development
              </h3>

              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "HTML", "CSS", "Tailwind CSS"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full border-2 border-[#102A63] bg-[#8ED3DC] px-3 py-2 text-sm font-semibold text-[#102A63] shadow-[2px_2px_0_#102A63]"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Backend & Database */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-black">
                Backend & Database
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express.js",
                  "FastAPI",
                  "MongoDB",
                  "MySQL",
                  "Firebase",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border-2 border-[#102A63] bg-[#F28BB5] px-3 py-2 text-sm font-semibold text-[#102A63] shadow-[2px_2px_0_#102A63]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & AI */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-black">
                Cloud & AI
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "AWS",
                  "Azure",
                  "Azure AI Search",
                  "Azure OpenAI",
                  "Azure SQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border-2 border-[#102A63] bg-[#8ED3DC] px-3 py-2 text-sm font-semibold text-[#102A63] shadow-[2px_2px_0_#102A63]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-black">
                Tools & Platforms
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "GitHub",
                  "Linux",
                  "Docker",
                  "Unity",
                  "Power BI",
                  "Tableau",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border-2 border-[#102A63] bg-[#F28BB5] px-3 py-2 text-sm font-semibold text-[#102A63] shadow-[2px_2px_0_#102A63]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* WORK EXPERIENCE */}
      {/* ============================= */}

      <section id="work-experience" className="px-6 pt-12 pb-32 md:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-[#F28BB5]">~</span> Work Experience{" "}
            <span className="blinking-dash"></span>
          </h2>

          <div className="mt-8 space-y-8">
            {/* Freelancer Software Engineer */}
            <div className="rounded-2xl border-2 border-[#102A63] bg-[#8ED3DC] p-6 shadow-[5px_5px_0_#102A63]">
              <div className="flex flex-col justify-between gap-2 md:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-[#102A63]">
                    Freelancer Software Engineer
                  </h3>
                  <p className="text-sm font-semibold">Outlier AI · Remote</p>
                </div>

                <p className="text-sm font-semibold">Jul 2025 – Present</p>
              </div>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6">
                <li>
                  Evaluated over{" "}
                  <strong>100 AI-generated code responses</strong>
                  for accuracy, identifying errors and recommending
                  improvements.
                </li>

                <li>
                  Developed an{" "}
                  <strong>AI-powered Resume Matching System</strong>
                  using a data processing and database pipeline.
                </li>

                <li>
                  Used <strong>Python</strong> to extract and clean resume and
                  job data, <strong>Azure Blob Storage</strong> to manage raw
                  files, and <strong>PostgreSQL</strong> to store structured
                  data.
                </li>

                <li>
                  Used <strong>SQL</strong> to query structured data and
                  generate resume-job matching and application metrics.
                </li>
              </ul>
            </div>

            {/* Undergraduate Research Assistant */}
            <div className="rounded-2xl border-2 border-[#102A63] bg-[#F28BB5] p-6 shadow-[5px_5px_0_#102A63]">
              <div className="flex flex-col justify-between gap-2 md:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-[#102A63]">
                    Undergraduate Research Assistant
                  </h3>

                  <p className="text-sm font-semibold">
                    UNT Computer Science Department · Denton, Texas
                  </p>

                  <p className="text-xs italic">
                    Advisor: Wajdi Alemanni, Ph.D.
                  </p>
                </div>

                <p className="text-sm font-semibold">Jun 2024 – Dec 2024</p>
              </div>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6">
                <li>
                  Developed <strong>seven Unity Editor plugins</strong> in
                  <strong> C/C++</strong> using object-oriented design
                  principles to create modular and reusable accessibility tools.
                </li>

                <li>
                  Built tools for{" "}
                  <strong>
                    color contrast analysis, text enhancement, colorblind
                    simulation, and blue-light filtering
                  </strong>
                  to improve accessibility for players with visual and cognitive
                  impairments.
                </li>

                <li>
                  Documented and tested plugin functionality to verify
                  reliability and maintainability.
                </li>
              </ul>
            </div>

            {/* Private Math Tutor */}
            <div className="rounded-2xl border-2 border-[#102A63] bg-[#8ED3DC] p-6 shadow-[5px_5px_0_#102A63]">
              <div className="flex flex-col justify-between gap-2 md:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-[#102A63]">
                    Private Math Tutor
                  </h3>

                  <p className="text-sm font-semibold">Lynnwood, WA</p>
                </div>

                <p className="text-sm font-semibold">Feb 2021 – Jun 2023</p>
              </div>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6">
                <li>
                  Tutored students in <strong>Calculus I–IV</strong> through
                  personalized one-on-one instruction.
                </li>

                <li>
                  Helped improve a student's performance from
                  <strong> 50% to over 90%</strong> through targeted practice
                  and individualized learning strategies.
                </li>
              </ul>
            </div>

            {/* Marketing Outreach Specialist */}
            <div className="rounded-2xl border-2 border-[#102A63] bg-[#F28BB5] p-6 shadow-[5px_5px_0_#102A63]">
              <div className="flex flex-col justify-between gap-2 md:flex-row">
                <div>
                  <h3 className="text-xl font-bold text-[#102A63]">
                    Marketing Outreach Specialist
                  </h3>

                  <p className="text-sm font-semibold">Edmonds College</p>
                </div>

                <p className="text-sm font-semibold">Sep 2020 – Jun 2021</p>
              </div>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6">
                <li>
                  Created marketing materials and promotional content for campus
                  events and student outreach initiatives.
                </li>

                <li>
                  Supported a Halloween event attended by
                  <strong> 400+ students</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* RESUME MODAL OVERLAY */}
      {/* ============================= */}
      {showResume && (
        <div
          onClick={() => setShowResume(false)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#102A63]/70 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[85vh] w-full max-w-4xl flex-col items-center justify-center rounded-2xl border-4 border-[#102A63] bg-[#FFF8E8] p-4 shadow-[8px_8px_0_#102A63]"
          >
            {/* Modal Header */}
            <div className="mb-3 flex w-full items-center justify-between px-2">
              <span className="font-mono text-base font-bold text-[#102A63]">
                Resume Preview
              </span>

              <div className="flex items-center gap-2">
                {/* Download Direct Link */}
                <a
                  href={resume}
                  download="Kim_Vo_Resume.pdf"
                  className="flex items-center gap-1.5 rounded-lg border-2 border-[#102A63] bg-[#8ED3DC] px-3 py-1 text-xs font-bold text-[#102A63] shadow-[2px_2px_0_#102A63] transition hover:bg-[#72cad6]"
                >
                  <FaDownload size={13} /> Download
                </a>

                {/* Close Button */}
                <button
                  onClick={() => setShowResume(false)}
                  className="flex items-center gap-1.5 rounded-lg border-2 border-[#102A63] bg-[#F28BB5] px-3 py-1 text-xs font-bold text-[#102A63] shadow-[2px_2px_0_#102A63] transition hover:bg-[#ff75aa]"
                >
                  <FaXmark size={14} /> Close
                </button>
              </div>
            </div>

            {/* PDF Viewport */}
            <iframe
              src={resume}
              title="Resume Preview"
              className="h-full w-full rounded-xl border-2 border-[#102A63] bg-white"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default About;

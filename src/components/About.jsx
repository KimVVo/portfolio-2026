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
          <div className="flex justify-center">
            <div className="rounded-full border-2 border-[#102A63] bg-white p-1 shadow-[0_0_0_3px_#FFF8E8,0_0_0_5px_#102A63]">
              <img
                src={profileImage}
                alt="Kim"
                className="h-44 w-44 rounded-full object-cover md:h-52 md:w-52"
              />
            </div>
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
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-[#102A63] bg-white p-1.5 transition hover:-translate-y-0.5"
                >
                  <FaGithub size={17} />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-[#102A63] bg-white p-1.5 transition hover:-translate-y-0.5"
                >
                  <FaLinkedin size={17} />
                </a>

                <a
                  href="mailto:your-email@example.com"
                  className="rounded border border-[#102A63] bg-white p-1.5 transition hover:-translate-y-0.5"
                >
                  <FaEnvelope size={17} />
                </a>
              </div>
            </div>
            {/* Description */}
            <p className="text-sm leading-6">
              My name is <strong>Kim Vo</strong> and I'm a{" "}
              <strong>front-end software developer</strong> passionate about
              creating modern, user-centered web applications.
            </p>
            <p className="mt-3 text-sm leading-6">
              I enjoy turning ideas into clean, responsive interfaces and
              building products that are both functional and easy to use.
            </p>
            <p className="mt-3 text-sm leading-6">
              My current interests include{" "}
              <strong>React, JavaScript, Java, SQL, AWS</strong>, and full-stack
              development.
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
          <div className="relative h-48 w-0.5 overflow-hidden rounded-full bg-[#F8A7B9]/40">
            <div className="absolute top-0 h-1/2 w-full animate-pulse bg-[#102A63]" />
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* FIRST STEPS */}
      {/* ============================= */}

      <section id="first-steps" className="px-6 py-12 md:px-10">
        <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              <span className="text-[#F28BB5]">~</span> First Steps{" "}
              <span className="blinking-dash"></span>
            </h2>

            <p className="mt-6 text-sm leading-7">
              I first discovered programming while studying computer science at
              the University of North Texas. What started as curiosity gradually
              became a passion for building software and solving problems.
            </p>

            <p className="mt-5 text-sm leading-7">
              Through university projects and independent learning, I developed
              an interest in creating applications that combine technology with
              thoughtful user experiences.
            </p>

            <p className="mt-5 text-sm leading-7">
              Today, I'm continuing to grow as a software developer, focusing on
              front-end development while expanding my knowledge of backend
              systems, cloud technologies, and modern software engineering
              practices.
            </p>

            <Link
              to="/projects"
              className="mt-6 inline-block rounded-lg border-2 border-[#102A63] bg-[#8ED3DC] px-4 py-2 text-sm font-bold text-[#102A63] shadow-[2px_2px_0_#102A63] transition hover:bg-[#72cad6]"
            >
              View My Projects
            </Link>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-3xl border-2 border-[#102A63] bg-[#8ED3DC] text-7xl shadow-[5px_5px_0_#102A63]">
              📖
            </div>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* WORK EXPERIENCE */}
      {/* ============================= */}

      <section id="work-experience" className="px-6 py-12 md:px-10">
        <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-2">
          {/* Illustration */}
          <div className="flex justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-3xl border-2 border-[#102A63] bg-[#8ED3DC] text-7xl shadow-[5px_5px_0_#102A63]">
              📖
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              <span className="text-[#F28BB5]">~</span> Work Experience
              <span className="blinking-dash"></span>
            </h2>

            <p className="mt-6 text-sm leading-7">
              I first discovered programming while studying computer science at
              the University of North Texas. What started as curiosity gradually
              became a passion for building software and solving problems.
            </p>

            <p className="mt-5 text-sm leading-7">
              Through university projects and independent learning, I developed
              an interest in creating applications that combine technology with
              thoughtful user experiences.
            </p>

            <p className="mt-5 text-sm leading-7">
              Today, I'm continuing to grow as a software developer, focusing on
              front-end development while expanding my knowledge of backend
              systems, cloud technologies, and modern software engineering
              practices.
            </p>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* TECHNICAL SKILLS */}
      {/* ============================= */}

      <section
        id="technical-skills"
        className="px-6 py-12 md:px-10 min-h-screen"
      >
        <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              <span className="text-[#F28BB5]">~</span> Technical Skills{" "}
              <span className="blinking-dash"></span>
            </h2>

            <p className="mt-6 text-sm leading-7">
              I first discovered programming while studying computer science at
              the University of North Texas. What started as curiosity gradually
              became a passion for building software and solving problems.
            </p>

            <p className="mt-5 text-sm leading-7">
              Through university projects and independent learning, I developed
              an interest in creating applications that combine technology with
              thoughtful user experiences.
            </p>

            <p className="mt-5 text-sm leading-7">
              Today, I'm continuing to grow as a software developer, focusing on
              front-end development while expanding my knowledge of backend
              systems, cloud technologies, and modern software engineering
              practices.
            </p>

            <Link
              to="/projects"
              className="mt-6 inline-block rounded-lg border-2 border-[#102A63] bg-[#8ED3DC] px-4 py-2 text-sm font-bold text-[#102A63] shadow-[2px_2px_0_#102A63] transition hover:bg-[#72cad6]"
            >
              View My Projects
            </Link>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-3xl border-2 border-[#102A63] bg-[#8ED3DC] text-7xl shadow-[5px_5px_0_#102A63]">
              📖
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

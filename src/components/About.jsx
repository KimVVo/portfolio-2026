import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa6";
import profileImage from "../assets/profile.png";

const About = () => {
  return (
    <main id="about" className="min-h-screen bg-[#FFF8E8] text-[#102A63]">
      {/* ============================= */}
      {/* ABOUT INTRO */}
      {/* ============================= */}

      <section className="min-h-screen px-6 py-8 md:px-10">
        {/* Title */}
        <h1 className="text-center text-3xl font-bold md:text-4xl">
          <span className="text-[#F28BB5]">~</span> About
        </h1>

        {/* Main About Content */}
        <div className="mx-auto mt-12 grid max-w-4xl items-center gap-10 md:grid-cols-2">
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
            {/* Social Icons */}
            <div className="mb-6 flex w-fit gap-2 rounded-md border-2 border-[#102A63] bg-[#F28BB5] p-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded bg-white p-1 transition hover:-translate-y-1"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded bg-white p-1 transition hover:-translate-y-1"
              >
                <FaLinkedin size={17} />
              </a>

              <a
                href="mailto:your-email@example.com"
                className="rounded bg-white p-1 transition hover:-translate-y-1"
              >
                <FaEnvelope size={17} />
              </a>
            </div>

            {/* Description */}
            <p className="text-sm leading-6">
              My name is <strong>Kim Vo</strong> and I'm a
              <strong> front-end software developer</strong> passionate about
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

            {/* CV */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition hover:text-[#F28BB5]"
            >
              Download CV
              <span className="text-[#F28BB5]">→</span>
              <FaDownload size={14} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mx-auto mt-12 flex max-w-4xl items-start gap-3">
          <div className="flex flex-col items-center">
            <span className="text-[8px] font-bold tracking-widest">SCROLL</span>

            <div className="mt-2 h-96 w-px bg-[#F8A7B9]" />
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* FIRST STEPS */}
      {/* ============================= */}

      <section id="first-steps" className="min-h-screen px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              <span className="text-[#F28BB5]">~</span> First Steps
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

          {/* Illustration */}
          <div className="flex justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-3xl bg-[#8ED3DC] text-7xl">
              📖
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

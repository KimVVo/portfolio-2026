import React from "react";

const experiences = [
  {
    title: "Freelancer Software Engineer",
    company: "Outlier AI · Remote",
    date: "Jul 2025 – Present",
    accent: "teal",
    description: [
      <>
        Evaluated over <strong>100 AI-generated code responses</strong> for
        accuracy, identifying errors and recommending improvements.
      </>,
      <>
        Developed an <strong>AI-powered Resume Matching System</strong> using a
        data processing and database pipeline.
      </>,
      <>
        Used <strong>Python</strong> to extract and clean resume and job data,
        <strong> Azure Blob Storage</strong> to manage raw files, and{" "}
        <strong>PostgreSQL</strong> to store structured data.
      </>,
      <>
        Used <strong>SQL</strong> to query structured data and generate
        resume-job matching and application metrics.
      </>,
    ],
  },

  {
    title: "Undergraduate Research Assistant",
    company: "UNT Computer Science Department · Denton, Texas",
    advisor: "Advisor: Wajdi Alemanni, Ph.D.",
    date: "Jun 2024 – Dec 2024",
    accent: "pink",
    description: [
      <>
        Developed <strong>seven Unity Editor plugins</strong> in{" "}
        <strong>C/C++</strong> using object-oriented design principles to create
        modular and reusable accessibility tools.
      </>,
      <>
        Built tools for{" "}
        <strong>
          color contrast analysis, text enhancement, colorblind simulation, and
          blue-light filtering
        </strong>{" "}
        to improve accessibility.
      </>,
      <>
        Documented and tested plugin functionality to verify reliability and
        maintainability.
      </>,
    ],
  },

  {
    title: "Private Math Tutor",
    company: "Lynnwood, WA",
    date: "Feb 2021 – Jun 2023",
    accent: "yellow",
    description: [
      <>
        Tutored students in <strong>Calculus I–IV</strong> through personalized
        one-on-one instruction.
      </>,
      <>
        Helped improve a student's performance from{" "}
        <strong>50% to over 90%</strong> through targeted practice and
        individualized learning strategies.
      </>,
    ],
  },

  {
    title: "Marketing Outreach Specialist",
    company: "Edmonds College",
    date: "Sep 2020 – Jun 2021",
    accent: "teal",
    description: [
      <>
        Created marketing materials and promotional content for campus events
        and student outreach initiatives.
      </>,
      <>
        Supported a Halloween event attended by <strong>400+ students</strong>.
      </>,
    ],
  },
];

const accentStyles = {
  teal: {
    card: "bg-[#8ED3DC]",
  },
  pink: {
    card: "bg-[#F28BB5]",
  },
  yellow: {
    card: "bg-[#FFF0A8]",
  },
};

const WorkExperience = () => {
  return (
    <section
      id="work-experience"
      className="min-h-screen bg-[#fbeeda] px-6 pb-32 pt-24 text-[#102A63] sm:px-10"
    >
      <div className="mx-auto max-w-5xl">
        {/* ============================= */}
        {/* HEADING */}
        {/* ============================= */}

        <div className="mb-12 text-center">
          <h2 className="font-mono text-3xl font-bold tracking-tight md:text-4xl">
            <span className="text-[#F28BB5]">~</span> Work Experience{" "}
            <span className="blinking-dash"></span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#102A63]/75 md:text-base">
            My professional, research, and teaching experience developing
            technical skills and working with others.
          </p>
        </div>

        {/* ============================= */}
        {/* EXPERIENCE CARDS */}
        {/* ============================= */}

        <div className="grid gap-10">
          {experiences.map((experience) => {
            const style = accentStyles[experience.accent];

            return (
              <article
                key={experience.title}
                className={`overflow-hidden rounded-3xl border-2 border-[#102A63] ${style.card} shadow-[6px_6px_0_#102A63] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[9px_9px_0_#102A63]`}
              >
                <div className="p-6 md:p-8">
                  {/* ============================= */}
                  {/* TITLE + DATE */}
                  {/* ============================= */}

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-[#102A63] md:text-3xl">
                        {experience.title}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-[#102A63]/75 md:text-base">
                        {experience.company}
                      </p>

                      {experience.advisor && (
                        <p className="mt-1 text-xs italic text-[#102A63]/70">
                          {experience.advisor}
                        </p>
                      )}
                    </div>

                    <p className="whitespace-nowrap text-sm font-semibold text-[#102A63]/75">
                      {experience.date}
                    </p>
                  </div>

                  {/* ============================= */}
                  {/* DESCRIPTION */}
                  {/* ============================= */}

                  <ul className="mt-5 space-y-2 text-sm leading-6 text-[#102A63]/90 md:text-base">
                    {experience.description.map((item, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="font-bold text-[#F28BB5]">→</span>

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* ============================= */}
        {/* BOTTOM */}
        {/* ============================= */}

        <div className="mt-14 text-center">
          <p className="font-mono text-xl font-bold text-[#102A63]/70">
            Always learning, building, and growing{" "}
            <span className="text-[#F28BB5]">♡</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

import React from "react";

const experiences = [
 
  {
    title: "Lead Server",
    company: "Gyu-Kaku Japanese BBQ · Plano, TX",
    date: "Sep 2021 – Sep 2026",
    accent: "yellow",
    description: [
      <>
        Managed high-volume dining operations for <strong>200+ guests</strong>{" "}
        per night, assisting front-of-house staff to accelerate table turnover
        and ensure fast service.
      </>,
      <>
        Recognized as <strong>Employee of the Year</strong> for leadership,
        operational excellence, and consistent guest satisfaction.
      </>,
    ],
  },

  {
    title: "Undergraduate Research Assistant",
    company: "UNT Computer Science Department · Denton, TX",
    advisor: "Advisor: Wajdi Aljedaani, Ph.D.",
    date: "Jun 2024 – Dec 2024",
    accent: "pink",
    description: [
      <>
        Developed <strong>7 Unity Editor plugins</strong> in{" "}
        <strong>C#</strong> using Object-Oriented Programming (OOP) to improve
        game accessibility for users with visual impairments and
        photosensitivity.
      </>,
      <>
        Built tools including <strong>colorblind simulation</strong>,{" "}
        <strong>text-to-speech</strong>, and a{" "}
        <strong>language generator</strong> to create inclusive digital
        environments.
      </>,
      <>
        Performed unit testing to resolve runtime exceptions by{" "}
        <strong>60%</strong> and improve plugin reliability, usability, and
        integration across Unity projects.
      </>,
    ],
  },

  {
    title: "Math Tutor",
    company: "Independent · Dallas, TX / Lynnwood, WA",
    date: "Jun 2021 – Jul 2023",
    accent: "teal",
    description: [
      <>
        Mentored students one-on-one in <strong>Pre-Calculus</strong> and{" "}
        <strong>Calculus I–IV</strong> through personalized learning strategies.
      </>,
      <>
        Helped improve students' performance from <strong>50% to over 90%</strong>{" "}
        through targeted practice and concept reinforcement.
      </>,
    ],
  },

  {
    title: "Marketing Outreach Specialist",
    company: "Edmonds College · Lynnwood, WA",
    date: "Sep 2020 – Jun 2021",
    accent: "yellow",
    description: [
      <>
        Designed and distributed college marketing materials and promotional content
        across campus, boosting student participation by <strong>80%</strong>.
      </>,
      <>
        Supported campus initiatives and events, including a Halloween event
        attended by <strong>400+ students</strong>.
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

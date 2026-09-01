import React from "react";

const WorkExperience = () => {
  return (
    <section id="work-experience" className="px-6 pt-12 pb-32 md:px-10">
      {" "}
      <div className="mx-auto max-w-4xl">
        {" "}
        <h2 className="text-3xl font-bold md:text-4xl">
          {" "}
          <span className="text-[#F28BB5]">~</span> Work Experience{" "}
          <span className="blinking-dash"></span>{" "}
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
                Evaluated over <strong>100 AI-generated code responses</strong>{" "}
                for accuracy, identifying errors and recommending improvements.
              </li>

              <li>
                Developed an <strong>AI-powered Resume Matching System</strong>{" "}
                using a data processing and database pipeline.
              </li>

              <li>
                Used <strong>Python</strong> to extract and clean resume and job
                data, <strong>Azure Blob Storage</strong> to manage raw files,
                and <strong>PostgreSQL</strong> to store structured data.
              </li>

              <li>
                Used <strong>SQL</strong> to query structured data and generate
                resume-job matching and application metrics.
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

                <p className="text-xs italic">Advisor: Wajdi Alemanni, Ph.D.</p>
              </div>

              <p className="text-sm font-semibold">Jun 2024 – Dec 2024</p>
            </div>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6">
              <li>
                Developed <strong>seven Unity Editor plugins</strong> in
                <strong> C/C++</strong> using object-oriented design principles
                to create modular and reusable accessibility tools.
              </li>

              <li>
                Built tools for{" "}
                <strong>
                  color contrast analysis, text enhancement, colorblind
                  simulation, and blue-light filtering
                </strong>{" "}
                to improve accessibility.
              </li>

              <li>
                Documented and tested plugin functionality to verify reliability
                and maintainability.
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
                <strong> 50% to over 90%</strong> through targeted practice and
                individualized learning strategies.
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
  );
};

export default WorkExperience;

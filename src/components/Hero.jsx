const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#FFF8E8] px-6 py-12">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center">
        <p className="mb-4 text-lg font-medium text-[#F28BB5]">~ Welcome!</p>

        <h1 className="text-center text-5xl font-bold tracking-tight text-[#102A63] md:text-7xl">
          Hi, I'm Kim!
        </h1>

        <p className="mt-6 max-w-2xl text-center text-lg leading-8 text-[#102A63] md:text-xl">
          I'm a front-end software developer passionate about building modern,
          user-centered web applications.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[#F28BB5] px-6 py-3 font-semibold text-[#102A63] transition hover:-translate-y-1"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-full border-2 border-[#102A63] px-6 py-3 font-semibold text-[#102A63] transition hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import profileImage from "../assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#FEF6E4] px-6 py-12">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-bold tracking-tight text-[#182D68] md:text-7xl font-mono">
          <span className="text-[#F28BB5]"> ~ </span>Hi, I'm Kim!
          <span className="blinking-dash"></span>
        </h1>
        <img
          src={profileImage}
          alt="Profile"
          className="mb-6 w-75 max-w-full object-contain md:w-112.5 lg:w-125"
        />

        <p className="mt-6 max-w-2xl text-center text-lg leading-8 text-[#182D68] md:text-xl font-mono">
          I'm a <strong className="text-[#F28BB5]">software developer</strong>{" "}
          passionate about building modern, user-centered web applications.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[#F28BB5] px-6 py-3 font-semibold text-[#182D68] transition hover:-translate-y-1"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="rounded-full border-2 border-[#182D68] px-6 py-3 font-semibold text-[#182D68] transition hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

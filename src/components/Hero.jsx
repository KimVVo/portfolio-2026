import EyeTrackingAvatar from "./EyeTrackingAvatar";
import GitHubSnake from "../assets/github-contribution-grid-snake.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full bg-[#fbeeda] px-6 py-12 text-[#102A63]"
    >
      {" "}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Heading */}
        <h1 className="font-mono text-4xl font-bold tracking-tight md:text-5xl">
          <span className="text-[#F28BB5]">~</span> Hi, I'm Kim Vo!{" "}
          <span className="blinking-dash"></span>
        </h1>

        {/* Avatar */}
        <div className="my-6 flex w-full justify-center">
          <EyeTrackingAvatar />
        </div>

        {/* Subtitle / Bio */}
        <p className="mx-auto max-w-xl text-base leading-relaxed text-[#102A63]/90 md:text-lg">
          I'm a <strong className="text-[#F28BB5]">software developer</strong>{" "}
          with experience in building modern, <strong>user-centered</strong> web
          applications.
        </p>

        {/* ============================= */}
        {/* GITHUB CONTRIBUTIONS */}
        {/* ============================= */}

        <section id="github-contributions" className="mt-20 w-full px-2 pb-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* Section Title */}
            <h2 className="text-xl font-bold md:text-xl">
              <span className="text-[#F28BB5]">~ Mr. Snake</span> is eating my
              GitHub's contribution. <span className="text-[#F28BB5]">~</span>
            </h2>

            {/* Snake Container */}
            <div className="mt-8 flex justify-center overflow-hidden rounded-2xl border-2 border-[#102A63] bg-[#8ED3DC] p-4 shadow-[5px_5px_0_#102A63]">
              <img
                src={GitHubSnake}
                alt="Kim Vo's GitHub contribution snake"
                className="h-auto w-full max-w-3xl"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;

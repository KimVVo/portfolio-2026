import { useEffect } from "react";
import profileImage from "../assets/profile.png";

const Hero = () => {
  useEffect(() => {
    // 1. Lock scrolling on the global browser window when Home mounts
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // 2. Clean up function: Restore normal scrolling when leaving the Home page
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []); // Empty dependency array ensures this only runs on mount and unmount

  return (
    <section
      id="home"
      className="h-screen w-screen overflow-hidden bg-[#fbeeda] px-6"
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col items-center justify-center">
        <h1 className="text-center font-mono text-5xl font-bold tracking-tight text-[#182D68] md:text-7xl">
          <span className="text-[#F28BB5]">~ </span>Hi, I'm Kim!{" "}
          <span className="blinking-dash"></span>
        </h1>

        <img
          src={profileImage}
          alt="Profile"
          className="my-6 w-48 max-w-full object-contain md:w-72 lg:w-80"
        />

        <p className="max-w-2xl text-center font-mono text-lg leading-8 text-[#182D68] md:text-xl">
          I'm a <strong className="text-[#F28BB5]">software developer</strong>{" "}
          passionate about building modern, user-centered web applications.
        </p>
      </div>
    </section>
  );
};

export default Hero;

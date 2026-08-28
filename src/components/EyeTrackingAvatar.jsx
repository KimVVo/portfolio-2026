import { useState, useEffect, useRef } from "react";

const EyeTrackingAvatar = () => {
  // References to track left and right eye center positions in the DOM
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  // Offset states for pupil movement (in pixels)
  const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 });
  const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate pupil offset for a specific eye element
      const calculatePupilOffset = (eyeRef) => {
        if (!eyeRef.current) return { x: 0, y: 0 };

        const rect = eyeRef.current.getBoundingClientRect();
        // Eye center in viewport coordinates
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        // Angle between mouse and eye center
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);

        // Distance between mouse and eye center
        const distance = Math.hypot(e.clientX - eyeX, e.clientY - eyeY);

        // Maximum radius (in px) pupils can travel inside the eye socket
        const maxRadius = 6;
        const radius = Math.min(distance, maxRadius);

        return {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        };
      };

      setLeftPupil(calculatePupilOffset(leftEyeRef));
      setRightPupil(calculatePupilOffset(rightEyeRef));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex justify-center my-6">
      <svg
        className="w-48 max-w-full md:w-72 lg:w-80"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Blob Frame */}
        <path
          d="M 30 150 C 30 50, 270 50, 270 150 C 270 270, 30 270, 30 150 Z"
          fill="#FFF8E8"
          stroke="#102A63"
          strokeWidth="4"
        />

        {/* Hair Back */}
        <path
          d="M 90 120 C 70 80, 230 80, 210 120 C 230 200, 230 230, 210 240 L 90 240 C 70 230, 70 200, 90 120 Z"
          fill="#8D5B4C"
          stroke="#102A63"
          strokeWidth="4"
        />

        {/* Face Base */}
        <path
          d="M 110 120 C 110 90, 190 90, 190 120 C 190 180, 180 210, 150 210 C 120 210, 110 180, 110 120 Z"
          fill="#FBD2C1"
          stroke="#102A63"
          strokeWidth="4"
        />

        {/* Eyebrows */}
        <path
          d="M 125 125 Q 135 120 145 125"
          stroke="#102A63"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 155 125 Q 165 120 175 125"
          stroke="#102A63"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Glasses Frame & Eye Sockets */}
        {/* Left Eye Glass */}
        <circle
          ref={leftEyeRef}
          cx="135"
          cy="140"
          r="18"
          fill="white"
          stroke="#102A63"
          strokeWidth="3"
        />
        {/* Right Eye Glass */}
        <circle
          ref={rightEyeRef}
          cx="165"
          cy="140"
          r="18"
          fill="white"
          stroke="#102A63"
          strokeWidth="3"
        />
        {/* Glasses Bridge */}
        <path d="M 153 140 L 147 140" stroke="#102A63" strokeWidth="3" />

        {/* Dynamic Pupils (Move relative to mouse) */}
        <circle
          cx={135 + leftPupil.x}
          cy={140 + leftPupil.y}
          r="5"
          fill="#102A63"
        />
        <circle
          cx={165 + rightPupil.x}
          cy={140 + rightPupil.y}
          r="5"
          fill="#102A63"
        />

        {/* Nose & Smile */}
        <path
          d="M 150 152 L 148 158 H 152"
          stroke="#102A63"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 142 168 Q 150 175 158 168"
          stroke="#102A63"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Shirt / Shoulders */}
        <path
          d="M 115 220 Q 150 205 185 220 L 205 260 H 95 Z"
          fill="#F28BB5"
          stroke="#102A63"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};

export default EyeTrackingAvatar;

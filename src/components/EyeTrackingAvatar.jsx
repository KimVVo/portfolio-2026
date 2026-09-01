import { useState, useEffect, useRef } from "react";

const EyeTrackingAvatar = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const containerRef = useRef(null);

  const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 });
  const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 });

  // Parallax translation for the body and shadow offset
  const [bodyOffset, setBodyOffset] = useState({ x: 0, y: 0 });
  const [shadowOffset, setShadowOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // 1. Calculate Eye Tracking
      const calculateEyeOffset = (ref) => {
        if (!ref.current) return { x: 0, y: 0 };
        const rect = ref.current.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const distance = Math.hypot(e.clientX - eyeX, e.clientY - eyeY);
        const radius = Math.min(distance, 4.5);

        return {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        };
      };

      setLeftPupil(calculateEyeOffset(leftEyeRef));
      setRightPupil(calculateEyeOffset(rightEyeRef));

      // 2. Calculate Body Parallax & Dynamic Shadow Shift
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Normalized distance from center (-1 to 1)
        const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
        const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

        // Limit maximum shift in pixels
        const maxBodyShift = 12;
        const maxShadowShift = 8;

        setBodyOffset({
          x: Math.max(
            -maxBodyShift,
            Math.min(maxBodyShift, deltaX * maxBodyShift),
          ),
          y: Math.max(
            -maxBodyShift,
            Math.min(maxBodyShift, deltaY * maxBodyShift),
          ),
        });

        // Shadow moves inversely to create height/depth relative to light source
        setShadowOffset({
          x: Math.max(
            -maxShadowShift,
            Math.min(maxShadowShift, -deltaX * maxShadowShift),
          ),
          y: Math.max(
            -maxShadowShift,
            Math.min(maxShadowShift, -deltaY * maxShadowShift),
          ),
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center items-center">
      <svg
        className="w-64 md:w-80 lg:w-96 drop-shadow-md"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Breathing Animation Style */}
        <style>{`
          @keyframes breathe {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
          }
          .animate-breathing-shirt {
            animation: breathe 3.5s ease-in-out infinite;
            transform-origin: center bottom;
          }
        `}</style>

        {/* Highlight Outer Double Rings */}
        <circle
          cx="150"
          cy="150"
          r="142"
          stroke="#8ED3DC"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="150"
          cy="150"
          r="136"
          stroke="#8ED3DC"
          strokeWidth="2"
          fill="none"
        />

        {/* Circular Background Card */}
        <circle cx="150" cy="150" r="130" fill="white" />

        {/* Clip content to inside the circle */}
        <g clipPath="url(#avatar-clip)">
          {/* Dynamic Interactive Body Shadow */}
          <ellipse
            cx={150 + shadowOffset.x}
            cy={275 + shadowOffset.y}
            rx="75"
            ry="18"
            fill="rgba(16, 42, 99, 0.12)"
          />

          {/* Body Group following Mouse Cursor */}
          <g
            style={{
              transform: `translate(${bodyOffset.x}px, ${bodyOffset.y}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Hair Back */}
            <path
              d="M 80 130 C 60 210, 80 270, 110 300 L 190 300 C 220 270, 240 210, 220 130 C 210 60, 90 60, 80 130 Z"
              fill="#2D2321"
            />

            {/* Neck Base */}
            <path d="M 132 190 H 168 V 235 H 132 Z" fill="#F6C3A7" />

            {/* Face Base */}
            <path
              d="M 105 130 C 105 85, 195 85, 195 130 C 195 185, 180 205, 150 205 C 120 205, 105 185, 105 130 Z"
              fill="#F6C3A7"
            />

            {/* Front Hair / Framing */}
            <path
              d="M 150 95 C 125 95, 100 115, 95 155 C 90 195, 115 235, 120 270 C 110 240, 100 200, 108 160 C 115 125, 135 105, 150 95 Z"
              fill="#3B2E2A"
            />
            <path
              d="M 150 95 C 175 95, 200 115, 205 155 C 210 195, 185 235, 180 270 C 190 240, 200 200, 192 160 C 185 125, 165 105, 150 95 Z"
              fill="#3B2E2A"
            />

            {/* Eyebrows */}
            <path
              d="M 122 133 Q 134 127 142 132"
              stroke="#2D2321"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 158 132 Q 166 127 178 133"
              stroke="#2D2321"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            {/* Eye Outer Whites */}
            <ellipse
              ref={leftEyeRef}
              cx="134"
              cy="144"
              rx="10"
              ry="8"
              fill="white"
            />
            <ellipse
              ref={rightEyeRef}
              cx="166"
              cy="144"
              rx="10"
              ry="8"
              fill="white"
            />

            {/* Dynamic Pupils */}
            <circle
              cx={134 + leftPupil.x}
              cy={144 + leftPupil.y}
              r="4.5"
              fill="black"
            />
            <circle
              cx={166 + rightPupil.x}
              cy={144 + rightPupil.y}
              r="4.5"
              fill="black"
            />

            {/* Nose & Smile */}
            <path
              d="M 147 156 Q 150 160 153 156"
              stroke="#D89A7E"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 136 172 Q 150 182 164 172"
              stroke="#2D2321"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Top / Clothes with Animated Breathing Class */}
            <path
              className="animate-breathing-shirt"
              d="M 100 230 Q 150 245 200 230 L 220 300 H 80 Z"
              fill="#F28BB5"
              stroke="#2D2321"
              strokeWidth="2.5"
            />
          </g>
        </g>

        {/* Clip Path Definition */}
        <defs>
          <clipPath id="avatar-clip">
            <circle cx="150" cy="150" r="130" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default EyeTrackingAvatar;

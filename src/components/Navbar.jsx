import { House, Folder, Smile, BookOpen, Camera } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/", icon: House, color: "bg-[#B7A4E5]" },

  { name: "About", href: "/about", icon: Smile, color: "bg-[#CDECCF]" },
  { name: "Projects", href: "/projects", icon: Folder, color: "bg-[#F28BB5]" },
  {
    name: "Experience",
    href: "/experience",
    icon: BookOpen,
    color: "bg-[#FFF0A8]",
  },
  { name: "Contact", href: "/contact", icon: Camera, color: "bg-[#FFAA8A]" },
];

const Navbar = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="fixed bottom-5 left-1/2 z-50 w-[90%] max-w-3xl -translate-x-1/2">
      <div className="relative flex h-14 items-center justify-around rounded-xl border-2 border-[#102A63] bg-[#8ED3DC] shadow-[0_5px_0_#102A63]">
        {navItems.map((item) => {
          const Icon = item.icon;

          // Determine active state using current browser route
          const isActive = location.pathname === item.href;
          const isHovered = hovered === item.name;

          return (
            <div
              key={item.name}
              className="relative flex h-full flex-1 items-center justify-center"
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Label */}
              {(isActive || isHovered) && (
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium font-mono text-[#182D68]">
                  {item.name}
                </div>
              )}

              {/* Icon Link */}
              <Link
                to={item.href}
                className={`
                  absolute flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#102A63] transition-all duration-200
                  ${item.color}
                  ${
                    isActive || isHovered
                      ? "-top-4 shadow-[0_3px_0_#102A63]"
                      : "top-1/2 -translate-y-1/2"
                  }
                `}
              >
                <Icon size={26} strokeWidth={2} className="text-[#102A63]" />
              </Link>

              {/* Active Indicator Dot */}
              {isActive && (
                <span className="absolute bottom-1 h-1.5 w-1.5 rounded-full bg-[#102A63]" />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

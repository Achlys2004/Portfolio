import { useEffect, useState } from "react";

// id,size,x,y,opacity,animationDuration
// id,size,x,y,opacity,animationDuration

// Stars
export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    setIsDark(document.documentElement.classList.contains("dark"));

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,

        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  // Meteors
  const generateMeteors = () => {
    const numberOfMeteors = 6;

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.2,
        delay: Math.random() * 3,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* DARK THEME STARS - Original white styling */}
      {isDark &&
        stars.map((star) => (
          <div
            key={`dark-star-${star.id}`}
            className="star animate-pulse-subtle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}

      {/* LIGHT THEME STARS - Colorful styling */}
      {!isDark &&
        stars.map((star) => {
          const lightColors = [
            "#3B82F6",
            "#9333EA",
            "#EC4899",
            "#06B6D4",
            "#10B981",
            "#F59E0B",
            "#EF4444",
          ];
          const color = lightColors[star.id % lightColors.length];

          return (
            <div
              key={`light-star-${star.id}`}
              className="absolute rounded-full animate-pulse-subtle-light"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: star.opacity,
                animationDuration: `${star.animationDuration}s`,
                backgroundColor: color,
                boxShadow: `0 0 8px ${color}`,
              }}
            />
          );
        })}

      {/* DARK THEME METEORS - Original white styling */}
      {isDark &&
        meteors.map((meteor) => (
          <div
            key={`dark-meteor-${meteor.id}`}
            className="meteor animate-meteor"
            style={{
              width: `${meteor.size * 30}px`,
              height: `${meteor.size * 1.5}px`,
              left: `${meteor.x}%`,
              top: `${meteor.y}%`,
              animationDelay: meteor.delay,
              animationDuration: `${meteor.animationDuration}s`,
            }}
          />
        ))}

      {/* LIGHT THEME METEORS - Colorful styling */}
      {!isDark &&
        meteors.map((meteor) => {
          const meteorColors = [
            { bg: "#3B82F6", shadow: "#3B82F6" },
            { bg: "#9333EA", shadow: "#9333EA" },
            { bg: "#EC4899", shadow: "#EC4899" },
            { bg: "#06B6D4", shadow: "#06B6D4" },
            { bg: "#10B981", shadow: "#10B981" },
          ];
          const color = meteorColors[meteor.id % meteorColors.length];

          return (
            <div
              key={`light-meteor-${meteor.id}`}
              className="absolute animate-meteor-light"
              style={{
                width: `${meteor.size * 30}px`,
                height: `${meteor.size * 1.5}px`,
                left: `${meteor.x}%`,
                top: `${meteor.y}%`,
                animationDuration: `${meteor.animationDuration}s`,
                background: `linear-gradient(to right, ${color.bg} 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)`,
                boxShadow: `0 0 10px ${color.shadow}`,
                borderRadius: "50px",
                transform: "rotate(215deg)",
                opacity: 1,
              }}
            />
          );
        })}
    </div>
  );
};

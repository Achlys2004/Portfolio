import { useEffect, useState } from "react";

// id,size,x,y,opacity,animationDuration
// id,size,x,y,opacity,animationDuration

// Stars
export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
        startX: Math.random() * 100,
        startY: -10,
        animationDelay: Math.random() * 8,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars - Different appearance for light/dark themes */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-pulse-subtle 
                     bg-blue-400/60 dark:bg-white/80
                     shadow-sm dark:shadow-blue-200/50"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            boxShadow:
              "inset 0 0 2px rgba(255,255,255,0.8), 0 0 4px rgba(59,130,246,0.3)",
          }}
        />
      ))}

      {/* Meteors - More prominent in light theme, very prominent in dark */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute meteor animate-meteor
                     bg-gradient-to-r from-blue-400/70 to-transparent
                     dark:from-blue-400/80 dark:to-transparent
                     opacity-80 dark:opacity-80"
          style={{
            width: `${meteor.size * 35}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.startX}%`,
            top: `${meteor.startY}%`,
            animationDelay: `${meteor.animationDelay}s`,
            animationDuration: `${meteor.animationDuration}s`,
            borderRadius: "50px",
            transform: "rotate(215deg)",
            boxShadow: "0 0 8px rgba(59, 130, 246, 0.4)",
          }}
        />
      ))}
    </div>
  );
};

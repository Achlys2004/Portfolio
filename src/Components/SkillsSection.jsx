import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Python", level: 70, category: "Programming" },
  { name: "C Language", level: 45, category: "Programming" },
  { name: "CPP Language", level: 5, category: "Programming" },

  // Machine Learning / AI
  { name: "Machine Learning", level: 50, category: "ML-DL" },
  { name: "Deep Learning", level: 45, category: "ML-DL" },

  // Backend
  { name: "Node.js", level: 30, category: "Backend" },
  { name: "Express.js", level: 35, category: "Backend" },
  { name: "FastAPI", level: 35, category: "Backend" },

  // Frontend
  { name: "HTML/CSS", level: 49, category: "Frontend" },
  { name: "React/Svelte", level: 55, category: "Frontend" },

  // DDatabase
  { name: "MongoDB", level: 40, category: "Database" },
  { name: "PostgreSQL", level: 38, category: "Database" },
  { name: "SQL", level: 60, category: "Database" },

  // Tools
  { name: "Git/GitHub", level: 65, category: "Tools" },
  { name: "VS Code", level: 75, category: "Tools" },
];

const categories = [
  "all",
  "Programming",
  "ML-DL",
  "Backend",
  "Frontend",
  "Database",
  "Tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full border transition-colors duration-300",
                activeCategory === category
                  ? "border-primary bg-primary text-white"
                  : "border-border hover:border-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills
            .filter(
              (skill) =>
                activeCategory === "all" || skill.category === activeCategory
            )
            .map((skill, key) => (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-muted-foreground">
                    {skill.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

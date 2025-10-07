import { useState, useCallback } from "react";
import { ProjectModal } from "./ProjectModal";
import { ArrowRight, Github } from "lucide-react";

// Type = ["Academic","Hackathon","Personal"]
//
const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "Modern, responsive portfolio website built with React and Vite, featuring dark/light themes and interactive components.",
    features: [
      "Developed <strong style='color: white;'>responsive</strong> single-page application using <strong style='color: white;'>React</strong> 19 and <strong style='color: white;'>Vite</strong>",
      "Implemented custom Space theme system with smooth transitions",
      "Built interactive components including project modals and resume viewer",
      "Created animated star background and smooth scrolling navigation",
      "Designed with <strong style='color: white;'>Tailwind CSS</strong> for consistent, modern styling",
      "Integrated <strong style='color: white;'>Lucide React</strong> icons for clean, scalable iconography",
    ],
    type: "Personal",
    image: "/ProjectPics/Project_Portfolio_Img.png",
    tags: ["react", "vite", "tailwind-css", "javascript", "responsive-design"],
    gitUrl: "https://github.com/Achlys2004/Portfolio",
  },
  {
    id: 2,
    title: "Kube-9: A Distributed Systems Cluster Simulation Framework",
    description:
      "A comprehensive Kubernetes-like distributed system simulation built with Python.",
    features: [
      "Architected a <strong style='color: white;'>distributed cluster simulation</strong> using <strong style='color: white;'>Docker</strong> to containerize master/worker nodes, incorporating a heartbeat mechanism for <strong style='color: white;'>real-time monitoring</strong>",
      "Engineered a <strong style='color: white;'>pod deployment</strong> and lifecycle management system, supporting custom configurations, persistent volume mounts, and efficient node-based tracking",
      "Developed an interactive <strong style='color: white;'>Streamlit</strong> dashboard for <strong style='color: white;'>real-time cluster state visualization</strong> and implemented automated recovery protocols for failed nodes and pods to ensure high availability",
      "Implemented comprehensive <strong style='color: white;'>node failure detection</strong> and pod rescheduling algorithms for system resilience",
      "Built <strong style='color: white;'>container orchestration</strong> capabilities with advanced <strong style='color: white;'>networking</strong> and <strong style='color: white;'>resource management</strong> features",
    ],
    type: "Academic",

    image: "/projects/kube9.png",
    tags: ["python", "docker", "distributed-systems", "streamlit"],
    gitUrl: "https://github.com/Achlys2004/Kube-9_A-Kubernetes-Mimic",
  },
  {
    id: 3,
    title: "Non-Invasive Online Proctor",
    description:
      "Advanced proctoring system combining behavioral analysis with real-time monitoring.",
    features: [
      "Engineered a lightweight <strong style='color: white;'>Go</strong> client to non-intrusively monitor user activity and system events within a simulated online examination environment",
      "Designed a <strong style='color: white;'>Python</strong>-based AI module utilizing an <strong style='color: white;'>LSTM</strong> network for <strong style='color: white;'>real-time behavioral analysis</strong> to accurately identify and flag potential academic integrity violations",
      "Architected an event-driven pipeline to efficiently stream client-side data to the AI analysis module and persistent logging services",
      "Implemented intelligent flagging system for suspicious activity detection with configurable sensitivity thresholds",
      "Built comprehensive <strong style='color: white;'>monitoring dashboard</strong> for <strong style='color: white;'>real-time examination oversight</strong> and incident reporting",
      "Integrated <strong style='color: white;'>machine learning</strong> models for <strong style='color: white;'>pattern recognition</strong> and <strong style='color: white;'>anomaly detection</strong> in user behavior",
    ],
    type: "Hackathon",
    image: "/projects/non-invasive-proctoring.png",
    tags: ["python", "go", "machine-learning", "lstm", "behavioral-analysis"],
    gitUrl: "https://github.com/Achlys2004/Non_Invasive_Proctoring_System",
  },
  {
    id: 4,
    title: "Yet Another Distributed Task Queue (YADTQ)",
    description:
      "Scalable distributed task scheduler leveraging modern big data technologies.",
    features: [
      "Developed a scalable <strong style='color: white;'>distributed task scheduler</strong> utilizing <strong style='color: white;'>Kafka</strong> for reliable <strong style='color: white;'>message brokering</strong> and <strong style='color: white;'>Redis</strong> for high-performance <strong style='color: white;'>state management</strong>",
      "Implemented a dynamic <strong style='color: white;'>scheduling algorithm</strong> that allocates tasks based on real-time worker availability, optimizing for <strong style='color: white;'>load balancing</strong> and resource utilization",
      "Engineered a robust <strong style='color: white;'>fault-tolerance mechanism</strong> featuring heartbeat-based failure detection and automated task reallocation to guarantee operational continuity",
      "Built comprehensive task queue management with priority scheduling and deadline enforcement",
      "Implemented distributed worker node coordination with automatic <strong style='color: white;'>load balancing</strong> and resource optimization",
      "Created <strong style='color: white;'>real-time monitoring dashboard</strong> for task execution tracking and system performance metrics",
    ],
    type: "Academic",
    image: "/projects/task-distributor.png",
    tags: ["python", "kafka", "redis", "distributed-systems", "big-data"],
    gitUrl: "https://github.com/Accuracy-exe/Task-Distributor-Big-Data-Project",
  },
  {
    id: 5,
    title: "Automated Time-Table Scheduler",
    description:
      "Object-oriented time-table generator for academic scheduling in Java.",
    features: [
      "Implemented <strong style='color: white;'>object-oriented design</strong> principles for scalable scheduling system",
      "Developed sophisticated <strong style='color: white;'>scheduling algorithms</strong> for conflict-free timetable generation",
      "Created automated generation system to minimize manual intervention",
      "Built comprehensive constraint handling for <strong style='color: white;'>academic scheduling</strong> requirements",
    ],
    type: "Academic",
    image: "/projects/time-table-scheduler.png",
    tags: ["java", "scheduling", "oop", "algorithms"],
    gitUrl: "https://github.com/Achlys2004/Automated-Time-Table-Scheduler",
  },
  {
    id: 6,
    title: "Restaurant Management System",
    description:
      "Python-based database management and software engineering project.",
    features: [
      "Engineered a comprehensive, full-stack restaurant management system using <strong style='color: white;'>Python</strong> and <strong style='color: white;'>MySQL</strong> to automate and streamline core operational tasks",
      "Designed and integrated core modules for table reservations, order processing, and automated billing to enhance service efficiency",
      "Developed an intuitive <strong style='color: white;'>command-line interface (CLI)</strong> and a reporting module to generate operational insights, aiding in management decision-making",
      "Implemented comprehensive staff management and tracking system with <strong style='color: white;'>role-based access control</strong>",
      "Built dynamic menu management with full <strong style='color: white;'>CRUD</strong> operations and inventory tracking",
      "Created efficient order processing workflows with <strong style='color: white;'>real-time status updates</strong> and payment integration",
      "Developed both <strong style='color: white;'>CLI</strong> and <strong style='color: white;'>GUI interfaces</strong> for enhanced user experience and accessibility",
    ],
    type: "Academic",
    image: "/projects/restaurant-management.png",
    tags: ["python", "dbms", "software-engineering", "crud"],
    gitUrl: "https://github.com/Achlys2004/Restaurant-Management-System",
  },
  {
    id: 7,
    title: "Smart Electric Grid Fault Detection System",
    description:
      "AI-powered fault detection and localization system for smart grids using LSTM Autoencoder and Reinforcement Learning within an Edge-to-Cloud architecture.",
    features: [
      "Developed <strong style='color: white;'>time-series anomaly detection</strong> model using <strong style='color: white;'>LSTM Autoencoder</strong> with <strong style='color: white;'>Optuna</strong>-based hyperparameter tuning",
      "Implemented robust anomaly thresholding via <strong style='color: white;'>Median Absolute Deviation (MAD)</strong> and dynamic RL-based recalibration",
      "Integrated <strong style='color: white;'>forecasting engine (STL + ARIMA)</strong> for trend and seasonal drift handling",
      "Built a <strong style='color: white;'>feedback loop</strong> using <strong style='color: white;'>DQN (Deep Q-Network)</strong> <strong style='color: white;'>Reinforcement Learning</strong> to reduce false positives and negatives",
      "Developed a personalized, user-friendly <strong style='color: white;'>dashboard UI</strong> for fault visualization and live system feedback",
    ],
    type: "Capstone",
    image: "/ProjectPics/Project_GridFault_Img.png",
    tags: [
      "python",
      "machine-learning",
      "deep learning",
      "lstm",
      "forecasting",
      "reinforcement-learning",
      "time-series",
    ],
    // gitUrl:
    //   "https://github.com/Achlys2004/Electric-Grid-Fault-Detection-System",
  },
];

export const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleProjectClick = (project) => {
    const index = projects.findIndex((p) => p.id === project.id);
    setCurrentProjectIndex(index);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleNavigateProject = useCallback(
    (direction) => {
      const newIndex =
        direction === "next"
          ? (currentProjectIndex + 1) % projects.length
          : (currentProjectIndex - 1 + projects.length) % projects.length;

      setCurrentProjectIndex(newIndex);
      setSelectedProject(projects[newIndex]);
    },
    [currentProjectIndex]
  );

  const handleGitHubClick = (gitUrl, event) => {
    event.stopPropagation(); // Prevent modal from opening
    if (gitUrl) {
      window.open(gitUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="relative mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <a
            className="cosmic-button w-fit items-center gap-2 text-sm absolute top-24 right-0 hidden md:flex"
            target="_blank"
            href="https://github.com/Achlys2004"
          >
            <Github size={16} />
            View GitHub
            <ArrowRight size={14} />
          </a>
          <div className="flex justify-center mt-4 md:hidden">
            <a
              className="cosmic-button w-fit flex items-center gap-2 text-sm"
              target="_blank"
              href="https://github.com/Achlys2004"
            >
              <Github size={16} />
              View GitHub
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {" "}
          A selection of projects demonstrating my academic and practical work,
          each focused on solving real-world problems through structured
          development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col cursor-pointer h-full relative"
              onClick={() => handleProjectClick(project)}
            >
              <div className="h-48 overflow-hidden">
                {" "}
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = "/ProjectPics/Fallback.PNG";
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm font-semibold border border-border rounded-full bg-secondary/10 text-foreground/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* GitHub Icon - Bottom Left */}
              {project.gitUrl && (
                <button
                  onClick={(event) => handleGitHubClick(project.gitUrl, event)}
                  className="absolute bottom-4 left-2 p-2 bg-background/80 hover:bg-background rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-border/30 z-10"
                  aria-label="View on GitHub"
                >
                  <Github className="h-4 w-4 text-foreground" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNavigate={handleNavigateProject}
        currentIndex={currentProjectIndex}
        totalProjects={projects.length}
      />
    </section>
  );
};

import { useState } from "react";
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
      "Developed responsive single-page application using React 19 and Vite",
      "Implemented custom Space theme system with smooth transitions",
      "Built interactive components including project modals and resume viewer",
      "Created animated star background and smooth scrolling navigation",
      "Designed with Tailwind CSS for consistent, modern styling",
      "Integrated Lucide React icons for clean, scalable iconography",
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
      "Engineered distributed system simulation managing master/worker nodes as Docker containers",
      "Implemented real-time health monitoring via heartbeat mechanisms",
      "Built pod deployment and tracking with container configurations and volume mounts",
      "Designed automated node recovery and pod rescheduling on failure events",
      "Created live Streamlit dashboard for cluster state visualization and pod-node mapping",
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
      "Developed client-side application in Go for comprehensive user activity monitoring",
      "Engineered AI module using Python and LSTM networks for real-time behavioral analysis",
      "Implemented intelligent flagging system for suspicious activity detection",
      "Built event-driven architecture for capturing and distributing client-side events",
      "Integrated AI analysis and logging services for comprehensive monitoring",
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
      "Created distributed task scheduler using Kafka Brokers for efficient message passing",
      "Implemented Redis backend system for robust state management",
      "Designed dynamic scheduling algorithm based on real-time worker node availability",
      "Built comprehensive failure-handling mechanisms with heartbeat monitoring",
      "Enabled dynamic task handover to ensure seamless operation during failures",
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
      "Implemented object-oriented design principles for scalable scheduling system",
      "Developed sophisticated scheduling algorithms for conflict-free timetable generation",
      "Created automated generation system to minimize manual intervention",
      "Built comprehensive constraint handling for academic scheduling requirements",
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
      "Developed comprehensive staff management and tracking system",
      "Implemented dynamic menu management with CRUD operations",
      "Built efficient order processing and tracking workflows",
      "Integrated database operations with optimized query performance",
      "Created both CLI and UI interfaces for enhanced user experience",
    ],
    type: "Academic",
    image: "/projects/restaurant-management.png",
    tags: ["python", "dbms", "software-engineering", "crud"],
    gitUrl: "https://github.com/Achlys2004/Restaurant-Management-System",
  },
];

export const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleGitHubClick = (gitUrl, event) => {
    event.stopPropagation(); // Prevent modal from opening
    if (gitUrl) {
      window.open(gitUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
      />
    </section>
  );
};

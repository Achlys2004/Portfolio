import {
  X,
  Github,
  ExternalLink,
  Code,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect } from "react";

export const ProjectModal = ({
  project,
  isOpen,
  onClose,
  onNavigate,
  currentIndex,
  totalProjects,
}) => {
  if (!isOpen || !project) return null;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Only handle keyboard events when modal is open
      if (!isOpen) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onNavigate("prev");
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        onNavigate("next");
      } else if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onNavigate, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Navigation Arrows - Outside Modal */}
      <button
        onClick={() => onNavigate("prev")}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-background/80 hover:bg-background rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-border/30"
        aria-label="Previous project"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>

      <button
        onClick={() => onNavigate("next")}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-background/80 hover:bg-background rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-border/30"
        aria-label="Next project"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      <div className="relative bg-card rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden border border-border/50">
        {/* Project Counter */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/30">
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} of {totalProjects}
          </span>
        </div>

        {/* Close Button - Floating */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-background rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-border/30"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        {/* Content */}
        <div className="overflow-y-auto max-h-[95vh]">
          {/* Hero Section with Image and Title Overlay */}
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              onError={(e) => {
                e.target.src = "/ProjectPics/Fallback.PNG";
              }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-bold uppercase tracking-wide bg-primary/90 text-white rounded-full backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                {project.title}
              </h1>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* Main Content - Left Side */}
            <div className="lg:col-span-2 space-y-2">
              {/* Overview Card */}
              <div className="gradient-border p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    Project Overview
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg text-left">
                  {project.description}
                </p>
              </div>

              {/* Features Card */}
              {project.features && (
                <div className="gradient-border p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      Key Features
                    </h2>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 marker:text-primary text-muted-foreground text-left text-lg">
                    {Array.isArray(project.features) ? (
                      project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: feature }}
                        />
                      ))
                    ) : typeof project.features === "string" ? (
                      project.features
                        .split(".")
                        .filter((feature) => feature.trim())
                        .map((feature, index) => (
                          <li
                            key={index}
                            className="leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html:
                                feature.trim() + (feature.trim() ? "." : ""),
                            }}
                          />
                        ))
                    ) : (
                      <li
                        className="leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: String(project.features),
                        }}
                      />
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar - Right Side */}
            <div className="space-y-6">
              {/* Action Buttons Card */}
              <div className="gradient-border p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Links
                </h3>
                <div className="space-y-3">
                  {project.gitUrl && (
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full cosmic-button flex items-center justify-center gap-2 py-3"
                    >
                      <Github className="h-4 w-4" />
                      View Source Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-3 rounded-full border border-border bg-background/50 hover:bg-card text-foreground font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Project Stats Card */}
              <div className="gradient-border p-6 rounded-xl">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Project Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{project.type} Project</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Code className="h-4 w-4 text-primary" />
                    <span>{project.tags.length} Technologies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { ResumeViewer } from "./ResumeViewer";
import { Briefcase, User, Cpu } from "lucide-react";

export const AboutMe = () => {
  const [isResumeViewerOpen, setIsResumeViewerOpen] = useState(false);

  return (
    <section id="about" className="py-24 pc-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate and Hardworking WebDev who's also learning Machine
              Learning
            </h3>
            <p className="text-muted-foreground">
              Although I have Zero Experience as a FTE, I did do a 2 month
              Intersnship where me and my team is building a tool that can make
              work flow(messaging) more accessible and in one place while giving
              you a summary of your emails and messages.
            </p>

            <p className="text-muted-foreground">
              I am passionate about learning more about solving problmes and
              finding elegant solutions to the problems we face. I am constantly
              trying to learn new tech and techniques to stay ahead of the fast
              moving tech world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <button
                onClick={() => setIsResumeViewerOpen(true)}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-4 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and accessible frontends using modern
                    frameworks with a focus on clean UI/UX.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Applying ML for anomaly detection, behavioral analysis, and
                    intelligent systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Deep Learning</h4>
                  <p className="text-muted-foreground">
                    Leveraging neural networks and LSTM models for predictive
                    analytics and real-time decision making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResumeViewer
        isOpen={isResumeViewerOpen}
        onClose={() => setIsResumeViewerOpen(false)}
      />
    </section>
  );
};

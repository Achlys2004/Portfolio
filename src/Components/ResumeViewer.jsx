import { useState } from "react";
import { X, Download, Eye } from "lucide-react";
import { cn } from "../lib/utils";

const resumeFiles = [
  {
    name: "Resume with Photo",
    filename: "Aathil Nishad Resume_latest_with pic.pdf",
    path: "/Files/Aathil Nishad Resume_latest_with pic.pdf",
  },
  {
    name: "Resume without Photo",
    filename: "Aathil Nishad Resume_latest.pdf",
    path: "/Files/Aathil Nishad Resume_latest.pdf",
  },
];

export const ResumeViewer = ({ isOpen, onClose }) => {
  const [selectedResume, setSelectedResume] = useState(null);

  if (!isOpen) return null;

  const handleDownload = (resume) => {
    const link = document.createElement("a");
    link.href = resume.path;
    link.download = resume.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (resume) => {
    setSelectedResume(resume);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md">
      <div className="bg-card rounded-lg shadow-2xl max-w-7xl w-full max-h-[95vh] m-4 overflow-hidden border border-border">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-card">
          <h2 className="text-2xl font-bold text-foreground">
            Resume <span className="text-primary">Viewer</span>
          </h2>
          <button
            onClick={onClose}
            className={cn(
              "p-2 rounded-full transition-all duration-300",
              "hover:bg-primary/10 hover:scale-110 active:scale-95",
              "text-foreground/80 hover:text-primary"
            )}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row h-[calc(95vh-80px)]">
          {/* File List */}
          <div className="lg:w-1/4 p-6 border-r border-border bg-background/30">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Available <span className="text-primary">Resumes</span>
            </h3>
            <div className="space-y-3">
              {resumeFiles.map((resume, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-4 border border-border rounded-lg transition-all duration-300",
                    "card-hover bg-card/50 hover:bg-card hover:border-primary/30",
                    selectedResume === resume &&
                      "bg-card border-primary/50 shadow-lg"
                  )}
                >
                  <h4 className="font-medium mb-3 text-foreground">
                    {resume.name}
                  </h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleView(resume)}
                      className={cn(
                        "cosmic-button text-sm flex items-center gap-2",
                        selectedResume === resume &&
                          "shadow-[0_0_10px_rgba(139,92,246,0.7)]"
                      )}
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                    <button
                      onClick={() => handleDownload(resume)}
                      className={cn(
                        "px-4 py-2 text-sm border border-border rounded-full min-w-[120px]",
                        "text-foreground/80 hover:text-primary hover:border-primary/50",
                        "transition-all duration-300 hover:scale-105 active:scale-95",
                        "bg-background/50 hover:bg-card hover:shadow-lg flex items-center justify-center gap-2"
                      )}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="lg:w-3/4 p-6 flex items-center justify-center">
            {selectedResume ? (
              <iframe
                src={selectedResume.path}
                className="w-full h-full border border-border rounded-lg"
                title={`Preview of ${selectedResume.name}`}
              />
            ) : (
              <div className="text-center text-muted-foreground">
                <Eye className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Select a resume to preview</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

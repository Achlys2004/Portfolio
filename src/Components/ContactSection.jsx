import { Mail, Linkedin, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Ready to collaborate or discuss opportunities? I'd love to hear from
            you. Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <MessageSquare className="h-8 w-8 text-primary mx-auto md:mx-0 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Let's Talk</h3>
              <p className="text-muted-foreground">
                Whether you want to discuss something or just want to say hello,
                feel free to reach out through any of these channels.
              </p>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {/* Email Contact */}
            <div className="group p-6 rounded-xl bg-card/50 hover:bg-card transition-all duration-300 border border-border/50 hover:border-primary/30">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <a
                    href="mailto:aathilnishad@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    aathilnishad@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Contact */}
            <div className="group p-6 rounded-xl bg-card/50 hover:bg-card transition-all duration-300 border border-border/50 hover:border-primary/30">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/aathil-nishad-459aa5299/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

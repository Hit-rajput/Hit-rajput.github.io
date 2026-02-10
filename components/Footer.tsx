import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-4 mt-auto border-t border-glass-border backdrop-blur-sm bg-background/50">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/Hit-rajput"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-main hover:scale-110 transition-all duration-300 p-2"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/hitesh-rajput-4467b1b9/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-primary hover:scale-110 transition-all duration-300 p-2"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:hchauhan@laurentian.ca"
            aria-label="Email"
            className="text-text-muted hover:text-accent-glow hover:scale-110 transition-all duration-300 p-2"
          >
            <Mail size={24} />
          </a>
        </div>
        <div className="text-text-muted/40 text-[10px] tracking-[0.2em]">
          © 2023 HITESH. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-gray-300 py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">
              Awosusi Timilehin
            </h3>
            <p className="text-muted-foreground">
              Frontend Developer passionate about creating beautiful,
              functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-purple-400">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="#about"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-purple-400">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">awosusitimilehin16@gmail.com</p>
              <p className="text-gray-400">Lagos, Nigeria</p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Awosusi Timilehin. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-purple-400" />
            <span>and lots of coffee</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

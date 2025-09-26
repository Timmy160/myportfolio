import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";


  const roles = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Engineer",
    "JavaScript Expert",
  ];


const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeoutSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, timeoutSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting ]);

  return (
    <section
    id="hero"
    className="min-h-screen flex items-center justify-center relative overflow-hidden mt-24"  
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="block text-white">Hi, I'm</span>
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Awosusi Timilehin
          </span>
        </h1>

        {/* Typewriter roles */}
        <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
          <span className="text-gray-400">I'm a </span>
          <span className="text-purple-500 ml-2 font-semibold min-w-[250px] text-left">
            {displayText}
            <span className="animate-pulse border-r-2 border-purple-500 ml-1" />
          </span>
        </div>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          I craft beautiful, responsive web experiences with modern technologies.
          Passionate about clean code, stunning UI, and seamless user experiences.
        </p>

       <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
  <a
    href="#projects"
    className="px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition"
  >
    View My Work
  </a>

  <a
    href="#contact"
    className="px-6 py-3 rounded-md border border-gray-400 text-gray-300 hover:text-white hover:border-white transition"
  >
    Get In Touch
  </a>
</div>


        {/* Social icons */}
        <div className="flex justify-center space-x-8">
          <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-purple-500" />
      </div>
    </section>
  );
};

export default Hero;

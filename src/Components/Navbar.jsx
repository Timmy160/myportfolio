import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[hsl(240_10%_3.9%)]/90 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with purple → blue gradient */}
          
          <a
            href="#hero"
            className="text-xl font-bold bg-gradient-to-r from-[hsl(263_70%_50%)] to-blue-500 bg-clip-text text-transparent"
          >
            Awosusi Timilehin
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  relative
                  text-[hsl(0_0%_70%)]
                  hover:text-[hsl(0_0%_98%)]
                  transition-colors
                  duration-300
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-[1px]
                  after:w-full
                  after:origin-left
                  after:scale-x-0
                  after:bg-[hsl(263_70%_50%)]
                  after:transition-transform
                  after:duration-300
                  hover:after:scale-x-100
                "
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-4 py-2 rounded-md bg-gradient-to-r from-[hsl(263_70%_50%)] to-blue-500 text-white hover:opacity-90 transition"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[hsl(0_0%_70%)] hover:text-[hsl(0_0%_98%)] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-[hsl(240_10%_3.9%)]/95">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    relative
                    text-[hsl(0_0%_70%)]
                    hover:text-[hsl(0_0%_98%)]
                    transition-colors
                    duration-300
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:bottom-0
                    after:h-[1px]
                    after:w-full
                    after:origin-left
                    after:scale-x-0
                    after:bg-[hsl(263_70%_50%)]
                    after:transition-transform
                    after:duration-300
                    hover:after:scale-x-100
                    py-2
                  "
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 rounded-md bg-gradient-to-r from-[hsl(263_70%_50%)] to-blue-500 text-white hover:opacity-90 transition text-center"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

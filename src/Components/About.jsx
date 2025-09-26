import { Code, Palette, Zap, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Palette,
      title: "Design-First",
      description: "Creating beautiful interfaces with attention to every detail"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and seamless user experiences"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Loving what I do and continuously learning new technologies"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gray-950 text-gray-100">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            About
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer with 3+ years of experience crafting
            digital experiences that users love. I believe great code and beautiful
            design go hand in hand.
          </p>
        </div>

        {/* Journey + Featured Card */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold mb-6 text-purple-400">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              Started my journey in web development back in 2021, fascinated by how
              code could bring designs to life. Since then, I've worked with amazing
              teams, shipped countless projects, and never stopped learning.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks,
              contributing to open source, or helping fellow developers in the community.
            </p>
            <div className="flex space-x-4 pt-4">
              <span className="text-3xl font-bold text-purple-500">20+</span>
              <span className="text-gray-400">
                Projects<br />Completed
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-2xl shadow-xl text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Code className="w-16 h-16 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Always Learning</h4>
              <p className="text-gray-200">
                Staying up-to-date with the latest technologies and best practices
              </p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 shadow-lg text-center transition-transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-purple-400">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
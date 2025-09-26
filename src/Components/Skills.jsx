import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
        { name: "Next.js", level: 85, color: "from-gray-600 to-gray-400" },
        { name: "Vue.js", level: 80, color: "from-green-500 to-emerald-500" },
      ],
    },
    {
      title: "Styling",
      skills: [
        { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-blue-500" },
        { name: "Styled Components", level: 85, color: "from-pink-500 to-rose-500" },
        { name: "SASS/SCSS", level: 80, color: "from-pink-600 to-purple-600" },
        { name: "CSS3", level: 90, color: "from-orange-500 to-red-500" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, color: "from-orange-600 to-red-600" },
        { name: "Webpack", level: 75, color: "from-blue-700 to-indigo-700" },
        { name: "Jest", level: 80, color: "from-red-600 to-orange-600" },
        { name: "Figma", level: 85, color: "from-purple-500 to-pink-500" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-950 text-gray-100">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gray-900 rounded-xl p-6 shadow-lg transition-transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center text-purple-400">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${
                            categoryIndex * 0.2 + skillIndex * 0.1
                          }s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra Tech Pills */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React 18",
              "TypeScript 5",
              "Next.js 14",
              "Tailwind 3",
              "Framer Motion",
              "Three.js",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

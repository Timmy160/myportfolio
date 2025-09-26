import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import crowdlaunch from "../Images/crowdlaunch.png"
import Raft from "../Images/RaftImg.png"
import Winamp from "../Images/winamp.png"
import AiTeacha from "../Images/AiTeacha.png"



const Projects = () => {
  const projects = [
    {
      title: "CROWDLAUNCH",
      description: "CROWDLAUNCH is a modern Web platform designed to help creators, startups, and communities plan, fund, and launch projects collaboratively. It combines transparent crowdfunding mechanics with community-driven decision making, allowing backers to track progress and participate in launch milestones in real time",
      image: crowdlaunch,
      tags: ["React", "TypeScript", "Tailwind", "Solidity"],
      liveUrl: "https://crowdlaunch.vercel.app/",
      featured: true,
    },
    {
      title: "Raft Landing Page",
      description:
      "A clean, single-page website built to clearly showcase what Raft does. It presents Raft’s mission and key features with bold hero text, concise copy, and responsive design, giving visitors a quick understanding of the brand. While purely informational and non-interactive, the page uses smooth scrolling, balanced typography, and modern web styling to make the introduction professional and memorable.",
      image: Raft,
      tags: ["React", "Tailwind", ],
      liveUrl: "https://raft-landing-page.vercel.app",
      featured: true,
    },
    {
      title: "WinAnp Music App",
      description:
        "A modern, web-based music application built with React and Tailwind CSS. It integrates the Spotify and Google APIs to fetch rich music and video data, letting users stream songs and watch videos directly in the browser. The app includes powerful search functionality for artists, albums, and tracks, offering a seamless, responsive experience across devices.",
      image: Winamp,
      tags: ["React", "Taiwind", "API Integration"],
      liveUrl: "https://winamp-nu.vercel.app/",
      featured: false,
    },
    {
      title: "Ai Teacha",
      description:
        " An AI-powered platform designed to streamline everyday teaching tasks and enhance classroom efficiency. Built with React, TypeScript, Tailwind, and powered by OpenAI, it assists educators with lesson planning, content creation, and personalized student support helping teachers save time while boosting learning outcomes.",
      image: AiTeacha,
      tags: ["React", "Typescript", "Tailwind", "OpenAI"],
      liveUrl: "https://ai-teacha.vercel.app/",
      featured: false,
    },
    
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-gray-950 text-gray-100">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Featured {""}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
               Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-purple-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.liveUrl}
                    className="btn-gradient inline-flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>

                </div>
              </div>

              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="bg-gray-900 rounded-xl p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-900 rounded-xl p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/40"
              >
                <div className="space-y-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-gray-100">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex space-x-3">
                        <a
                          href={project.liveUrl}
                          className="text-gray-400 hover:text-purple-400 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <ArrowRight className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

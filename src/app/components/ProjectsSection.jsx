"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Algorithm Analyze AI Website",
    description: "Discover the complexity of your algorithm with the assistance of a specially trained machine learning model on our platform. Click the preview icon or visit the website: https://algorithm-analyze.herokuapp.com/.",
    image: "/images/projects/1.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kyryl-lebedin/algorithm_analyze",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Telegram Bot for Corporate Management",
    description: "The bot I developed with my outsourcing team was designed to streamline corporate routine processes for management in a private company. I have attached a copy of the repository (with sensitive information removed) along with a video of me demonstrating the bot above.",
    image: "/images/projects/2.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kyryl-lebedin/TelegramBotPortfolio",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Featured Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6"></div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

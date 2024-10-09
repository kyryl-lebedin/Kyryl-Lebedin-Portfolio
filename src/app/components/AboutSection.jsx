"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none pl-4">
        <li>
          <span className="font-bold">Python</span>
          <ul className="pl-4 list-disc">
            <li>Web Dev: Django, Flask, SQLAlchemy</li>
            <li>Data Science: Pandas, NumPy, matplotlib</li>
            <li>Machine Learning: scikit-learn, Keras, TensorFlow</li>
          </ul>
        </li>
        <li className="mt-4">
          <span className="font-bold">JavaScript and Frontend</span>
          <ul className="pl-4 list-disc">
            <li>Backend: Node.js, Express, REST API, CRUD</li>
            <li>Frontend: React, Redux, Bootstrap, html, css</li>
          </ul>
        </li>
        <li className="mt-4">
          <span className="font-bold">Other</span>
          <ul className="pl-4 list-disc">
            <li>DB: PostgreSQL, MySQL, NoSQL</li>
            <li>Project Management: Git, Slack, Jira, design patterns, SOLID, object-oriented programming</li>
            <li>Time Management: GTD, Zettelkasten</li>
          </ul>
        </li>
        <br></br>
        
          <p>Upon finishing my 2nd year at Durham University (summer 2025), I will have gained skills in C#, C, C++, and Haskell.</p>
        

      </ul>

      
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Durham University: 1st year average grade - 71% </li>
        <li>St John's School A levels: Math, Further Math, Physics. Finished the whole course in one year.</li>
        <li>Kyiv-Mohula Collegium, Ukraine, High School: Math, Further Math, Physics, Chemistry, Biology, History, English</li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "work_experience",
    content: (
      <div className="pl-4">
        <h3 className="font-bold text-lg">
          Telegram Bot Development for Corporate Management (2023-2024)
        </h3>
        <p className="mt-2">
          Worked as part of a freelance team for 14 months to develop and deploy
          a Telegram bot for a Ukrainian company. The bot was designed to
          optimize corporate routine processes for management, helping
          streamline tasks and improve efficiency.
        </p>
        <p className="mt-2">
          <span className="font-bold">Technologies used:</span>
          Python, my-telegram-bot, Docker, PostgreSQL, Google API, and various other tools.
        </p>
        <p className="mt-2">
          <span className="font-bold">Reference:</span> You can contact my team
          leader at: 
          <br></br>
          <a href="mailto:techrahovski@gmail.com" className="text-blue-500">
            techrahovski@gmail.com  
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>IBM Machine Learning with Python, with Honors</li>
        <li>IBM Introduction to Deep Learning & Neural Networks with Keras</li>
        <li>
          DeepLearning.AI, Stanford University Supervised Machine Learning:
          Regression and Classification - Andrew NG
        </li>
        <li>Ligency Team, Blockchain A-Z</li>
        <li>Denis Ivy, Django Complete Course</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am Kyryl Lebedin, a 2nd-year Computer Science student at the
            University of Durham. I have experience in Full Stack Web
            Development, with a strong focus on Backend development. I also have
            skills and passionate about Machine Learning, Deep Learning, Data
            Science, and Blockchain. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("work_experience")}
              active={tab === "work_experience"}
            >
              {" "}
              Work Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

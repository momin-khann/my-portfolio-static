"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills, experiences } from "@/constants/skill";
import { AppWrapper, MotionWrapper } from "@/components";
import Image from "next/image";

import "./skills.css";

const Skills = () => {
  return (
    <AppWrapper idName={"skills"} classNames={"app__whitebg"}>
      <MotionWrapper classNames={"app__skills"}>
        <h2 className="head-text">Skills & Experiences</h2>

        <div className="app__skills-container">
          <motion.div className="app__skills-list">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: "rgb(245,244,244)" }}
                >
                  <Image src={skill.icon} alt={skill.name} />
                </div>
                <p className="p-text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="app__skills-exp">
            {experiences.map((experience) => (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text-sm">{work.company}</p>
                      </motion.div>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionWrapper>
    </AppWrapper>
  );
};

export default Skills;

"use client";

import React from "react";
import { motion } from "framer-motion";
import AppWrap from "@/wrapper/AppWrap";
import Image from "next/image";
import { abouts } from "@/constants/about";

import "./about.css";

const About = () => {
  return (
    <AppWrap idName={"about"}>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <Image src={about.image} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </AppWrap>
  );
};

export default About;

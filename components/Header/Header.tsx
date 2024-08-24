"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AppWrapper } from "@/components";

import momin from "@/public/assets/momin.png";
import circle from "@/public/assets/circle.svg";
import react from "@/public/assets/react.png";
import redux from "@/public/assets/redux.png";
import sass from "@/public/assets/sass.png";

import "./header.css";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <AppWrapper idName={"home"}>
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            {/*<span>👋</span>*/}
            <div style={{ marginLeft: 2 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Momin Khan</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Stack Dev</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <Image src={momin} alt="profile_bg" />
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image src={circle} alt="profile_circle" className="overlay_circle" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[react, redux, sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <Image src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  </AppWrapper>
);

export default Header;

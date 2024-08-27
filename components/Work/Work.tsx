"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { AppWrapper, MotionWrapper } from "@/components";
import { works } from "@/constants/work";
import { capitalize } from "@/utils/helper";
import "react-multi-carousel/lib/styles.css";
import "./work.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Work = () => {
  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
  };

  return (
    <AppWrapper idName={"work"} classNames={"app__primarybg"}>
      <MotionWrapper classNames={"app__works"}>
        <h2 className="head-text">
          My Creative <span>Portfolio</span> Section
        </h2>

        <div className="app__work-filter">
          {["Next JS", "React", "MERN", "All"].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
            >
              {item}
            </div>
          ))}
        </div>

        <motion.div
          className="relative"
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          <div
            className="app__work-portfolio w-[320px] sm:w-[480px] md:w-[750px] xl:w-[1100px]"
            ref={scrollRef}
          >
            <div className="flex w-max">
              {filterWork.map((work, index) => (
                <div
                  className="app__work-item app__flex w-[280px] sm:w-[350px] xl:w-[450px]"
                  key={index}
                >
                  <div className="app__work-img app__flex">
                    <Image src={work.image} alt={work.title} />

                    <motion.div
                      whileHover={{ opacity: [0, 1] }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                        staggerChildren: 0.5,
                      }}
                      className="app__work-hover app__flex"
                    >
                      <Link
                        href={work?.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.9] }}
                          transition={{ duration: 0.25 }}
                          className="app__flex"
                        >
                          <AiFillEye />
                        </motion.div>
                      </Link>
                      <Link
                        href={work?.codeLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.9] }}
                          transition={{ duration: 0.25 }}
                          className="app__flex"
                        >
                          <AiFillGithub />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>

                  <div className="app__work-content app__flex">
                    <h4 className="bold-text">{work.title}</h4>
                    <p className="p-text" style={{ marginTop: 10 }}>
                      {work.description}
                    </p>

                    <div className="app__work-tag app__flex">
                      <p className="p-text">{capitalize(work.tag)}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={work.liveDemo}
                      className={"bg-blue px-4 py-1 rounded-lg"}
                    >
                      Live Demo
                    </Link>
                    <Link
                      href={work.codeLink}
                      className={"bg-blue px-4 py-1 rounded-lg"}
                    >
                      Code
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={"absolute bottom-[45%] w-full flex justify-between "}>
            <div
              className="bg-white p-3 rounded-full shadow-lg cursor-pointer"
              onClick={() => scroll("left")}
            >
              <FaChevronLeft
                className={"font-800"}
                size={25}
                color={"#313BACFF"}
              />
            </div>

            <div
              className="bg-white p-3 rounded-full shadow-lg cursor-pointer"
              onClick={() => scroll("right")}
            >
              <FaChevronRight size={25} color={"#313BACFF"} className="" />
            </div>
          </div>
        </motion.div>
      </MotionWrapper>
    </AppWrapper>
  );
};

export default Work;

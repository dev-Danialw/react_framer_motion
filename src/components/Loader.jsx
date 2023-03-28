import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVarient = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 0.5,
      },
      y: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        repeatType: "reverse",
        repeat: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const buttonVariant = {
  hover: {
    color: "#f8e112",
    textShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVarient}
        animate={animation}
      ></motion.div>
      <motion.div
        onClick={() => cycleAnimation()}
        variants={buttonVariant}
        whileHover="hover"
      >
        Cycle Loader
      </motion.div>
    </>
  );
};

export default Loader;

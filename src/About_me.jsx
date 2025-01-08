import React from "react";
import "./about_me.css";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="about_me"
      id="aboutMey"
    >
      <h2 className="heading">About Me</h2>
      <div className="about_me_info">
        <p className="about_me_left justify-content-center">
          Hello! I'm Prasanna Pokharel, a budding Full Stack Developer and
          cybersecurity enthusiast. I am diving into front-end and back-end
          technologies. Excited to connect and collaborate on innovative
          projects!
        </p>
        <div className="about_me_right"></div>
      </div>
    </motion.div>
  );
};

export default AboutMe;

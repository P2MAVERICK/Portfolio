import React from "react";
import Card from "./Card";
import jobaxle from "./images/JobAxleLogo.png";
import techaxis from "./images/TechAxisLogo.png";
import remoteaxle from "./images/RemoteAxleLogo.png";
import { motion } from "framer-motion";

const Projects = () => {
  const cards = [
    {
      imageUrl: remoteaxle,
      altText: "Remote Axles",
      title: "Remote Axle",
      description:
        "Remote Axle is a dynamic and responsive E-Learning website that allows users to learn and practice various programming languages and concepts.",
      explore: "https://remoteaxle.com/",
    },
    {
      imageUrl: jobaxle,
      altText: "Job Axles",
      title: "Job Axle",
      description:
        "Job Axle is a recruitment portal that allows users to post job listings and apply for jobs. It is a platform that connects job seekers with employers.",
      explore: "https://jobaxle.com/",
    },
    {
      imageUrl: techaxis,
      altText: "Tech Axis",
      title: "Tech Axis",
      description:
        "TechAxis is an innovative platform that provides comprehensive solutions for the IT industry, including job listings, training programs, and career guidance.",
      explore: "https://techaxis.com.np/",
    },
    // {
    //   imageUrl: wise_way,
    //   altText: "wise_way",
    //   title: "WiseWay",
    //   description:
    //     "a web application that uses advanced algorithms to calculate the most cost-effective route between two points.",
    //   explore: "https://github.com/",
    // },
  ];

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
        margin: "-100px",
        once: true,
      }}
      className="up_gap "
      id="project"
    >
      <h2 className="heading1 down_gap">Projects</h2>
      <div className="completely">
        <div className="grid">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              // style={{
              //   width: "100%",
              //   height: "300px",
              //   objectFit: "cover",
              // }}
              altText={card.altText}
              title={card.title}
              description={card.description}
              explore={card.explore}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const marquee = [
    "/Marquee/javascript.svg",
    "/Marquee/react.svg",
    "/Marquee/php.svg",
    "/Marquee/python.svg",
    "/Marquee/mongodb.svg",
    "/Marquee/mysql.svg",
    "/Marquee/tailwindcss.svg",
    "/Marquee/threejs.svg",
    "/Marquee/nextjs.svg",
    "/Marquee/bootstrap.svg",
    "/Marquee/sass.svg",
  ];

  return (
    <div className="container mx-auto overflow-hidden py-6">
      <div className="flex relative">
        {/* Main Marquee */}
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marquee.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Icon ${index}`}
              className="h-20 w-36 object-contain"
            />
          ))}
          {/* Clone first set of items to create seamless looping */}
          {marquee.map((image, index) => (
            <img
              key={`clone-${index}`}
              src={image}
              alt={`Icon clone ${index}`}
              className="h-20 w-36 object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

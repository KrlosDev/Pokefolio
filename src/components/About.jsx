import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-center font-bold text-white text-[-20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-primary text-[17px] max-w-5xl leading-[30px]"
      >
        I'm a seasoned web developer who's all about crafting and keeping up
        awesome web applications. I'm all about using my skills and experiences 
        to drive you and your organization forward! Let's make some magic happen!<br/><br/>
        These are some of the tools in my tech stack:
      </motion.p>
      <div className="mt-14 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
// you can wrap components inside hoc
export default SectionWrapper(About, "about");

import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full xl:h-screen  mx-auto xl:px-20">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <div
          className={`${styles.paddingX} xl:mt-[200px] max-w-7xl mx-auto flex flex-row xl:flex-1 items-start gap-5 mt-32`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "smooth", delay: 0.8, duration: 0.5 }}
            className="flex flex-col justify-center items-center mt-5"
          >
            <div className="w-5 h-5 rounded-full bg-tertiary" />
            <div className="w-1 sm:h-80 h-40 green-gradient" />
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${styles.heroHeadText} text-primary`}
              transition={{ type: "smooth", delay: 0.9, duration: 0.5 }}
            >
              Hi, I'm <span className="text-tertiary">Carlos</span>
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${styles.sectionHeadText}`}
              transition={{ type: "smooth", delay: 1.1, duration: 0.5 }}
            >
              <span className="text-tertiary">
                I craft digital experiences.
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${styles.heroSubText} mt-2 text-primary`}
              transition={{ type: "smooth", delay: 1.3, duration: 0.5 }}
            >
             I’m a software engineer specializing in building (and occasionally designing) exceptional experiences. 
             Currently, I'm focused on building accessible, scalable digital solutions.
            </motion.p>
          </div>
        </div>
      </div>
      <div className=" mt-10 xs:bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "smooth", delay: 1.5, duration: 0.5 }}
            className="w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2 "
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-5 rounded-full bg-tertiary mb-1"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

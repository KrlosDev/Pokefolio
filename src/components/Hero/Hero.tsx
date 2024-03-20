import { motion } from "framer-motion";
import "./hero.css";
import { heroImage } from "../../assets/images";

const Hero = () => {
  const animationDuration = {duration:0.5}
  const items = [
    { text: "Hi, My name is", delay: 0.9, },
    { text: "Carlos Barahona", delay: 1.1 },
    { text: "I craft digital experiences.", delay: 1.3 },
    {
      text:
        "I’m a software engineer specializing in building (and occasionally designing) exceptional experiences. Currently. I'm focused of building accessible scalable digital solutions.",
      delay: 1.5
    }
  ];

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type:"smooth", delay: item.delay, animationDuration }}
            >
              {index === 0 ? (
                <p>{item.text}</p>
              ) : index === 1 ? (
                <h2 className={`hero-header`}>{item.text}</h2>
              ) : index === 2 ? (
                <h3 className={`hero-header`}>{item.text}</h3>
              ) : (
                <p style={{ paddingRight: "1rem", maxWidth: "750px" }}>
                  {item.text}
                </p>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{type:"smooth", delay: 1.7, animationDuration }} className="sidekick">
            <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} 
            transition={{type:"smooth", delay: 1.9, animationDuration }}
            src={heroImage}
            className="heroImage"
            />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
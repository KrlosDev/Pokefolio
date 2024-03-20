import "./hero.css";
import { heroImage } from "../../assets/images";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div>
          <p>Hi, My name is </p>
          <h2 className={`hero-header`}>Carlos Barahona</h2>
          <h3 className={`hero-header`}>I craft digital experiences.</h3>
          <p style={{paddingRight:"1rem", maxWidth:'750px'}}>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional experiences.
            Currently. I'm focused of building accesible scalable digital
            solutions.
          </p>
        </div>
        <div className="sidekick"><img src={heroImage}></img></div>
      </div>
    </section>
  );
};

export default Hero;

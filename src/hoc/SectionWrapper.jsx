import {styles} from '../styles'
import { staggerContainer } from '../utils/motion'

const isXsMobile = () => {
  const width = window.innerWidth;
  return width <= 375;
}


const SectionWrapper = (Component, idName) => function HOC(){
  if (isXsMobile) {
    return(
      <section
       className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
          <span className='hash-span' id={idName}>
              &nbsp;
          </span>
          <Component/>
      </section>
    )
  } else {
    return(
      <motion.section
       variants={staggerContainer()}
       initial="hidden"
       whileInView="show"
       viewport={{once:true, amount:0.25}}
       className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
          <span className='hash-span' id={idName}>
              &nbsp;
          </span>
          <Component/>
      </motion.section>
    )
  }
}

export default SectionWrapper
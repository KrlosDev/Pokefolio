import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../styles'
import {experiences} from '../constants'
import {SectionWrapper} from '../hoc'
import { textVariant } from "../utils/motion"

const customIconBorder = `0 0 0 4px #0E6987, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)`
const ExperienceCard = ({experience})=>(
  
 <VerticalTimelineElement 
   contentStyle={{background:'#2E2F30',color:'#2E2F30', borderTop:'7px solid #0E6987'}}
   contentArrowStyle={{borderRight:'7px solid #2E2F30'}}
   date={experience.date}
   iconStyle={{background:experience.iconBg, boxShadow: customIconBorder}}
   icon={
    <div>
    <img src={experience.icon} alt={experience.company_name} className='flex justify-center h-full w-full items-center rounded-full'/>
    </div>
    }
  >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-white text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>
         
      </div>
      <ul className="mt-5 ml-5 list-disc space-y-2">
        {experience.points.map((point, index)=>(
          <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>

  </VerticalTimelineElement>
  )

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What i have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline lineColor="#2E2F30">
        {experiences.map((experience, index)=>(
          <ExperienceCard key={index} experience={experience}/>
        ))}

      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")
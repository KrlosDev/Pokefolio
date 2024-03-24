import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import { navLinks } from '../constants';
import {logo, menu, close} from '../assets';
import { motion } from "framer-motion";

const Navbar = () => {
  const glass ={
    'background': 'rgba(46, 47, 48, 0.9)',
    'boxShadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
     'backdropFilter': 'blur(5.8px)', 
     'WebkitBackdropFilter': 'blur(5.8px)'};
  const [active, setActive]=useState('');
  const [toggle, setToggle] = useState(false);
  return (
    //the class name below has a dynamic template string
    <nav style={glass} className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}>
   <div className='w-full flex justify-between items-center max-w-7xl mx-auto h-[3rem]'>
    <Link to="/" className='flex items-center gap-2' 
    onClick={()=>{setActive(""); window.scrollTo(0,0)}}>
      {/* <img src={logo}alt="logo" className="w-[3rem] object-contain"/> */}
      <motion.p initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5, type:"smooth" }} className='text-white text-[18px] font-bold cursor-pointer flex'>Carlos <span className='sm:block'> &nbsp;| Software Engineer</span></motion.p>
    </Link>
    {/*Desktop Navigation below*/}
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5, type:"smooth"}}>
    <ul className='list-none hidden sm:flex flex-row gap-10'>
      {navLinks.map((link)=>(
        <li key={link.id} className={`hover:text-secondary text-[18px] font-medium cursor-pointer`} 
                onClick={() => setActive(link.title)}>

            <a href={`#${link.id}`} className={`${active === link.title ? "shadow-navigation":"shadow-none"} p-3`}>{link.title}</a>

          </li>
          
      ))}
    </ul>
    </motion.div>
    {/*End of Desktop Nav*/}
     {/*Mobile Navigation below*/}
     <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>setToggle(!toggle)}/>
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-primary absolute top-24 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
         <ul className='list-none flex justify-end items-start flex-col gap-4 h-full'>
          {navLinks.map((link)=>(
           <li key={link.id} className={`text-[16px] font-medium cursor-pointer h-full`} 
                onClick={() => {
                setToggle(!toggle);
                setActive(link.title);}}>

            <a href={`#${link.id}`} className={`${active === link.title ? "shadow-navigation":"shadow-none"}`}>{link.title}</a>

           </li>
          ))}
         </ul>
        </div>
       
     </div>
   </div>
    </nav>
  )
}

export default Navbar
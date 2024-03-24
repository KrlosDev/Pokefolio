import {
    oracle,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    jobit,
    tripguide,
    threejs,
    cwp,
    lios,
    portfolio,
    calteks,
    vue,
    aws,
    pokemon
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [

    {
      title: "VueJS",
      icon: vue,
    },
    {
      title: "ReactJS",
      icon: reactjs,
    },
    {
      title: "NodeJS",
      icon: nodejs,
    },
    {
      title: "Mongo DB",
      icon: mongodb,
    },
    {
      title:"Tailwind",
      icon:tailwind
    },
    {
      title: "TypeScript",
      icon: typescript,
    },
    {
      title: "GIT",
      icon: git,
    },
    {
      title: "AWS",
      icon: aws,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },

    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Sr. Software Engineer Team Lead",
      company_name: "Cal Technology Solutions",
      icon: calteks,
      iconBg: "#fff",
      date: "July 2023 - Current",
      points: [
        "Currently leading optimization initiatives for backend APIs and frontend components while prioritizing codebase robustness and adhering to the highest industry standards",
        "Designed AWS infrastructure to facilitate seamless application deployment, leveraging advanced AWS technologies such as EC2, CloudFront, S3, and Code Commit.",
        "Developed an internal library to streamline interactions with GRAPH API, thereby enhancing integration processes and overall operational efficiency.",
        "Participating in code reviews and providing constructive feedback to the team.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Live and Invest Overseas",
      icon: lios,
      iconBg: "#fff",
      date: "April 2021 - June 2023",
      points: [
        "Developed and maintained web pages and applications, resulting in increased user engagement and improved user experience.",
        "Implemented new features written with javascript, increasing user engagement.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Optimized website performance, resulting in a 80% decrease in page load time",
        "Improved website accessibility by implementing responsive design, resulting in increased mobile traffic.",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "C&W Panama",
      icon: cwp,
      iconBg: "#2E2F30",
      date: "March 2018 - Feb 2021",
      points:["Managed and reported on 600+ GPS Devices with and average of 900 daily records per device.",
      "Developed and implemented new reports that allowed for a better use on the company assets.",
      "Implemented a geofencing technology that allowed the company to mark coordinates of interest and have live feedback and reporting from those locations."]
      
      
    }
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PokeDex",
      description:
        "A fun project writen in React, it's consuming the PokeApi and soon i will include a battle simulator module. My portfolio shares the same color pallete.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: pokemon,
      source_code_link: "https://github.com/KrlosDev/PokemonApi_interactions",
    },
    {
      name: "Portfolio 1.0",
      description:
        "Personal Web developer portfolio with Higher Order Components and 3D animations with framer-motion and React Three.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/KrlosDev/Krlos-Portfolio",
    },
    {
      name: "OpenAI API Codex",
      description:
        "Web application that enables users to ask code related questions or other inquiries and interact with GPT-3 using the Open AI API. Is writen in vanilla JS ",
      tags: [
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
        
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/KrlosDev/GTP-3-API-Codex-App",
    },
    {
      name: "Project Tndrfy",
      description:
        "An Ambitious project that merges the best features of both Spotify and Tinder, making it the best version of both in terms of user experience it's a work in progress",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "ScSS",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/KrlosDev/project-tndrfy",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
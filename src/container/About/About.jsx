import React from "react";
import "./About.scss";

import { motion } from "framer-motion";

import { useState } from "react";

import resume from '../../resume/Ilango SHIBAANI SURUDISYA.pdf'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  const [aboutMe, setAboutMe] = useState([]);


  return (
    <div className="about" id="about">
      <div className="container ">
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
        >
          <h1 className="about__heading">About</h1>
          
        </motion.div>

        
          <motion.div
            whileInView={{ y: [-150, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
          >
            <div className="about__details">
              <div >
              <h2 className="name__heading">Who is Shibaani ?</h2>
          
                  <p className="paragraph__one">
                  Hi, I'm Shibaani Surudisya, a frontend software engineer passionate about crafting engaging and user-friendly digital experiences. I specialize in building websites and web applications that blend functionality with great design, contributing to the success of digital products.
                  </p>                
        

                  {/* <motion.div
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
              > */}
       
                  <p className="paragraph__two">
                    I am an undergraduate in BSc in Physical Science from University of Jaffna - Sri Lanka.
                    I feel very happy when I'm creating, learning, exploring and thinking about how to make things better.
                  </p>


           {/* </motion.div>  */}
                <div className="CV__details">
                  <h3 src="#contact" className="contact__link">
                    <a href="#contact" className="getInTouch">
                      Get in touch! <span className="heart">❤️</span>
                    </a>
                  </h3>
                <a href={ resume } className="btn__resume" download>
                    <button type="button" className="btn btn__download" >
                      Download CV
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
         
      </div>
    </div>
  );
};

export default About;

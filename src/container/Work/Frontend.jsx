import React from 'react'
import './Work.scss'
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';


import movie from '../../images/thumbnail/movie@2x.webp'
import tesla from '../../images/thumbnail/tesla@2x.webp'
import scooby from '../../images/thumbnail/Scooby@2x.webp'

function Frontend({ index, imgUrl, name, projectLink, codeLink, tools, title, description}) {

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
    duration: 0.7,
    ease: 'easeInOut',
    },
  },
};


  return (
    <div className='skillPart__container'>
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}>
              <div className='skillPart__heading'>
                  <h6 className='skillPart__subheading'>Frontend Development</h6>            
              </div>  
            </motion.div>         
      <div  className='project__card'>

        {/* Movie app */}

   
        <motion.div
            // animate={animateCard}
             variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"> 

          
          <div className="app__work-item app__flex" key="movie_App">
            <div className="app__work-img app__flex" >           
              <img src={ movie } alt="movie" />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex" >
                
              <a href='https://ssurudisya.github.io/Movie-App/' target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex" >
                    <AiFillEye />
                  </motion.div>
              </a>
              <a href='https://github.com/SSurudisya/Movie-App.git' target="_blank" rel="noreferrer" className='language'>
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex">
                  <AiFillGithub />
                </motion.div>
              </a>
              </motion.div>
            </div>
            <div className="app__work-tag app__flex app__tool">
                <div className="p-text tools">
                  HTML / CSS / JavaScript
                </div>
            </div>
            <div className="app__work-content app__flex">
              <h2 className="bold-text title">Movie App</h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                This is a movie search webiste where you can search movies by entering the
                name in the search bar and see the movie's name and the rating. By hover over
                the image, you can see the overview of the movie.
              </p>    
            </div>
            <div className='mobile__button'>
              <div className='btn__demo'>
                <a href='https://ssurudisya.github.io/Movie-App/' target="_blank" rel="noreferrer">Demo</a>
              </div>
              <div className='btn__repo'>
                <a href='https://github.com/SSurudisya/Movie-App.git' target="_blank" rel="noreferrer">Repo</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tesla Clone */}

   
        <motion.div
            // animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
           variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
            className="app__work-portfolio"> 
          <div className="app__work-item app__flex" key="Tesla clone">
            <div className="app__work-img app__flex" >           
              <img src={ tesla } alt="movie" />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex" >
                
              <a href='https://dhanuv18.github.io/react_tesla_clone/' target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex" >
                    <AiFillEye />
                  </motion.div>
              </a>
              <a href='https://github.com/SSurudisya/Tesla-Clone.git' target="_blank" rel="noreferrer" className='language'>
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex">
                  <AiFillGithub />
                </motion.div>
              </a>
              </motion.div>
            </div>
            <div className="app__work-tag app__flex app__tool">
                <div className="p-text tools">
                  React js
                </div>
            </div>
            <div className="app__work-content app__flex">
              <h2 className="bold-text title">Tesla Clone</h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                This is a clone of Tesla company's official website.
                Here you can find the details about Tesla productions.
              </p>    
            </div>
            <div className='mobile__button'>
              <div className='btn__demo'>
                <a href='https://dhanuv18.github.io/react_tesla_clone/' target="_blank" rel="noreferrer">Demo</a>
              </div>
              <div className='btn__repo'>
                <a href='https://github.com/SSurudisya/Tesla-Clone.git' target="_blank" rel="noreferrer">Repo</a>
              </div>
            </div>
          </div>
          </motion.div> 
       
        
        {/* Scooby */}

      <motion.div
            // animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
           variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
            className="app__work-portfolio"> 
          <div className="app__work-item app__flex" key="Scooby">
            <div className="app__work-img app__flex" >           
              <img src={ scooby } alt="scooby app" />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex" >
                
              <a href='https://ssurudisya.github.io/Scooby-App/' target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex" >
                    <AiFillEye />
                  </motion.div>
              </a>
              <a href='https://github.com/SSurudisya/Scooby-App.git' target="_blank" rel="noreferrer" className='language'>
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.90] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex">
                  <AiFillGithub />
                </motion.div>
              </a>
              </motion.div>
            </div>
            <div className="app__work-tag app__flex app__tool">
                <div className="p-text tools">
                  HTML / CSS / JavaScript
                </div>
            </div>
            <div className="app__work-content app__flex">
              <h2 className="bold-text title">Landing page for a company</h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                This is a sample website for a book selling and buying company.
                You can find the company's details, customer's reviews, company's services in this website.
              </p>    
            </div>
            <div className='mobile__button'>
              <div className='btn__demo'>
                <a href='https://ssurudisya.github.io/Scooby-App/' target="_blank" rel="noreferrer">Demo</a>
              </div>
              <div className='btn__repo'>
                <a href='https://github.com/SSurudisya/Scooby-App.git' target="_blank" rel="noreferrer">Repo</a>
              </div>
            </div>
          </div>
          </motion.div> 
        
        
    </div>   
</div>
      
  
    
  )
}

export default Frontend
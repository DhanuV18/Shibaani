import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import './Footer.scss';


import linkedin from '../../images/linkedin__logo.png'
import github  from '../../images/github__logo.png'

function Footer() {

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

    const [state, handleSubmit] = useForm("xblgodrk");
   if (state.succeeded) {
       return <div className='feedback__message'>
                <h2 className="head-text feedback__text">
                        😊 Thanks for your feedback! 🎉
                </h2>
           </div>;
  }
    return (
      
        <div className='footer' id='contact'>
            <div className='contact__container contact'>
            <header>
                <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}          
                >
                    <h1 className="skills__head-text">Contact</h1>
                    
                    </motion.div>
            
                        <p className='contact__paragraph'>Feel free to contact me by submitting the form below
                        and I will get back to you as soon as possible.
                        </p>
                  
            </header>

           
                                            
                <div>
    
                <form onSubmit={handleSubmit} className="">
 
                <input
                    id="name"
                    type="name"                    
                    name="username"
                    className="input input-text"
                    placeholder="Name"
                    required />
    
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors} />


                <input
                    id="email"
                    type="email" 
                    name="email"
                    className="input input-text"
                    placeholder="Email"
                    required />
      
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}/>
       
                <textarea
                    id="message"
                    name="message"
                    className="input-text textarea"
                    placeholder="Leave Your Comments Here..."
                    cols="5"
                    rows="10"
                    required />
      
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors} />
                    
                <button className="btn input-submit" type="submit" disabled={state.submitting}>Send Mail</button>
            </form>
        </div> 
        
            
            <div className='social__platform'>
                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}          
                    >
                    <h2 className='social__platform__heading'>Find me on these online spaces!</h2>
                    
                    <motion.div
                        whileInView={{ y: [50, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.3 }} 
                        >
                    <div className='social__icon'>
                        <a href="https://www.linkedin.com/in/shibaani-surudisya-ilango-8603b3283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' ><img src={linkedin} alt="linkedin" className='icon icon--linkedin'/></a> 
                        <a href="https://github.com/SSurudisya" target='_blank' ><img src={github} alt="linkedin" className='icon icon--github'/></a>       
                    </div>
                    </motion.div>
                </motion.div>
            </div>  

                <div className="copyright">
                  
                  
                <p className="copyright__paragraph">Copyright 2025. Designed & coded by Shibaani Surudisya</p>          
            </div>
            </div>

</div>



        
        
  )
}

export default Footer
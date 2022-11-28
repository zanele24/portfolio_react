import './home.css';
import hero from '../../assets/img/image.jpeg'
import { motion } from "framer-motion"


import { TypeAnimation } from 'react-type-animation';

export default function home() {
    return (
        <div>
            <div class="hero" id="home">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-sm-12 col-md-6">
                            <div class="hero-content">
                                <div class="hero-text">
                                    <motion.p
                                        initial={{ opacity: 0, x: -500, scale: 0.5 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        transition={{ duration: 1.5 }}>I'm</motion.p>
                                    <motion.h1
                                        initial={{ opacity: 0, x: -500, scale: 0.5 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        transition={{ duration: 1.5 }}>Zanele Chauke</motion.h1>
                                    
        
                              



<TypeAnimation
      sequence={[
        "Web Designer",
        1000,
        "Front End Developer",
        3000,
        "Full Stack Developer",
        2000,
        () => {
 
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '3em' }}
    />
                                </div>
                                <div class="hero-btn">
                                    <a class="btn" href="#contact">Hire Me</a>
                                    <a class="btn" href="#contact">Contact Me</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 d-none d-md-block">
                            <div class="hero-image">
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{
                                        scale: [1, 1, 1, 1, 1],
                                        rotate: [0, 0, 20, 20, 0],
                                        borderRadius: ["50%", "20%", "50%", "50%", "20%"],
                                    }}
                                    transition={{ duration: 1.75 }}

                                    src={hero} alt="Hero Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
import './home.css';
import hero from '../../assets/img/image.jpeg'
import { motion } from "framer-motion"

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
                              <h2></h2>
                              <div class="typed-text">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                          </div>
                          <div class="hero-btn">
                              <a class="btn" href="">Hire Me</a>
                              <a class="btn" href="">Contact Me</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-12 col-md-6 d-none d-md-block">
                      <div class="hero-image">
                          <motion.img
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover = {{  scale: [1, 2, 2, 1, .5],
                                rotate: [0, 0, 270, 270, 0],
                                borderRadius: ["50%", "20%", "50%", "50%", "20%"],}}
                            transition={{ duration: 1.75 }}
                            
                             src={hero} alt="Hero Image"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>)
}
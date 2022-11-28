import './experience.css';
import { motion } from "framer-motion"

export default function experience() {
    return (
    <motion.div>
         <div class="experience" id="experience">
            <div class="container">
                <header class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Resume</p>
                    <h2>Working Experience</h2>
                </header>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                class="timeline">
                    <motion.div 
                     initial={{ opacity: 0, x: -500, scale: 0.5 }}
                     whileInView={{ opacity: 1, x: 0, scale: 1 }}
                     transition={{ duration: 1.5 }}
                     viewport={{ once: false }}class="timeline-item left wow slideInLeft" >
                        <div class="timeline-text">
                            <div class="timeline-date">Dec 2020 - May 2021</div>
                            <h2>Application Designer</h2>
                            <h4>Inchub PLK, Polokwane, LP</h4>
                            <p>
                                I was given a role of implementing, designing and developing front-end aplication using Java in Android Studio.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0, x: 500, scale: 0.5 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: false }} class="timeline-item right wow slideInRight" >
                        <div class="timeline-text">
                            <div class="timeline-date">Sep 2021 - Feb 2022</div>
                            <h2>Front-end Developer</h2>
                            <h4>Novo Digital, Johannesburg, GP</h4>
                            <p>
                                I was given a role to developing the application front-end using react-native.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div 
                     initial={{ opacity: 0, x: -500, scale: 0.5 }}
                     whileInView={{ opacity: 1, x: 0, scale: 1 }}
                     transition={{ duration: 1.5 }}
                     viewport={{ once: false }}class="timeline-item left wow slideInLeft" >
                        <div class="timeline-text">
                            <div class="timeline-date">Jun 2022 - Dec 2022</div>
                            <h2>Full Stack Developer Intern</h2>
                            <h4>Digital Academy, Johannesburg, GP</h4>
                            <p>
                                UI/UX Design using Figma. Develop using Angular 13, Boostrap, PostgreSQL, Node.js(express), MongoDB, JavaScript and TypeScript
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </motion.div>
    )
}
import React, {useStates} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DiVim } from "react-icons/di";

import hero from '../../assets/img/image.jpeg'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';

import './navHome.css';

function navHome() {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">ZeeFolio</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#features"></Nav.Link>

                    <Nav.Link href="#pricing"></Nav.Link>
                  
                  </Nav>

                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Item>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link href="#service">Service</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    </Nav.Item>
                    

                    <Nav.Item>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav.Item>

                  </Nav>
                </Navbar.Collapse>

              </Container>
            </Navbar>
        

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
    </div>
</div>

// export default CollapsibleExample;
//         <div>
//             <div className="navbar navbar-expand-lg bg-light navbar-light">
//                 <div className="container-fluid">
//                     <a href="index.html" className="navbar-brand">ZeeFolio</a>
//                     <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
//                         <div className="navbar-nav ml-auto">
//                             <a href="#home" className="nav-item nav-link active">Home</a>
//                             <a href="#about" className="nav-item nav-link">About</a>
//                             <a href="#service" className="nav-item nav-link">Skills</a>
//                             <a href="#experience" className="nav-item nav-link">Experience</a>
//                             <a href="#portfolio" className="nav-item nav-link">Portfolio</a>
//                             <a href="#contact" className="nav-item nav-link">Contact</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
    );
}

export default navHome;
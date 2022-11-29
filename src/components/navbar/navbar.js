import React, {useStates} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DiVim } from "react-icons/di";

import './navbar.css';

function navbar() {

    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
              <Container>
                <Navbar.Brand href="#home">ZeeFolio</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#features"></Nav.Link>

                    <Nav.Link href="#pricing"></Nav.Link>
                  
                  </Nav>

                  <Nav className="justify-content-end flex-grow-1 pe-5">

                    <Nav.Item style={{fontSize:"20px"}}>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav.Item>
                    
                    {/* <Nav.Item style={{fontSize:"20px"}}>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav.Item> */}
                    
                    <Nav.Item style={{fontSize:"20px"}}>
                        <Nav.Link href="#service">Skills</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item style={{fontSize:"20px"}}>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item style={{fontSize:"20px"}}>
                        <Nav.Link href="#portfolio">Projects</Nav.Link>
                    </Nav.Item>
                    

                    <Nav.Item style={{fontSize:"20px"}}>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav.Item>

                  </Nav>
                </Navbar.Collapse>

              </Container>
            </Navbar>
        

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

export default navbar;
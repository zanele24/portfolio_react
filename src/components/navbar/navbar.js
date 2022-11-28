import React, {useStates} from "react";
import './navbar.css';

function navbar() {

    return (
        <div>
            <div className="navbar navbar-expand-lg bg-light navbar-light">
                <div className="container-fluid">
                    <a href="index.html" className="navbar-brand">ZeeFolio</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <a href="#home" className="nav-item nav-link active">Home</a>
                            <a href="#about" className="nav-item nav-link">About</a>
                            <a href="#service" className="nav-item nav-link">Service</a>
                            <a href="#experience" className="nav-item nav-link">Experience</a>
                            <a href="#portfolio" className="nav-item nav-link">Portfolio</a>
                            <a href="#contact" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar;
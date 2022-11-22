import React, {useStates} from "react";
import './navbar.css';

function navbar() {

    return (
        <div>
            <div class="navbar navbar-expand-lg bg-light navbar-light">
                <div class="container-fluid">
                    <a href="index.html" class="navbar-brand">ZeeFolio</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav ml-auto">
                            <a href="#home" class="nav-item nav-link active">Home</a>
                            <a href="#about" class="nav-item nav-link">About</a>
                            <a href="#service" class="nav-item nav-link">Service</a>
                            <a href="#experience" class="nav-item nav-link">Experience</a>
                            <a href="#portfolio" class="nav-item nav-link">Portfolio</a>
                            <a href="#contact" class="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar;
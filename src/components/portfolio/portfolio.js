/* eslint-disable no-unused-vars */
import './portfolio.css';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';
var imageportfolio = "https://www.syncfusion.com/blogs/wp-content/uploads/2022/03/How-to-Build-a-CRUD-App-in-Angular.png"
export default function portfolio(  ) {
    const filter = (value) => value % 2 === 0;
    return (
    <div>
        <div class="portfolio" id="portfolio">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Projects</p>
                    <h2>Projects</h2>
                </div>
                <div class="row portfolio-container">
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <motion.img src="https://appinventiv.com/wp-content/uploads/sites/1/2019/08/How-Much-does-Flutter-App-Development-Cost-1.png" alt="Image"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>eCommerce Mobile App</h3>
                                <a class="btn" href="https://github.com/andries-ui/E_commerce" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="1s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <motion.img src="https://www.syncfusion.com/blogs/wp-content/uploads/2020/01/Build-CRUD-REST-APIs-with-ASP.NET-Core-3.1-and-Entity-Framework-Core-Create-JWT-Tokens-and-Secure-APIs.png" alt="Image"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>CRUD Web App</h3>
                                <a class="btn" href="https://github.com/zanele24/Own-Project" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
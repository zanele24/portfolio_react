/* eslint-disable no-unused-vars */
import './portfolio.css';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';
import survey from '../../assets/img/surveyApp.png'
var imageportfolio = ""
export default function portfolio(  ) {
    const filter = (value) => value % 2 === 0;
    return (
    <div>
        <div class="portfolio" id="portfolio">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Portfolio</p>
                    <h2>Portfolio</h2>
                </div>
                <div class="row">
                    <div class="col-12">
                    
                        <ul id="portfolio-filter">
                            <li data-filter="*" >All</li>
                            <li data-filter=".filter-1" class="filter-active">Web Apps</li>
                            <li data-filter=".filter-2">Mobile Apps</li>
                        </ul>
                    </div>
                </div>
                <div class="row portfolio-container">
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <motion.img src="https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Image"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>eCommerce Mobile App</h3>
                                <a class="btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="1s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <motion.img src="https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Image"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>CRUD Web App</h3>
                                <a class="btn" href="img/portfolio-6.jpg" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
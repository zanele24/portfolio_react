/* eslint-disable no-unused-vars */
import './portfolio.css';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import crudImage from '../../assets/img/crud.jpeg';
import ecommerce from '../../assets/img/ecommerce.webp';

var imageportfolio = "https://www.syncfusion.com/blogs/wp-content/uploads/2022/03/How-to-Build-a-CRUD-App-in-Angular.png"
export default function portfolio() {
    // const filter = (value) => value % 2 === 0;
    return (
        <div>
            <div class="portfolio" id="portfolio">
                <div class="container">
                    <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                        <p>My Projects</p>
                        <h2>Projects</h2>
                    </div>
                    <div className="row portfolio-container">
                        {/* <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <motion.img src="https://appinventiv.com/wp-content/uploads/sites/1/2019/08/How-Much-does-Flutter-App-Development-Cost-1.png" alt="Image"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>eCommerce Mobile App</h3>
                                <a class="btn" href="https://github.com/andries-ui/E_commerce" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div> */}
                        {/* <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp" data-wow-delay="1s">
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                                <motion.img src="https://www.syncfusion.com/blogs/wp-content/uploads/2020/01/Build-CRUD-REST-APIs-with-ASP.NET-Core-3.1-and-Entity-Framework-Core-Create-JWT-Tokens-and-Secure-APIs.png" alt="Image"/>
                            </div>
                            <div class="portfolio-text">
                                <h3>CRUD Web App</h3>
                                <a class="btn" href="https://github.com/zanele24/Own-Project" data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                    </div> */}
                    <a href= "https://github.com/andries-ui/E_commerce">
                        <Card style={{ width: '20rem', boxShadow: "0 0 15px rgba(0, 0, 0, .12)" }}>
                            <Card.Img variant="top" src={ecommerce} />
                            <Card.Body>
                                <Card.Title style={{fontSize:"1.5rem", color: "#695aa6", fontWeight: "bold"}}>eCommerce Mobile App</Card.Title>
                                <Card.Text>E-commerce mobile application that is built in React-Native, TypeScript and </Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                  
                        <Card style={{ width: '20rem', boxShadow: "0 0 15px rgba(0, 0, 0, .12)" }}>
                        <a href="https://github.com/zanele24/Own-Project" >
                            <Card.Img variant="top" src={crudImage} />
                            </a>
                            <Card.Body>
                                <Card.Title style={{fontSize:"1.5rem", color: "#695aa6", fontWeight: "bold"}}>CRUD Web App</Card.Title>
                                <Card.Text>CRUD web application that is built in Angular 13, Nodejs (express), MongoDB and PrimeNG(CSS framework)</Card.Text>
                            </Card.Body>
                        </Card>

                        <a href= "https://github.com/andries-ui/E_commerce">
                        <Card style={{ width: '20rem', boxShadow: "0 0 15px rgba(0, 0, 0, .12)" }}>
                            <Card.Img variant="top" src={ecommerce} />
                            <Card.Body>
                                <Card.Title style={{fontSize:"1.5rem", color: "#695aa6", fontWeight: "bold"}}>Alumni Web App</Card.Title>
                                <Card.Text>E-commerce mobile application that is built in react-native</Card.Text>
                            </Card.Body>
                        </Card>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
import './service.css';
// import { Container } from 'react-bootstrap';
import { DiJavascript1, DiNodejs, DiMongodb, DiGit, DiDjango, DiPostgresql } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import  Row from 'react-bootstrap/Row';
import { SiAngular, SiNestjs, SiTypescript, SiCplusplus, SiExpress} from "react-icons/si";
// import pythonIcon from "../../assets/python-icon.svg";


export default function service() {
    return (
    <div>
        <div class="service" id="service">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Skills</p>
                    <h2>Professional Skills &  Languages </h2>
                </div>
                <div className="flex justify-center">
                  <Row className="add-space" >
                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                        <SiCplusplus style={{color: "blue"}} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <DiNodejs style={{color: "rgb(0, 90, 48)"}} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <SiExpress style={{color: "black"}} /> 
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <DiJavascript1 style={{color: "black", background: "yellow"}} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <SiTypescript style={{color: "blue" }}  />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <SiAngular style={{color: "red" }} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <DiGit style={{color: "red" }} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <DiPostgresql style={{color: "white", fill:"blue" }}/>
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <DiMongodb style={{color: "green" }} />
                    </div>

                    <div className="card tech-icons drop-shadow-xl rounded-none w-full bg-base-100 shadow-xl image-full" >
                       <AiFillHtml5 style={{color: "orange" }} />
                    </div>
                    </Row>
            </div> 
            </div>
        </div>
    </div>
    )
}
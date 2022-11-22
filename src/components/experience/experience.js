import './experience.css';

export default function experience() {
    return (
    <div>
         <div class="experience" id="experience">
            <div class="container">
                <header class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Resume</p>
                    <h2>Working Experience</h2>
                </header>
                <div class="timeline">
                    <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">Dec 2020 - May 2021</div>
                            <h2>Application Designer</h2>
                            <h4>Inchub PLK, Polokwane, LP</h4>
                            <p>
                                I was given a role of implementing, designing and developing front-end aplication using Java in Android Studio.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">Sep 2021 - Feb 2022</div>
                            <h2>Front-end Developer</h2>
                            <h4>Novo Digital, Johannesburg, GP</h4>
                            <p>
                                I was given a role to developing the application front-end using react-native.
                            </p>
                        </div>
                    </div>
                    <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                        <div class="timeline-text">
                            <div class="timeline-date">Jun 2022 - Dec 2022</div>
                            <h2>Full Stack Developer Intern</h2>
                            <h4>Digital Academy, Johannesburg, GP</h4>
                            <p>
                                UI/UX Design using Figma. Develop using Angular 13, Boostrap, PostgreSQL, Node.js(express), MongoDB, JavaScript and TypeScript
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
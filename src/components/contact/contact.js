
import './contact.css';
import React from 'react'
// import { useForm } from "react-hook-form";

export default function contact() {

    // const {
    //     register,
    //     handleSubmit, reset } = useForm();
    
    return (
        <div>
            <div class="contact wow fadeInUp" data-wow-delay="0.1s" id="contact">
                <div class="container-fluid">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-4"></div>
                            <div class="col-md-8">
                                <div class="contact-form">
                                    <div id="success"></div>

                                    <form action="https://formspree.io/f/mgeqbqor" method="POST" id="contactForm" noValidate="novalidate">
                                        <div class="control-group">
                                            <input type="text" class="form-control" name="name" placeholder="Your Name" required data-validation-required-message="Please enter your name" />
                                            <p class="help-block"></p>
                                        </div>
                                        <div class="control-group">
                                            <input type="email" class="form-control" name="email" placeholder="Your Email" required data-validation-required-message="Please enter your email" />
                                            <p class="help-block"></p>
                                        </div>
                                        <div class="control-group">
                                            <input type="text" class="form-control" name="subject" placeholder="Subject" required data-validation-required-message="Please enter a subject" />
                                            <p class="help-block"></p>
                                        </div>
                                        <div class="control-group">
                                            <textarea class="form-control" name="message" placeholder="Message" required data-validation-required-message="Please enter your message"></textarea>
                                            <p class="help-block"></p>
                                        </div>
                                        <div>
                                            <button class="btn" type="submit" id="sendMessageButton">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
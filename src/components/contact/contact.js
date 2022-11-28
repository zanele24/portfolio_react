
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

                                    {/* <form onSubmit={handleSubmit((formData) => {window.location.href = `mailto:jnmhlongo@hotmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;})}name="sentMessage" id="contactForm" novalidate="novalidate">
                                        <div class="control-group">
                                            <input {...register('name')} type="text" class="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                            <p class="help-block"></p>
                                        </div>
                                        <div class="control-group">
                                            <input {...register('email')}type="email" class="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                            <p class="help-block"></p>
                                        </div>
                                        <div class="control-group">
                                            <input {...register('subject')}type="text" class="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                            <p class="help-block"></p>
                                        </div>
                                        <div class="control-group">
                                            <textarea {...register('message')} class="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                            <p class="help-block"></p>
                                        </div>
                                        <div>
                                            <button class="btn" type="submit" id="sendMessageButton">Send Message</button>
                                        </div>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { useRef } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhoneSquareAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jw96y9q', 'template_r6n0r0r', form.current, 'e0F8Nr0F2eQ1OAUBp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div className='banner container' id="contact" data-aos="fade-up"
            data-aos-duration="1500">
            <h1 className='text-center mb-5 fw-bold'>Contact Me</h1>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
                <div className='col'>
                    <h2 className='fw-bold mb-4'>Contact Info :</h2>
                    <h5 className='mb-4'><FaMailBulk></FaMailBulk> amdimran328@gmail.com</h5>
                    <h5 className='mb-4'><FaPhoneSquareAlt></FaPhoneSquareAlt> 01300193867</h5>
                    <h5 className='mb-4'><FaLocationArrow></FaLocationArrow> Haragach,Rangpur,Bangladesh</h5>
                    <h2 className='fw-bold mt-5 mb-3'>Social Networks :</h2>
                    <div>
                        <a className='fs-1 text-dark me-5 ms-3' href="https://www.facebook.com/mdimranahmed.imran.568" target="_blank"><FaFacebook></FaFacebook></a>
                        <a className='fs-1 text-dark me-5' href="https://www.linkedin.com/in/md-imran-ahmed-07723b280/" target="_blank"><FaLinkedin></FaLinkedin></a>
                        <a className='fs-1 text-dark me-4' href="https://github.com/imranahmed20" target="_blank"><FaGithub></FaGithub></a>
                    </div>
                </div>
                <div className='col'>
                    <h2 className='fw-bold mb-2'>Write a message:</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label className="form-label">Your Name:</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write message' required></textarea>
                        </div>
                        <input type="submit" className='btn btn-danger rounded fs-5 fw-semibold' value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
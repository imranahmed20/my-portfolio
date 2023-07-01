import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhoneSquareAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='mt-5 container'>
            <h1 className='text-center mb-5'>Contact Me</h1>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
                <div className='col'>
                    <h2 className='fw-bold mb-4'>Contact Info :</h2>
                    <h5 className='mb-4'><FaMailBulk></FaMailBulk> amdimran328@gmail.com</h5>
                    <h5 className='mb-4'><FaPhoneSquareAlt></FaPhoneSquareAlt> 01300193867</h5>
                    <h5 className='mb-4'><FaLocationArrow></FaLocationArrow> Haragach,Rangpur,Bangladesh</h5>
                    <h2 className='fw-bold mt-5 mb-3'>Social Networks :</h2>
                    <div>
                        <a className='fs-1 text-dark me-4' href="https://www.facebook.com/mdimranahmed.imran.568" target="_blank"><FaFacebook></FaFacebook></a>
                        <a className='fs-1 text-dark me-4' href="https://www.linkedin.com/in/md-imran-ahmed-07723b280/" target="_blank"><FaLinkedin></FaLinkedin></a>
                        <a className='fs-1 text-dark me-4' href="01724641694" target="_blank"><FaPhoneSquareAlt></FaPhoneSquareAlt></a>
                        <a className='fs-1 text-dark me-4' href="https://github.com/imranahmed20" target="_blank"><FaGithub></FaGithub></a>
                    </div>
                </div>
                <div className='col'>
                    <h2 className='fw-bold mb-2'>Write a message:</h2>
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
                    <button className='btn btn-danger rounded fs-5 fw-semibold'>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
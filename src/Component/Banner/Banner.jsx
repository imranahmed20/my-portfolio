import React from 'react';
import img from '../../../src/assets/IMG-20230131-WA0002.jpg'
import Button from 'react-bootstrap/Button';

const Banner = () => {
    return (
        <div className='d-md-flex justify-content-between align-items-center mt-5 container'>
            <div>
                <h1>Hi! I'm <br /><span className='text-success fw-bold'>Imran Ahmed</span></h1>
                <h1 className='text-danger fw-bold'>Full Stack Developer</h1>
                <p className='fs-5 fw-semibold'>Welcome to my portfolio! I'm a passionate MERN stack web developer with expertise in HTML, CSS, JavaScript, React, Express.js, Node.js, and MongoDB. With a strong foundation in front-end development, I strive to create captivating user interfaces and seamless user experiences. I enjoy turning ideas into functional and visually appealing websites and web applications.</p>
                <Button variant="outline-danger fw-semibold fs-5">DownLoad Resume</Button>
            </div>
            <div className='ms-3'>
                <img className='rounded-circle ' style={{ width: 500, height: 450 }} src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;
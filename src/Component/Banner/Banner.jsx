import React from 'react';
import img from '../../../src/assets/Image/357788537_2237658816426893_318993846120352413_n.png'
// import Button from 'react-bootstrap/Button';
import resume from '../../assets/Image/Imran Ahmed Resume.pdf'
import { FaDownload } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='d-md-flex justify-content-between align-items-center mt-5 container' >
            <div
            >
                <h1>Hi! I'm <br /><span className='text-success fw-bold'>Imran Ahmed</span></h1>
                <h1 className='text-danger fw-bold fs-1'>Full Stack Developer</h1>
                <p className='fs-5 fw-semibold'>Welcome to my portfolio! I'm a passionate MERN stack web developer with expertise in HTML, CSS, JavaScript, React, Express.js, Node.js, and MongoDB. With a strong foundation in front-end development, I strive to create captivating user interfaces and seamless user experiences. I enjoy turning ideas into functional and visually appealing websites and web applications.</p>
                <a href={resume} target="_blank" download="Imran Ahmed Resume" rel="noreferrer"> <button className='btn btn-danger fw-semibold fs-5'>DownLoad Resume <FaDownload></FaDownload></button></a>
            </div>
            <div className='ms-3'>
                <img className='rounded-circle ' style={{ width: 500, height: 450 }} src={img} alt="" />
            </div>
        </div >
    );
};

export default Banner;
import React from 'react';
import img from '../../../src/assets/IMG-20230131-WA0002.jpg'

const About = () => {
    return (
        <div className='banner container'>
            <h1 className='text-center fw-bold mb-5'>About Me</h1>
            <div className='d-md-flex justify-content-between align-items-center mt-5'>
                <div>
                    <img className='rounded' style={{ width: 500, height: 500 }} src={img} alt="" />
                </div>
                <div className='ms-5 mb-3'>
                    <p className='fs-5 fw-semibold'>Hello, I'm Imran Ahmed, a passionate and dedicated frontend web developer. I am a committed student in my Third year of studies at Kurigram Govt Collage, Kurigram. My journey into the world of programming began when I discovered my love for creating visually appealing and interactive websites.To further enhance my skills, I enrolled in the "Programming Hero" Course, where I completed the web development curriculum and obtained a certificate. This course provided me with comprehensive knowledge and practical experience, enabling me to tackle real-world projects with confidence. When I'm not coding, you can find me indulging in my hobbies.I'm also a big fan of anime series and appreciate the artistry and storytelling in this medium.
                     <br />
                        I am excited to embark on new projects and collaborate with like-minded individuals. Feel free to browse through my portfolio and get in touch with me if you have any inquiries or if you'd like to discuss potential opportunities.</p>


                </div>
            </div>

        </div>
    );
};

export default About;
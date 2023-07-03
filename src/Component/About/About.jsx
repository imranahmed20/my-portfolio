import React from 'react';

const About = () => {
    return (
        <>
            <div className='banner container mb-5' id="about">
                <h1 className='text-center fw-bold mb-5'>About Me</h1>
                <div className='row row-cols-1 row-cols-md-2 g-4'>
                    <div className='col col-md-5' data-aos="fade-right">
                        <h4 className='fw-bold mb-4'>Md Imran Ahmed</h4>
                        <p className='fs-5 fw-semibold'>I am a MERN Stack Web Developer</p>
                        <h5 className='mb-4'>Age: 22 years</h5>
                        <h5 className='mb-4'>Phone: 01300193867</h5>
                        <h5 className='mb-4'>Email: amdimran328@gmail.com</h5>
                        <h5 className='mb-4'>Nationality: Bangladesh</h5>
                        <h5 className='mb-4'>Language: English, Bengali</h5>
                        <h5 className='mb-4'>Address: Haragach, Rangpur, Bangladesh</h5>
                    </div>
                    <div className="col col-md-7" data-aos="fade-left"
                        data-aos-duration="1500">
                        <p className='fs-5 fw-semibold'>Hello, I'm Imran Ahmed, a passionate and dedicated frontend web developer. I am a committed student in my Third year of studies at Kurigram Govt Collage, Kurigram. My journey into the world of programming began when I discovered my love for creating visually appealing and interactive websites.To further enhance my skills, I enrolled in the "Programming Hero" Course, where I completed the web development curriculum and obtained a certificate. This course provided me with comprehensive knowledge and practical experience, enabling me to tackle real-world projects with confidence. When I'm not coding, you can find me indulging in my hobbies.I'm also a big fan of anime series and appreciate the artistry and storytelling in this medium.
                            <br />
                            I am excited to embark on new projects and collaborate with like-minded individuals. Feel free to browse through my portfolio and get in touch with me if you have any inquiries or if you'd like to discuss potential opportunities.</p>
                    </div>

                </div>
            </div ></>
    );
};

export default About;
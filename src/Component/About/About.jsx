import React from 'react';
import img from '../../../src/assets/IMG-20230131-WA0002.jpg'

const About = () => {
    return (
        <div className='banner container' id="about">
            <h1 className='text-center fw-bold mb-5'>About Me</h1>
            <div className='d-md-flex justify-content-between align-items-center mt-5'>
                <div data-aos="zoom-in">
                    <img className='rounded' style={{ width: 500, height: 500 }} src={img} alt="" />
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='ms-5 mb-3'>
                    <p className='fs-5 fw-semibold'>Hello, I'm Imran Ahmed, a passionate and dedicated frontend web developer. I am a committed student in my Third year of studies at Kurigram Govt Collage, Kurigram. My journey into the world of programming began when I discovered my love for creating visually appealing and interactive websites.To further enhance my skills, I enrolled in the "Programming Hero" Course, where I completed the web development curriculum and obtained a certificate. This course provided me with comprehensive knowledge and practical experience, enabling me to tackle real-world projects with confidence. When I'm not coding, you can find me indulging in my hobbies.I'm also a big fan of anime series and appreciate the artistry and storytelling in this medium.
                        <br />
                        I am excited to embark on new projects and collaborate with like-minded individuals. Feel free to browse through my portfolio and get in touch with me if you have any inquiries or if you'd like to discuss potential opportunities.</p>
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" className="btn btn-success fw-semibold fs-6" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                        Read More
                    </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">My Self</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h4><span className=''>Name:</span>  Md.Imran Ahmed</h4>
                                    <p className='fs-5 fw-bold'>I am a MERN Stack Web Developer</p>
                                    <p className='fs-5'><span className='fw-bold fs-5'>Expert:</span> HTML, CSS, Bootstrap, JavaScript React js,Express js, Node js, Mongodb, Tailwind CSS, DaisyUI, Firebase, Dark Mode Toggle, json web token, Axios secure, custom hooks, React reveal animation.</p>
                                    <h5>About me:</h5>
                                    <ul>
                                        <li>Age: 22 years </li>
                                        <li>Nationality: Bangladesh</li>
                                        <li>Language: English, Bengali</li>
                                        <li>Address: Haragach, Rangpur, Bangladesh</li>
                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default About;
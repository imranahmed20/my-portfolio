import React from 'react';
import project1 from '../../assets/Image/project-2 (1).png'
import project2 from '../../assets/Image/project-2 (2).png'
import project3 from '../../assets/Image/project-2 (3).png'
import { FaGithub, FaServer, FaExternalLinkAlt } from 'react-icons/fa';
import './Product.css'

const Projects = () => {
    return (
        <div className='banner container' id="projects">
            <h1 className='text-center mb-5 fw-bold'>My Projects</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col" >
                    <div className="card" data-aos="flip-left">
                        <img src={project1} className="card-img-top p-2" alt="..." />
                        <div className="card-body mb-3">
                            <h4 className="card-title">Chef Recipe</h4>
                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <a className='fs-4 me-3 text-black' href="https://github.com/imranahmed20/chef-recipe-client" target="_blank" title='Github Client'><FaGithub></FaGithub></a>
                                    <a className='fs-4 me-3 text-black' href="https://github.com/imranahmed20/chef-recipe-server" target="_blank" title='Github Server' ><FaServer></FaServer></a>
                                    <a className='fs-4 me-3 text-black' href="https://chef-recipe-client-15e57.web.app" target="_blank" title='Live Site'><FaExternalLinkAlt></FaExternalLinkAlt></a>
                                </div>
                                <div className='mt-3'>

                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn btn-success fw-semibold fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        View Details
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Chef Recipe</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h4><span className='fw-bold'>Project Name:</span>  Chef Recipe</h4>
                                    <p className='fs-5'><span className='fw-bold fs-5'>Technologies used:</span> React js, Tailwind CSS, DaisyUI, Firebase, pdf,React-lazy-load, React Carousel.</p>
                                    <h5>Features:</h5>
                                    <ul>
                                        <li>A new user account can be created. Can login and logout.</li>
                                        <li>All Chef and their short details in a card and All Recipe Page is a protected Page.</li>
                                        <li>Many recipe and chef here</li>
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
                <div className="col">
                    <div className="card" data-aos="flip-left">
                        <img src={project2} className="card-img-top p-2" alt="..." />
                        <div className="card-body mb-3">
                            <h4 className="card-title">Sports Academies</h4>
                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <a className='fs-4 me-3 text-black' href="https://github.com/imranahmed20/summer-camp-client" target="_blank" title='Github Client'><FaGithub></FaGithub></a>
                                    <a className='fs-4 me-3 text-black' href="https://github.com/imranahmed20/summer-camp-server" target="_blank" title='Github Server' ><FaServer></FaServer></a>
                                    <a className='fs-4 me-3 text-black' href="https://summer-camp-client-e60d7.web.app" target="_blank" title='Live Site'><FaExternalLinkAlt></FaExternalLinkAlt></a>
                                </div>
                                <div className='mt-3'>

                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn btn-success fw-semibold fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Sports Academies</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h4><span className='fw-bold'>Project Name:</span> Sports Academies</h4>
                                    <p className='fs-5'><span className='fw-bold fs-5'>Technologies used:</span> React js,Express js, Node js, Mongodb, Tailwind CSS, DaisyUI, Firebase, Dark Mode Toggle, json web token, Axios secure, custom hooks, React reveal animation.</p>
                                    <h5>Features:</h5>
                                    <ul>
                                        <li>Where students can create an account and select their own classes.</li>
                                        <li>Students can enroll in their selected classes by making a payment.</li>
                                        <li>Admin can create an instructor here. Then instructors can add their classes.</li>
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
                <div className="col">
                    <div className="card" data-aos="flip-left">
                        <img className='p-2' src={project3} alt="" />
                        <div className="card-body mb-3">
                            <h4 className="card-title">Doll Marketplace</h4>
                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <a className='fs-4 me-3 text-black' href="https://github.com/imranahmed20/toy-doll-client" target="_blank" title='Github Client'><FaGithub></FaGithub></a>
                                    <a className='fs-4 me-3 text-black' href="https://github.com/imranahmed20/toy-doll-server" target="_blank" title='Github Server' ><FaServer></FaServer></a>
                                    <a className='fs-4 me-3 text-black' href="https://toy-doll-client.web.app" target="_blank" title='Live Site'><FaExternalLinkAlt></FaExternalLinkAlt></a>
                                </div>
                                <div className='mt-3'>

                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn btn-success fw-semibold fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                        View Details
                                    </button>


                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Doll Marketplace</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h4><span className='fw-bold'>Project Name:</span>  Doll Marketplace</h4>
                                    <p className='fs-5'><span className='fw-bold fs-5'>Technologies used:</span> React js, Tailwind CSS, DaisyUI, Firebase, AOS Animation, Express js, Node js.</p>
                                    <h5>Features:</h5>
                                    <ul>
                                        <li>Firebase Authentication for login and logout system.</li>
                                        <li>Toy Category system with react tab.</li>
                                        <li>Add a Toy page user can add to toy and My Toy page user can see her/his added toy.</li>
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

export default Projects;
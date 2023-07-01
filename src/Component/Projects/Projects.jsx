import React from 'react';
import project1 from '../../assets/Image/project-2 (1).png'
import project2 from '../../assets/Image/project-2 (2).png'
import project3 from '../../assets/Image/project-2 (3).png'
import { FaGithub, FaLink, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center mb-5'>My Projects</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <img src={project1} className="card-img-top p-2" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Chef Recipe</h4>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <a className='fs-4 me-3 text-black' href="https://github.com/imranahmed20/chef-recipe-client" target="_blank" title='Github Client'><FaGithub></FaGithub></a>
                                    <a className='fs-4 me-3 text-black' href="https://github.com/imranahmed20/chef-recipe-server" target="_blank" title='Github Server' ><FaLink></FaLink></a>
                                    <a className='fs-4 me-3 text-black' href="https://chef-recipe-client-15e57.web.app" target="_blank" title='Live Site'><FaExternalLinkAlt></FaExternalLinkAlt></a>
                                </div>
                                <div className='mt-3'>
                                    {/* <button className='btn btn-success fw-semibold fs-5'>View Details</button> */}
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" class="btn btn-success fw-semibold fs-6" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        View Details
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chef Recipe</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <h4>Project Name: Chef Recipe</h4>
                                                    <p><span className='fw-bold'>Technologies used:</span> React js, Tailwind CSS, DaisyUI, Firebase, pdf,React-lazy-load, React Carousel.</p>
                                                    <h5>Features:</h5>
                                                    <ul>
                                                        <li>A new user account can be created. Can login and logout.</li>
                                                        <li>All Chef and their short details in a card and All Recipe Page is a protected Page.</li>
                                                        <li>Many recipe and chef here</li>
                                                    </ul>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={project2} className="card-img-top p-2" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Sports Academies</h4>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <a className='fs-4 me-3 text-black' href="https://github.com/imranahmed20/summer-camp-client" target="_blank" title='Github Client'><FaGithub></FaGithub></a>
                                    <a className='fs-4 me-3 text-black' href="https://github.com/imranahmed20/summer-camp-server" target="_blank" title='Github Server' ><FaLink></FaLink></a>
                                    <a className='fs-4 me-3 text-black' href="https://summer-camp-client-e60d7.web.app" target="_blank" title='Live Site'><FaExternalLinkAlt></FaExternalLinkAlt></a>
                                </div>
                                <div className='mt-3'>
                                    {/* <button className='btn btn-success fw-semibold fs-5'>View Details</button> */}
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" class="btn btn-success fw-semibold fs-6" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        View Details
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chef Recipe</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <h4>Project Name: Chef Recipe</h4>
                                                    <p><span className='fw-bold'>Technologies used:</span> React js, Tailwind CSS, DaisyUI, Firebase, pdf,React-lazy-load, React Carousel.</p>
                                                    <h5>Features:</h5>
                                                    <ul>
                                                        <li>A new user account can be created. Can login and logout.</li>
                                                        <li>All Chef and their short details in a card and All Recipe Page is a protected Page.</li>
                                                        <li>Many recipe and chef here</li>
                                                    </ul>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={project3} className="card-img-top p-2" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Doll Marketplace</h4>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex justify-content-between align-items-center mt-3'>
                                    <a className='fs-4 me-3 text-black' href="https://github.com/imranahmed20/toy-doll-client" target="_blank" title='Github Client'><FaGithub></FaGithub></a>
                                    <a className='fs-4 me-3 text-black' href="https://github.com/imranahmed20/toy-doll-server" target="_blank" title='Github Server' ><FaLink></FaLink></a>
                                    <a className='fs-4 me-3 text-black' href="https://toy-doll-client.web.app" target="_blank" title='Live Site'><FaExternalLinkAlt></FaExternalLinkAlt></a>
                                </div>
                                <div className='mt-3'>
                                    {/* <button className='btn btn-success fw-semibold fs-5'>View Details</button> */}
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" class="btn btn-success fw-semibold fs-6" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        View Details
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chef Recipe</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <h4>Project Name: Chef Recipe</h4>
                                                    <p><span className='fw-bold'>Technologies used:</span> React js, Tailwind CSS, DaisyUI, Firebase, pdf,React-lazy-load, React Carousel.</p>
                                                    <h5>Features:</h5>
                                                    <ul>
                                                        <li>A new user account can be created. Can login and logout.</li>
                                                        <li>All Chef and their short details in a card and All Recipe Page is a protected Page.</li>
                                                        <li>Many recipe and chef here</li>
                                                    </ul>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
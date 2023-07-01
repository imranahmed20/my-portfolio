import React from 'react';
import project1 from '../../assets/Image/project-2 (1).png'
import project2 from '../../assets/Image/project-2 (2).png'
import project3 from '../../assets/Image/project-2 (3).png'

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
                            <div className='d-flex justify-content-between align-items-center mt-3'>
                                <a href="https://github.com/imranahmed20/chef-recipe-client" title='Github Client'>a</a>
                                <a href="https://github.com/imranahmed20/chef-recipe-server">a</a>
                                <a href="https://chef-recipe-client-15e57.web.app">a</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={project2} className="card-img-top p-2" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Sports Academies</h4>
                        </div>
                        <div class="card-footer">
                            <small class="">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={project3} className="card-img-top p-2" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Doll Marketplace</h4>
                        </div>
                        <div class="card-footer">
                            <small class="">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Projects;
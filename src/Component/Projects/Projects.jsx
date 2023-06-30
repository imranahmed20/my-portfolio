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
                            <h5 className="card-title">Card title</h5>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={project2} className="card-img-top p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={project3} className="card-img-top p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Projects;
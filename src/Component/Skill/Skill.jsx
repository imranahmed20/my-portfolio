import React from 'react';
import img1 from '../../assets/Image/img-12.jfif'
import img2 from '../../assets/Image/img-13.png'
import img3 from '../../assets/Image/img-11.png'
import img4 from '../../assets/Image/img-4.jfif'
import img5 from '../../assets/Image/img-5.png'
import img6 from '../../assets/Image/img-6.png'
import img7 from '../../assets/Image/img-7.jfif'
import img8 from '../../assets/Image/img-8.png'
import img9 from '../../assets/Image/img-9.png'
import img10 from '../../assets/Image/img-10.png'


const Skill = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>My Skill</h1>

            <div className="row row-cols-1 row-cols-md-5 g-4">
                <div className="col">
                    <div className="card">
                        <img src={img1} className="card-img-top p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center fs-3 fw-bold">HTML</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img2} className="card-img-top p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center fs-3 fw-bold">CSS</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img3} className="card-img-top p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center fs-3 fw-bold">JavaScript</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img4} className="card-img-top img-fluid p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center fs-3 fw-bold">Bootstrap</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img5} className="card-img-top img-fluid p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center fs-3 fw-bold">Twilwind</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img6} className="card-img-top img-fluid p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center fs-3 fw-bold">Firebase</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img7} className="card-img-top img-fluid p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center fs-3 fw-bold">Node JS</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img8} className="card-img-top img-fluid p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center fs-3 fw-bold">React</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img9} className="card-img-top img-fluid p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center fs-3 fw-bold">MongoDB</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={img10} className="card-img-top img-fluid p-2" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center fs-3 fw-bold">Express</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
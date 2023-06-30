import React from 'react';
import Header from '../Share/Header';
import Banner from '../Component/Banner/Banner';
import Footer from '../Share/Footer';
import About from '../Component/About/About';
import Skill from '../Component/Skill/Skill';
import Projects from '../Component/Projects/Projects';

const Main = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Footer></Footer>

        </div>
    );
};

export default Main;
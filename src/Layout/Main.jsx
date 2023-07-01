import React from 'react';
import Header from '../Share/Header';
import Banner from '../Component/Banner/Banner';
import Footer from '../Share/Footer';
import About from '../Component/About/About';
import Skill from '../Component/Skill/Skill';
import Projects from '../Component/Projects/Projects';
import Contact from '../Component/Contact/Contact';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;
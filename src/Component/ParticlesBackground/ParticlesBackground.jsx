import React from 'react';
import Particles from 'react-particles';
import particlesConfig from '../config/Particles-config';

export default function ParticlesBackground() {
    return (
        <Particles props={particlesConfig}></Particles>
    )
}
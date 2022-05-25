import React from 'react';
import { Link } from 'react-router-dom';
import Chair from '../../assets/images/chair.png';
import MainButton from '../Shared/MainButton';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-[url('./assets/images/bg.png')] bg-center">
            <div className="hero-content py-0 flex-col lg:flex-row-reverse">
                <img src={Chair} className="w-2/4 rounded-lg shadow-2xl" alt='' />
                <div className="w-2/4 mr-10">
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <MainButton><Link to="/appointment">Get Started</Link></MainButton>
                </div>
            </div>
        </div>
    );
};

export default Hero;
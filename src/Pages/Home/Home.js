import React from 'react';
import HomeAppointment from './HomeAppointment';
import Hero from './Hero';
import Info from './Info';
import Services from './Services';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <Info />
            <Services />
            <HomeAppointment />
            <Footer />
        </>
    );
};

export default Home;
import React, { useState } from 'react';
import Banner from './Banner';
import Services from './Services';
import Footer from '../Shared/Footer/Footer';

const Appointment = () => {

    const [date, setDate] = useState(new Date());

    return (
        <div className='container mx-auto'>
            <Banner date={date} setDate={setDate} />
            <Services date={date} />
            <Footer />
        </div>
    );
};

export default Appointment;
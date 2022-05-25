import React from 'react';
import { Link } from 'react-router-dom';
import doctorSmall from '../../assets/images/doctor-small.png';
import MainButton from '../Shared/MainButton';

const HomeAppointment = () => {
    return (
        <div className="hero bg-[url('./assets/images/appointment.png')] mt-24">
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctorSmall} className="rounded-lg max-w-lg -mt-24" alt='' />
                <div className='text-white mr-12'>
                    <h4 className='text-secondary font-bold'>Appointment</h4>
                    <h1 className="text-4xl mt-4">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <MainButton><Link to="/appointment">Get Started</Link></MainButton>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;
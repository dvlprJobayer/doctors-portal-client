import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Chair from '../../assets/images/chair.png';
import bgChair from '../../assets/images/bg.png';

const Banner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgChair})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Chair} className="max-w-xl rounded-lg shadow-2xl" alt='' />
                <div className='shadow-lg rounded-lg lg:mr-12 bg-white'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
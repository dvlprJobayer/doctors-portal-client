import React from 'react';
import Clock from '../../assets/icons/clock.svg'

const Card = ({ bg }) => {
    return (
        <div className={`${bg} px-8 flex items-center w-[420px] h-[150px] rounded-xl`}>
            <img src={Clock} alt="" />
            <div className='text-white ml-4'>
                <h6>Opening Hours</h6>
                <p>Lorem Ipsum is simply dummy text of the pri</p>
            </div>
        </div>
    );
}

const Info = () => {
    return (
        <div className='flex justify-evenly mb-12'>
            <Card bg="bg-primary" />
            <Card bg="bg-accent" />
            <Card bg="bg-primary" />
        </div>
    );
};

export default Info;
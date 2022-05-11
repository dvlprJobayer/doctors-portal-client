import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import Treatment from '../../assets/images/treatment.png';

const ServiceCard = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={fluoride} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Fluoride Treatment</h2>
                <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
            </div>
        </div>
    );
}

const Services = () => {
    return (
        <div className='container mx-auto'>
            <p className='text-center uppercase font-bold text-secondary'>Our Services</p>
            <h2 className='text-center text-accent text-4xl font-normal mt-3'>Services We Provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center'>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
            <div className='mx-16'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={Treatment} className="max-w-md rounded-lg shadow-2xl" alt='' />
                        <div className='ml-16'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
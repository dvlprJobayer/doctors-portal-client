import React from 'react';
import MainButton from '../Shared/MainButton';

const Contact = () => {
    return (
        <div className="bg-[url('./assets/images/appointment.png')] text-center py-8">
            <h4 className='text-secondary font-bold'>Contact Us</h4>
            <h2 className='text-4xl text-white mb-4'>Stay connected with us</h2>
            <form>
                <div className="flex flex-col w-2/5 mx-auto">
                    <input className='mb-4 rounded-lg p-3 text-lg' placeholder='Email Address' type="email" name="" id="" />
                    <input placeholder='Subject' className='mb-4 rounded-lg p-3 text-lg' type="text" />
                    <textarea placeholder='Your Message' className='mb-6 rounded-lg p-3 text-lg' name="" id="" cols="20" rows="5"></textarea>
                </div>
                <MainButton>Submit</MainButton>
            </form>
        </div>
    );
};

export default Contact;
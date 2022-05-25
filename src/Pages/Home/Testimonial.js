import React from 'react';
import quote from '../../assets/icons/quote.svg'

const Testimonial = () => {
    return (
        <div className='-mt-4 bg-white'>
            <div className="container mx-auto">
                <div className='py-12 flex justify-between'>
                    <div>
                        <h4 className='text-secondary font-bold'>Testimonial</h4>
                        <h2 className='text-4xl text-accent'>What Our Patients Says</h2>
                    </div>
                    <img width={192} height={156} src={quote} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
import React from 'react';

const Service = ({ service, setTreatment }) => {
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold text-secondary">{service.name}</h2>
                <p>{service.slots[0]}</p>
                <p>{service.slots.length} SPACES AVAILABLE</p>
                <p>Fees: <span className='text-secondary'>${service.Price}</span></p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" onClick={() => setTreatment(service)} className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;
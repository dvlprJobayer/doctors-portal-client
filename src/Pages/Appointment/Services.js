import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axiosDoctors from '../../api/doctors';
import Loading from '../Shared/Loading/Loading';
import BookingModal from './BookingModal';
import Service from './Service';


const Services = ({ date }) => {

    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => axiosDoctors(`/available?date=${formattedDate}`));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-10'>
            <h4 className="text-secondary text-xl font-bold text-center mb-10">Available Appointments on {formattedDate}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.data.map(service => <Service setTreatment={setTreatment} key={service._id} service={service} />)
                }
            </div>
            {
                treatment && <BookingModal refetch={refetch} date={date} treatment={treatment} setTreatment={setTreatment} />
            }
        </div>
    );
};

export default Services;
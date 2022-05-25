import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import axiosDoctors from '../../api/doctors';
import auth from '../../Firebase/firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyAppointments = () => {

    const [user] = useAuthState(auth);
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, 'PP');

    const { data: myAppointment, isLoading } = useQuery(['my-appointment', formattedDate], () => axiosDoctors(`/my-appointment?date=${formattedDate}&email=${user?.email}`));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="flex justify-between">
                <h3 className='text-3xl mb-6'>My Appointment</h3>
                {/* Modal Button */}
                <label htmlFor="date-modal" className="btn btn-accent btn-outline modal-button">{formattedDate}</label>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                            <th>Fees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAppointment.data.map((appointment, index) => <tr key={appointment._id}>
                                <th>{index + 1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.slot}</td>
                                <td className='text-secondary'>${appointment.price}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            <input type="checkbox" id="date-modal" className="modal-toggle" />
            <label htmlFor="date-modal" className="modal top-36 items-start justify-end bg-transparent cursor-pointer">
                <label className="modal-box p-0 w-auto relative" htmlFor="">
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </label>
            </label>
        </div>
    );
};

export default MyAppointments;
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import axiosDoctors from '../../api/doctors';
import auth from '../../Firebase/firebase.init';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {

    const formateDate = format(date, 'PP');

    const { _id, name, Price } = treatment;

    const [user] = useAuthState(auth);

    const bookingForm = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            price: Price,
            patient: user.email,
            patientName: user.displayName,
            date: formateDate,
            slot,
            phone: event.target.phone.value
        }

        axiosDoctors.post('/booking', booking).then(res => {
            refetch();
            console.log(res);
            toast.success(`Your Appointment is set ${formateDate} at ${slot}`)
        }).catch(err => {
            console.log(err);
            toast.error(`You have already an appointment ${err.response.data.booking.treatment} on ${err.response.data.booking.date}`);
        }).then(() => setTreatment(null))

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className='text-accent text-2xl font-semibold mb-4'>{name}</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={bookingForm}>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full mb-4" disabled />
                        <select name='slot' className="select select-bordered w-full mb-4">
                            {
                                treatment.slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" value={'$' + Price} className="input input-bordered w-full mb-4" disabled />
                        <input type="text" value={user?.displayName} className="input input-bordered w-full mb-4" disabled />
                        <input name='email' value={user?.email} className="input input-bordered w-full mb-4" disabled />
                        <input name='phone' type="text" placeholder='Phone Number' className="input input-bordered w-full mb-4" />
                        <div className="text-center">
                            <button className="btn btn-accent w-full text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
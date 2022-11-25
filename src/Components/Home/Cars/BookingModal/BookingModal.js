import React from 'react';

const BookingModal = ({ car, bookingHandler }) => {
    return (
        <>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box text-gray-800 text-left">
                    <div className="card bg-base-100">
                        <figure className='border-b-2'><img src={car.img} alt="Movie" /></figure>
                        <div className="card-body pb-0 px-0">
                            <h2 className="card-title w-full font-serif">Modal: <strong>{car.car_model}</strong></h2>
                            <p className='text-base font-medium'>Brand: <strong>{car.brand}</strong></p>
                            <p class="mb-3 text-gray-900 font-semibold dark:text-gray-400">Price: <strong className='text-red-600'>${car.price}</strong></p>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor='my-modal' className="btn btn-sm btn-circle bg-slate-700 absolute right-2 top-2">✕</label>
                        <label htmlFor='my-modal' onClick={() => {
                            bookingHandler(car)
                        }} className="btn btn-primary">Booking Confirm</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
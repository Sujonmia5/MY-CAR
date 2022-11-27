import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/Context';
import BookingModal from './BookingModal/BookingModal';
import CarsCard from './CarsCard/CarsCard';

const Cars = () => {
    const { user } = useContext(AuthContext)
    const [bookingCar, setBookingCar] = useState({})
    const [modalClose, setModalClose] = useState(null)
    const cars = useLoaderData()

    return (
        <div className='lg:w-[1240px] mt-10 grid lg:grid-cols-2 gap-y-5 mx-auto '>
            {
                cars.map(car => < CarsCard key={car._id}
                    car={car}
                    setBookingCar={setBookingCar}
                    setModalClose={setModalClose}
                ></CarsCard>
                )
            }
            {
                modalClose && <BookingModal
                    bookingCar={bookingCar}
                    setModalClose={setModalClose}
                />
            }
        </div >
    );
};

export default Cars;
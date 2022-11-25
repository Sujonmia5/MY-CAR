import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../Context/Context';
import { FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import BookingModal from '../BookingModal/BookingModal';

const CarsCard = ({ car }) => {
    const { user } = useContext(AuthContext)
    const { brand, car_model, img, address, buy, color, condition, date, fuel_type, price, seller_info, _id, booking
    } = car

    const bookingHandler = (data) => {
        console.log(data);
        const orderData = {
            brand: data.brand,
            car_model: data.car_model,
            img: data.img,
            address: data.address,
            buy: data.buy,
            price: data.price,
            date: data.date,
            seller_info: data.seller_info,
            buyer_name: user.displayName,
            buyer_email: user.email,
        }
        console.log(orderData);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    fetch(`http://localhost:5000/bookings?id=${_id}`, {
                        method: "PUT",
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('Booking Done')
                            console.log(data)
                        })
                }
            })
    }

    const reportHandler = (car) => {
        const reportedCar = {
            ...car,
            report: true,
            reporter_info: {
                name: user.displayName,
                email: user.email,
            }
        }

        fetch('http://localhost:5000/report', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportedCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Reported Success')
                }
            })
    }
    return (
        <>
            <div class="flex mx-auto flex-col  bg-white border-2 border-[#ffcb5f] rounded-lg hover:shadow-md hover:shadow-yellow-300 md:flex-col md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 md:w-[550px] dark:hover:bg-gray-700 relative" alt=''>

                <img class="object-cover w-full rounded-t-lg h-96 md:h-80 md:w-auto md:rounded-none md:rounded-l-lg" src={img} alt="" />
                <div class="grid grid-cols-2 text-left mt-5">
                    <div className='ml-5 pb-4'>
                        <h5 class="mb-2 text-base font-serif font-bold tracking-tight text-gray-900 dark:text-white">{car_model}</h5>
                        <div className=''>
                            <p className='text-gray-600 text-sm'>Brand: <strong>{brand}</strong></p>
                            <p className='text-gray-600 text-sm'>Condition: {condition}</p>
                        </div>
                        <p className='text-gray-600 text-sm'>Location: {address}</p>
                        <p className='text-gray-600 text-sm'>Registration: {buy}</p>
                        <p className='text-gray-600 text-sm'>Fuel Type: {fuel_type}</p>
                        <p className='text-gray-600 text-sm'>Color: {color}</p>
                        <p className='text-gray-600 text-sm'>Post Date: {date}</p>

                        <p class="mb-3 text-gray-900 font-semibold dark:text-gray-400">Price: <strong className='text-red-600'>${price}</strong></p>
                    </div>
                    <div className='mr-5 space-y-0'>
                        <h1 class="mb-2 text-base font-serif font-bold tracking-tight text-gray-900 dark:text-white"> Seller Information</h1>
                        <p className='mb-3 font-semibold text-gray-900 dark:text-gray-400'>Name: {seller_info.name}</p>
                        <p className='mb-3 font-semibold text-gray-900 dark:text-gray-400'>Verified: {seller_info?.verify ? <span className='text-green-500'>seller_info.verify</span> : <span className='text-yellow-400'>NoN Verified</span>}</p>
                        <p className='mb-3 font-semibold text-gray-900 dark:text-gray-400'>Email: {seller_info.email}</p>
                        <p className='mb-3 font-semibold text-gray-900 dark:text-gray-400'>Number: {seller_info?.number ? `${seller_info.number}` : 'Not a number'}</p>
                    </div>
                </div>
                <label htmlFor="my-modal" className={booking ? 'btn-disabled btn absolute bottom-2 btn-md right-2 bg-gray-600 text-gray-200' : 'btn absolute btn-primary bottom-2 btn-md right-2'}>{booking ? 'Already Booked' : 'Booking Now'}
                    <FaArrowRight className='w-5 disabled:text-white  text-gray-200 ml-2'></FaArrowRight>
                </label>
                <div className='flex justify-start ml-4 pb-2'>
                    <button onClick={() => reportHandler(car)} className='btn btn-sm btn-error absolute top-2 left-2' title='Report Item' >
                        <FaExclamationTriangle></FaExclamationTriangle>  Report
                    </button>
                </div>
            </div>
            <BookingModal
                bookingHandler={bookingHandler}
                car={car} />
        </>
    );
};

export default CarsCard;
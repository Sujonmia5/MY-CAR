import React from 'react';
import { Link } from 'react-router-dom';

const CarsCard = ({ car }) => {
    const { brand, car_model, img, address, buy, color, condition, date, fuel_type, price, seller_info, selling_address
    } = car
    console.log(car);
    return (
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
            <button className='btn absolute btn-primary bottom-2 btn-md right-2'>Booking Now
                <svg className='w-5 text-gray-100  ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
            </button>
        </div>
    );
};

export default CarsCard;
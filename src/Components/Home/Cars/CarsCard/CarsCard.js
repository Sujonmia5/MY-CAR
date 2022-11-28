import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../Context/Context';
import { FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Shared/Spinner/Spinner';

const CarsCard = ({ car, setBookingCar, setModalClose }) => {

    const { user } = useContext(AuthContext)
    const { brand, car_model, img, address, buy, color, condition, date, fuel_type, price, seller_info, booking
    } = car

    const { data: verifyUser = {}, isLoading } = useQuery({
        queryKey: ['car', car],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-side-hazel.vercel.app/verify/check?email=${car?.seller_info?.email}`, {
                headers: {
                    authorization: `${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Spinner />
    }



    const reportHandler = (car) => {
        // (car);
        const { address, brand, buy, car_model, color, condition, fuel_type, img, model, price, seller_info, sold, selling_address, _id: carId } = car

        const reportedCar = {
            address, brand, buy, car_model, color, condition, fuel_type, img, model, price, seller_info, sold, selling_address,
            carId,
            report: true,
            reporter_info: {
                name: user.displayName,
                email: user.email,
            }
        }

        fetch('https://assignment-12-server-side-hazel.vercel.app/report', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `${localStorage.getItem('accessToken')}`
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
            <div className="flex mx-auto flex-col  bg-white border-2 border-[#ffcb5f] rounded-lg hover:shadow-md hover:shadow-yellow-300 md:flex-col md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 md:w-[550px] dark:hover:bg-gray-700 relative" alt=''>

                <img className="object-cover w-full rounded-t-lg h-96 md:h-80 md:w-auto md:rounded-none md:rounded-l-lg" src={img} alt="" />
                <div className="grid grid-cols-2 text-left mt-5">
                    <div className='ml-5 pb-4'>
                        <h5 className="mb-2 text-base font-serif font-bold tracking-tight text-gray-900 dark:text-white">{car_model}</h5>
                        <div className=''>
                            <p className='text-gray-600 text-sm'>Brand: <strong>{brand}</strong></p>
                            <p className='text-gray-600 text-sm'>Condition: {condition}</p>
                        </div>
                        <p className='text-gray-600 text-sm'>Location: {address}</p>
                        <p className='text-gray-600 text-sm'>Registration: {buy}</p>
                        <p className='text-gray-600 text-sm'>Fuel Type: {fuel_type}</p>
                        <p className='text-gray-600 text-sm'>Color: {color}</p>
                        <p className='text-gray-600 text-sm'>Post Date: {date?.split('T')[0]}</p>

                        <p className="mb-3 text-gray-900 font-semibold dark:text-gray-400">Price: <strong className='text-red-600'>${price}</strong></p>
                    </div>
                    <div className='mr-5 space-y-0'>
                        <h1 className="mb-2 text-base font-serif font-bold tracking-tight text-gray-900 dark:text-white"> Seller Information</h1>
                        <h1 className='mb-3 relative inline font-semibold text-gray-900 dark:text-gray-400'>Name: {seller_info.name}
                            <p className='absolute top-1 -right-4'>{verifyUser?.isVerify ? <HiBadgeCheck className='text-blue-600'></HiBadgeCheck> : ""}
                            </p>
                        </h1>
                        <p className='mb-3 font-semibold text-gray-900 dark:text-gray-400'>Verified: {verifyUser?.isVerify ? <span className='text-green-500 font-serif'>Yse</span> : <span className='text-yellow-400'>No</span>}</p>
                        <p className='mb-3 font-semibold text-gray-900 dark:text-gray-400'>Email: {seller_info.email}</p>
                        <p className='mb-3 font-semibold text-gray-900 dark:text-gray-400'>Number: {seller_info?.number ? `${seller_info.number}` : 'Not a number'}</p>
                    </div>
                </div>
                <label onClick={() => {
                    setBookingCar(car)
                    setModalClose(true)
                }} htmlFor="booked-modal" className={booking ? 'btn-disabled btn absolute bottom-2 btn-md right-2 bg-gray-600 text-gray-200' : 'btn absolute btn-primary bottom-2 btn-md right-2'}>{booking ? 'Already Booked' : 'Booking Now'}
                    <FaArrowRight className='w-5 disabled:text-white  text-gray-200 ml-2'></FaArrowRight>
                </label>
                <div className='flex justify-start ml-4 pb-2'>
                    <button onClick={() => reportHandler(car)} className='btn btn-sm btn-error absolute top-2 left-2' title='Report Item' >
                        <FaExclamationTriangle></FaExclamationTriangle>  Report
                    </button>
                </div>
            </div>

        </>
    );
};

export default CarsCard;
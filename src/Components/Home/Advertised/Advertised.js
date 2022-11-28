import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import AdvertiseCard from './AdvertiseCard/AdvertiseCard';

const Advertised = () => {
    const { data: Advertise = [], isLoading } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-side-hazel.vercel.app/advertise', {
                headers: {
                    authorization: `${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='lg:mx-28  mx-auto mt-20'>
            <h1 className='text-center text-gray-700 font-bold font-serif text-4xl my-5'>Discount Offer</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-8'>
                {
                    Advertise.map(add => <AdvertiseCard key={add._id}
                        add={add}></AdvertiseCard>)
                }
            </div>
        </div>
    );
};

export default Advertised;
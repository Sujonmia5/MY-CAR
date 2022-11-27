import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Shared/Spinner/Spinner';

const Advertised = () => {
    const { data: Advertise = [], isLoading } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise', {
                headers: {
                    authorization: `${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    console.log(Advertise);
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='mt-20'>Advertised </div>
    );
};

export default Advertised;
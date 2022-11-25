import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Shared/Spinner/Spinner';

const AllBuyers = () => {


    const { data: AllBuyers = [], isLoading } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers?role=buyer')
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Spinner />
    }
    console.log(AllBuyers);

    return (
        <>
            <h1 className='text-gray-800 text-center'>ALL Buyers</h1>
            <div className='flex justify-start w-full md:h-[70vh]  mt-10'>
                <div className="container pl-10 pr-36 overflow-x-auto col-span-4">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className='text-base'></th>
                                <th className='text-base'>Buyer Name</th>
                                <th className='text-base'>Buyer Email</th>
                                <th className='text-base'>Seller Make</th>
                                <th className='text-base'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllBuyers.map((seller, i) =>
                                    <tr key={seller._id}>
                                        <th className='text-gray-800'>{i + 1}</th>

                                        <td className='text-gray-800'><strong>{seller.name}</strong></td>
                                        <td className='text-gray-800'><strong>{seller.email}</strong></td>
                                        <td className='text-gray-800'>
                                            <button className='btn btn-info btn-sm'>Make Seller</button>
                                        </td>
                                        <td className='text-gray-800'>
                                            <button className='btn btn-error btn-sm'>Delete</button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
};

export default AllBuyers;
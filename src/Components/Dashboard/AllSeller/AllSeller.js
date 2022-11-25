import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Shared/Spinner/Spinner';

const AllSeller = () => {

    const { data: AllSellers = [], isLoading } = useQuery({
        queryKey: ['allSeller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers?role=seller')
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <h1 className='text-gray-800 text-center'>ALL SELLERS</h1>
            <div className='flex justify-start w-full md:h-[70vh]  mt-10'>
                <div className="container pl-10 pr-36 overflow-x-auto col-span-4">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className='text-base'></th>
                                <th className='text-base'>Seller Name</th>
                                <th className='text-base'>Seller Email</th>
                                <th className='text-base'>Seller Delete</th>
                                <th className='text-base'>Delete User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllSellers.map((seller, i) =>
                                    <tr key={seller._id}>
                                        <th className='text-gray-800'>{i + 1}</th>

                                        <td className='text-gray-800'><strong>{seller.name}</strong></td>
                                        <td className='text-gray-800'><strong>{seller.email}</strong></td>
                                        <td className='text-gray-800'>
                                            <button className='btn btn-error btn-sm'>Remove Seller</button>
                                        </td>
                                        <td className='text-gray-800'>
                                            <button className='btn btn-success btn-sm'>Delete Seller</button>
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

export default AllSeller;
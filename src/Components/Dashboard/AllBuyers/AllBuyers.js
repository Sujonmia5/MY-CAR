import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/Context';
import Spinner from '../../Shared/Spinner/Spinner';
import UserPhoto from '../../../assets/userPhoto.svg';

const AllBuyers = () => {
    const { user } = useContext(AuthContext)

    const { data: AllBuyers = [], isLoading, refetch } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers?role=buyer', {
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
    const MakeSeller = (id) => {
        fetch(`http://localhost:5000/sellers?id=${id}&role=seller`, {
            method: "PUT",
            headers: {
                authorization: `${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller make Successful')
                    refetch()
                }
            })
    }

    return (
        <>
            <h1 className='text-gray-800 text-center'>ALL Buyers</h1>
            <div className='flex justify-start w-full md:h-[70vh]  mt-10'>
                <div className="container pl-10 pr-36 overflow-x-auto col-span-4">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className='text-base'></th>
                                <th className='text-base'>Buyer Photo</th>
                                <th className='text-base'>Buyer Name</th>
                                <th className='text-base'>Buyer Email</th>
                                <th className='text-base'>Seller Make</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllBuyers.map((seller, i) =>
                                    <tr key={seller._id}>
                                        <th className='text-gray-800'>{i + 1}</th>
                                        <td className='text-gray-800'>
                                            <div className="mask w-16 h-16 rounded">
                                                <img className='w-full rounded' src={user?.photoURL ? `${user.photoURL}` :
                                                    `${UserPhoto}`
                                                } alt="Profile Pic" />
                                            </div>
                                        </td>
                                        <td className='text-gray-800'><strong>{seller.name}</strong></td>

                                        <td className='text-gray-800'><strong>{seller.email}</strong></td>
                                        <td className='text-gray-800'>
                                            <button onClick={() => MakeSeller(seller._id)} className='btn btn-info btn-sm'>Make Seller</button>
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
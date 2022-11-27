import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Context';
import Spinner from '../../Shared/Spinner/Spinner';
import UserPhoto from '../../../assets/userPhoto.svg';
import { toast } from 'react-toastify';

const AllSeller = () => {
    const { user } = useContext(AuthContext)
    const { data: AllSellers = [], isLoading, refetch } = useQuery({
        queryKey: ['allSeller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers?role=seller', {
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

    const RemoveSeller = (id) => {
        fetch(`http://localhost:5000/sellers?id=${id}&role=buyer`, {
            method: "PUT",
            headers: {
                authorization: `${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
    }

    const VerifySeller = (seller) => {
        console.log(seller.email);
        fetch(`http://localhost:5000/verify/seller?email=${seller.email}`, {
            method: "PUT",
            headers: {
                authorization: `${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verified Successful')
                    refetch()
                }
            })
    }

    const DeleteVerify = (seller) => {
        console.log(seller.email);
        fetch(`http://localhost:5000/verify/delete?email=${seller.email}`, {
            method: "PUT",
            headers: {
                authorization: `${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verified Deleted Successful')
                    refetch()
                }
            })
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
                                <th className='text-base'>Seller Photo</th>
                                <th className='text-base'>Seller Name or Email</th>
                                <th className='text-base'>Verify Seller</th>
                                <th className='text-base'>Seller Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllSellers.map((seller, i) =>
                                    <tr key={seller._id}>
                                        <th className='text-gray-800'>{i + 1}</th>
                                        <td className='text-gray-800 pr-0'>
                                            <div className="mask w-16 h-16 rounded">
                                                <img className='w-full rounded' src={user?.photoURL ? `${user.photoURL}` :
                                                    `${UserPhoto}`
                                                } alt="Profile Pic" />
                                            </div>
                                        </td>
                                        <td className='text-gray-800  pr-0'>
                                            <p><strong>Name: {seller.name}</strong></p>
                                            <strong>Email: {seller.email}</strong>
                                        </td>
                                        <td className='text-gray-800'>
                                            {
                                                seller?.verify ?
                                                    <button onClick={() => DeleteVerify(seller)} className='btn btn-sm btn-error'>Remove Verify</button>
                                                    :
                                                    <button onClick={() => VerifySeller(seller)} className='btn btn-sm btn-info'>Verify</button>
                                            }
                                        </td>
                                        <td className='text-gray-800'>
                                            <button onClick={() => RemoveSeller(seller._id)} className='btn btn-error btn-sm'>Remove Seller</button>
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
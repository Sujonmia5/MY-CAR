import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/Context';
import Spinner from '../../Shared/Spinner/Spinner';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext)
    const { data: MyProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['My Product', user.email, user.displayName],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-side-hazel.vercel.app/myProduct?email=${user?.email}&name=${user?.displayName}`, {
                headers: {
                    authorization: `${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })
    const AdvertiseHandler = (id) => {
        fetch(`https://assignment-12-server-side-hazel.vercel.app/advertise?id=${id}`, {
            method: "PUT",
            headers: {
                authorization: `${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Advertise Successful')
                    refetch()
                }

            })
    }


    if (isLoading || loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='flex justify-start w-full md:h-[70vh]  mt-10'>
            <div className="container pl-10 pr-36 overflow-x-auto col-span-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Car Photo</th>
                            <th>Model/
                                <br />
                                Brand
                            </th>
                            <th>Sell Price</th>
                            <th>Available/
                                <p>Sold</p>
                            </th>
                            <th>Delete Item</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            MyProducts.map((product, i) =>
                                <tr key={product._id}>
                                    <th className='text-gray-800'>{i + 1}</th>
                                    <td className='text-gray-800'>
                                        <div className="mask w-16 h-16 rounded">
                                            <img className='w-full rounded' src={product.img} alt="Car Pic" />
                                        </div>
                                    </td>
                                    <td className='text-gray-800'>{product.car_model}
                                        <p><strong>{product.brand}</strong></p>
                                    </td>
                                    <td className=''><strong className='text-warning'>${product.price}</strong></td>
                                    <td className='text-gray-800'>{product.sold ? <strong className='text-red-600'>Sold</strong> : <strong className='text-green-500'>Available</strong>}</td>
                                    <td className='text-gray-800'>
                                        <button className='btn btn-error btn-sm'>Delete</button>
                                    </td>
                                    <td className='text-gray-800'>
                                        <button onClick={() => AdvertiseHandler(product._id)} className={product.advertise || product.sold ? `btn-disabled btn btn-sm bg-slate-600 text-gray-300` : 'btn btn-success btn-sm'}>Advertise</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyProducts;
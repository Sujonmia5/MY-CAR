import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Context';
import Spinner from '../../Shared/Spinner/Spinner';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext)
    console.log(user.email);
    const { data: MyOrders = [], isLoading } = useQuery({
        queryKey: ['MyOrders', user.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    if (loading || isLoading) {
        return <Spinner />
    }
    return (
        <div className='flex justify-start w-full md:h-[70vh]  mt-10'>
            <div className="container pl-10 pr-36 overflow-x-auto col-span-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Car Photo</th>
                            <th>Model</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Delete Item</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            MyOrders.map((order, i) =>
                                <tr key={order._id}>
                                    <th className='text-gray-800'>{i + 1}</th>
                                    <td className='text-gray-800'>
                                        <div className="mask w-16 h-16 rounded">
                                            <img className='w-full rounded' src={order.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </td>
                                    <td className='text-gray-800'>{order.car_model}</td>
                                    <td className='text-gray-800'><strong>{order.brand}</strong></td>
                                    <td className=''><strong className='text-warning'>${order.price}</strong></td>
                                    <td className='text-gray-800'>
                                        <button className='btn btn-error btn-sm'>Delete</button>
                                    </td>
                                    <td className='text-gray-800'>
                                        <button className='btn btn-success btn-sm'>pay</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;
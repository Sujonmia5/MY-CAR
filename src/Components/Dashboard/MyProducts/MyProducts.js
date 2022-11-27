import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/Context';
import Spinner from '../../Shared/Spinner/Spinner';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext)
    const { data: MyProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['My Product', user.email, user.displayName],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProduct?email=${user?.email}&name=${user?.displayName}`)
            const data = await res.json()
            return data;
        }
    })

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
                                        <button className={product.sold === true ? `btn-disabled btn btn-sm bg-slate-600 text-gray-300` : 'btn btn-success btn-sm'}>advertise</button>
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
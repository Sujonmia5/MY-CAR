import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Shared/Spinner/Spinner';

const ReportedItems = () => {

    const { data: ReportCars = [], isLoading, refetch } = useQuery({
        queryKey: ['reported'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/report')
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='flex justify-start w-full md:h-[70vh]  mt-10'>
            <div className="container pl-10 pr-36 overflow-x-auto col-span-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Report Car Photo</th>
                            <th>Model/Brand</th>
                            <th>Price</th>
                            <th>Reporter Info</th>
                            <th>Delete Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ReportCars.map((report, i) =>
                                <tr key={report._id}>
                                    <th className='text-gray-800'>{i + 1}</th>
                                    <td className='text-gray-800'>
                                        <div className="mask w-16 h-16 rounded">
                                            <img className='w-full rounded' src={report.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </td>
                                    <td className='text-gray-800'>
                                        <strong>Model: {report.car_model}</strong>
                                        <p>Brand: {report.brand}</p>
                                    </td>
                                    <td className=''><strong className='text-warning'>${report.price}</strong></td>
                                    <td className='text-gray-800'>
                                        <strong>{report.reporter_info.name}</strong>
                                        <p>Email: {report.reporter_info.email}</p>
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
    );
};

export default ReportedItems;
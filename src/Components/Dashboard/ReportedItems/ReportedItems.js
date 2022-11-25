import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
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
    const deleteReport = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/report?id=${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Report Deleted Successful')
                    refetch()
                }
                console.log(data);
            })
    }
    return (
        <div className='flex justify-start w-full md:h-[70vh]  mt-10'>
            <div className="container pl-10 pr-36 overflow-x-auto col-span-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-center p-2'>S.N</th>
                            <th className='text-center'>Report
                                <br />
                                Car Photo</th>
                            <th>Model/Brand</th>
                            <th>Price</th>
                            <th className='pr-0'>Reporter Info</th>
                            <th className='text-center'>Delete Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ReportCars.map((report, i) =>
                                <tr key={report._id}>
                                    <th className='text-gray-800 p-1 text-center'>{i + 1}</th>
                                    <td className='text-gray-800 py-2 px-2'>
                                        <div className="mask w-24 rounded">
                                            <img className='w-full rounded' src={report.img} alt="Car Pic" />
                                        </div>
                                    </td>
                                    <td className='text-gray-800'>
                                        <strong>{report.car_model}</strong>
                                        <p>Brand: {report.brand}</p>
                                    </td>
                                    <td className=''><strong className='text-warning'>${report.price}</strong></td>
                                    <td className='text-gray-800 pr-0'>
                                        <strong>{report.reporter_info.name}</strong>
                                        <p>{report.reporter_info.email}</p>
                                    </td>
                                    <td>
                                        <button onClick={() => deleteReport(report._id)} className='btn btn-error btn-sm'>Delete Report</button>
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
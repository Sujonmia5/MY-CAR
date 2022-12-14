import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import UserPhoto from '../../../assets/userPhoto.svg';
import Spinner from '../../Shared/Spinner/Spinner';

const AllUsers = () => {

    const { data: Users = [], isLoading, refetch } = useQuery({
        queryKey: ['Usersed'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-side-hazel.vercel.app/users', {
                headers: {
                    authorization: `${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })

    const AdminHandler = (email, role) => {
        fetch(`https://assignment-12-server-side-hazel.vercel.app/users?email=${email}&&role=${role}`, {
            method: 'PUT',
            headers: {
                authorization: `${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin Added Successful')
                    refetch()
                }

            })
    }
    const AdminRemoveHandler = (email, role) => {
        fetch(`https://assignment-12-server-side-hazel.vercel.app/users?email=${email}&&role=${role}`, {
            method: 'PUT',
            headers: {
                authorization: `${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin Remove Successful')
                    refetch()
                }
            })
    }
    const UserDeleteHandler = (email) => {
        fetch(`https://assignment-12-server-side-hazel.vercel.app/users?email=${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('User Deleted Successful')
                    refetch()
                }
            })
    }

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
                            <th>User Photo</th>
                            <th>Name/Email</th>
                            <th>Make Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Users.map((user, i) =>
                                <tr key={user._id}>
                                    <th className='text-gray-800'>{i + 1}</th>
                                    <td className='text-gray-800'>
                                        <div className="mask w-16 h-16 rounded">
                                            <img className='w-full rounded' src={user?.photoURL ? `${user.photoURL}` :
                                                `${UserPhoto}`
                                            } alt="Profile Pic" />
                                        </div>
                                    </td>
                                    <td className='text-gray-800'>
                                        <strong>Name: {user.name}</strong>
                                        <p>Email: {user?.email}</p>
                                    </td>
                                    <td className='text-gray-800'>
                                        {
                                            user.role !== 'admin' && <button onClick={() => AdminHandler(user.email, 'admin')} className='btn btn-info btn-sm'>Make Admin</button>
                                        }
                                        {
                                            user.role === 'admin' && <button onClick={() => AdminRemoveHandler(user.email, 'buyer')} className='btn btn-error btn-sm'>Remove Admin</button>
                                        }
                                    </td>
                                    <td className='text-gray-800'>
                                        <button onClick={() => UserDeleteHandler(user.email)} className='btn btn-error btn-sm'>Delete</button>
                                    </td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllUsers;
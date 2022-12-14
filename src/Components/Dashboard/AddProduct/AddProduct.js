import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/Context';
import Spinner from '../../Shared/Spinner/Spinner';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [click, setClick] = useState(false)

    // Brand Data load for Add product
    const { data: brandCategory = [], isLoading } = useQuery({
        queryKey: ['addProduct'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-side-hazel.vercel.app/CategoryData')
            const data = await res.json()
            return data;
        }
    })

    // Spinner use for loading time
    if (isLoading) {
        return <Spinner></Spinner>
    }

    // Product add Function
    const carAddHandler = (data) => {
        setClick(true)

        // img hosting 
        const formData = new FormData()
        formData.append('image', data.image[0])
        const imgKey = process.env.REACT_APP_IMGBB_KEY

        fetch(`https://api.imgbb.com/1/upload?key=${imgKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const AddCar = {
                    brand: data.brand,
                    car_model: data.car_model,
                    condition: data.condition,
                    address: data.location,
                    price: data.price,
                    buy: data.registration,
                    sold: false,
                    fuel_type: data.fuel_type,
                    seller_info: {
                        name: user.displayName,
                        email: user.email,
                    },
                    img: result.data.url,
                }
                product(AddCar);
            })
    }

    const product = (AddCar) => {
        fetch('https://assignment-12-server-side-hazel.vercel.app/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(AddCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Car Added successful')
                    setClick(false)
                }
            })
    }

    return (
        <div className='flex justify-center items-center w-full  mt-10'>
            <div className="p-8 rounded border border-gray-200">
                <h1 className="font-medium text-gray-800 font-serif text-3xl">Add Cars</h1>
                <form onSubmit={handleSubmit(carAddHandler)}>
                    <div className="mt-8 grid lg:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Brand</label>
                            <select
                                {...register('brand', { required: 'Please Enter your brand name' })} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" >
                                {
                                    brandCategory.map(brand => <option key={brand._id} id='brand' defaultValue={brand.Brand}>{brand.Brand}</option>)
                                }
                            </select>
                            {errors.brand && <label className='text-red-600 text-left' >{errors.brand?.message}</label>}
                        </div>

                        <div>
                            <label htmlFor="car_model" className="text-sm text-gray-700 block mb-1 font-medium">Car Model</label>
                            <input {...register('car_model', { required: 'Please Provide your cars model' })} type="text" name="car_model" id="car_model" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Cars Model" />
                            {errors.car_model && <label className='text-red-600 text-left' >{errors.car_model?.message}</label>}
                        </div>

                        <div>
                            <label htmlFor="location" className="text-sm text-gray-700 block mb-1 font-medium">Location</label>
                            <input {...register('location', { required: 'Please provide your location' })} type="text" name="location" id="location" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Location" />
                            {errors.location && <label className='text-red-600 text-left' >{errors.location?.message}</label>}
                        </div>

                        <div>
                            <label htmlFor="registration" className="text-sm text-gray-700 block mb-1 font-medium">Registration</label>
                            <input {...register('registration', {
                                required: 'Please enter your cars registration year'
                            })} type="text" name="registration" id="registration" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Car Registration Year" />
                            {errors.registration && <label className='text-red-600 text-left' >{errors.registration?.message}</label>}
                        </div>
                        <div>
                            <label htmlFor="registration" className="text-sm text-gray-700 block mb-1 font-medium">Condition</label>
                            <select {...register('condition', {
                                required: 'Choose your car Condition'
                            })} className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Car Registration Year">
                                <option id='condition' defaultValue='Used' selected >Used</option>
                                <option id='condition' defaultValue='New'>New</option>
                            </select>
                            {errors.condition && <label className='text-red-600 text-left' >{errors.condition?.message}</label>}
                        </div>
                        <div>
                            <label htmlFor="fuel_type" className="text-sm text-gray-700 block mb-1 font-medium">Fuel Type</label>
                            <input {...register('fuel_type')} type="text" name="fuel_type" id="fuel_type" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Fuel_Type" />
                        </div>
                        <div>
                            <label htmlFor="price" className="text-sm text-gray-700 block mb-1 font-medium"> Price</label>
                            <input {...register('price', { required: 'Enter Your sell price' })} type="text" name="price" id="price" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your selling Amount" />
                            {errors.price && <label className='text-red-600 text-left' >{errors.price?.message}</label>}
                        </div>
                        <div>
                            <label htmlFor="image" className="text-sm text-gray-700 block mb-1 font-medium"> Choose your cars Photos</label>
                            <input {...register('image', { required: 'Please Choose your car photos' })} type="file"
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-600 " />
                            {errors.image && <label className='text-red-600 text-left' >{errors.image?.message}</label>}
                        </div>
                    </div>
                    <div className="space-x-4 mt-8">
                        <button type="submit" className="py-2 px-4 btn-primary y text-white rounded  disabled:opacity-50">{click ? <Spinner /> : 'Add Car'}</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddProduct;
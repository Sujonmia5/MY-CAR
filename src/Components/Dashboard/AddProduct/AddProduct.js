import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const carAddHandler = (data) => {
        console.log(data);
    }
    return (
        <div className='flex justify-center items-center w-full  mt-20'>
            <div class="p-8 rounded border border-gray-200">
                <h1 class="font-medium text-gray-800 font-serif text-3xl">Add Cars</h1>
                <form onSubmit={handleSubmit(carAddHandler)}>
                    <div class="mt-8 grid lg:grid-cols-3 gap-4">
                        <div>
                            <label for="name" class="text-sm text-gray-700 block mb-1 font-medium">Brand</label>
                            <input {...register('brand', { required: 'Please Enter your brand name' })} type="text" name="brand" id="brand" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Cars Brand Name" />
                            {errors.brand && <label className='text-red-600 text-left' >{errors.brand?.message}</label>}
                        </div>

                        <div>
                            <label for="car_model" class="text-sm text-gray-700 block mb-1 font-medium">Car Model</label>
                            <input {...register('car_model', { required: 'Please Provide your cars model' })} type="text" name="car_model" id="car_model" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Cars Model" />
                            {errors.car_model && <label className='text-red-600 text-left' >{errors.car_model?.message}</label>}
                        </div>

                        <div>
                            <label for="location" class="text-sm text-gray-700 block mb-1 font-medium">Location</label>
                            <input {...register('location', { required: 'Please provide your location' })} type="text" name="location" id="location" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Location" />
                            {errors.location && <label className='text-red-600 text-left' >{errors.location?.message}</label>}
                        </div>

                        <div>
                            <label for="registration" class="text-sm text-gray-700 block mb-1 font-medium">Registration</label>
                            <input {...register('registration', {
                                required: 'Please enter your cars registration year'
                            })} type="text" name="registration" id="registration" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Car Registration Year" />
                            {errors.registration && <label className='text-red-600 text-left' >{errors.registration?.message}</label>}
                        </div>
                        <div>
                            <label for="registration" class="text-sm text-gray-700 block mb-1 font-medium">Condition</label>
                            <select {...register('value', {
                                required: 'Choose your car Condition'
                            })} class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Car Registration Year">
                                <option value='Used' selected>Used</option>
                                <option value='New'>New</option>
                            </select>
                            {errors.value && <label className='text-red-600 text-left' >{errors.value?.message}</label>}
                        </div>
                        <div>
                            <label for="fuel_type" class="text-sm text-gray-700 block mb-1 font-medium">Fuel Type</label>
                            <input {...register('fuel_type')} type="text" name="fuel_type" id="fuel_type" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Fuel_Type" />
                        </div>
                        <div>
                            <label for="price" class="text-sm text-gray-700 block mb-1 font-medium"> Price</label>
                            <input {...register('price', { required: 'Enter Your sell price' })} type="text" name="price" id="price" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your selling Amount" />
                            {errors.price && <label className='text-red-600 text-left' >{errors.price?.message}</label>}
                        </div>
                        <div>
                            <label for="image" class="text-sm text-gray-700 block mb-1 font-medium"> Choose your cars Photos</label>
                            <input {...register('image', { required: 'Please Choose your car photos' })} type="file"
                                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-600 " />
                            {errors.image && <label className='text-red-600 text-left' >{errors.image?.message}</label>}
                        </div>
                    </div>
                    <div class="space-x-4 mt-8">
                        <button type="submit" class="py-2 px-4 btn-primary y text-white rounded  disabled:opacity-50">Add Car</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddProduct;
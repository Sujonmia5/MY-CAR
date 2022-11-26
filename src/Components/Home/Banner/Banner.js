import React from 'react';
import { Link } from 'react-router-dom';
import imgCar from '../../../assets/1698b847c2e4fe98c05adcdc9d420590_XL.jpg'

const Benner = () => {
    return (
        <div className="relative container mt-5 px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
            <div className="max-w-xl mx-auto lg:max-w-screen-xl">
                <div className="mb-16 lg:max-w-lg lg:mb-0">
                    <div className="max-w-xl mb-6">

                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            <span className='text-primary'>My Car</span>
                            <br className="hidden md:block" />
                            My trust,{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                My Success
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Basically a platform where you can buy and sell almost anything! We help buy and sell used cars. We ensure safe, smart and simple solutions for customers across 4 different categories.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <Link to='/'
                            className="inline-flex btn-primary items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                        >
                            Get started
                        </Link>
                        <Link to='/'
                            className="inline-flex btn btn-outline items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-gray-800"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start top-5 lg:bottom-0 lg:right-20 lg:items-end">
                <div className="mockup-window border h-full w-full bg-base-300">
                    <img src={imgCar} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Benner;
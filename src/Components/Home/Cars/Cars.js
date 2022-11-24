import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CarsCard from './CarsCard/CarsCard';

const Cars = () => {

    const cars = useLoaderData()
    console.log(cars);
    return (
        <div className='container mt-10 md:grid grid-cols-2 gap-y-5 mx-auto '>
            {
                cars.map(car => <CarsCard key={car._id} car={car}></CarsCard>)
            }
        </div >
    );
};

export default Cars;
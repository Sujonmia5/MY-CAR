import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarsCard from './CarsCard/CarsCard';

const Cars = () => {

    const cars = useLoaderData()
    return (
        <div className='w-[1240px] mt-10 md:grid grid-cols-2 gap-y-5 mx-auto '>
            {
                cars.map(car => <CarsCard key={car._id} car={car}></CarsCard>)
            }
        </div >
    );
};

export default Cars;
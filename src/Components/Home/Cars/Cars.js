import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cars = () => {

    const cars = useLoaderData()
    console.log(cars);
    return (
        <div>
            Cars
        </div>
    );
};

export default Cars;
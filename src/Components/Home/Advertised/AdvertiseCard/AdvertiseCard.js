import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({ add }) => {

    return (
        <div className="card w-full mx-auto bg-gray-300 shadow-xl image-full">
            <figure><img className='w-full' src={add.img} alt="Shoes" /></figure>
            <div className="card-body relative">
                <h2 className="text-start flex-col justify-start text-4xl absolute bottom-5 bg-slate-500 rounded p-2 text-gray-200 font-serif">{add.car_model}
                    <p className='text-xl text-gray-100 font-serif font-medium'>Brand: <strong>{add.brand}</strong></p>
                    <p className='text-xl text-gray-200 font-bold font-serif'>Price: <strong className='text-primary'>${add.price}</strong></p>
                </h2>
                <div>

                </div>
                <div className="card-actions justify-end">
                    <Link to={`/cars/${add.brand}`} className="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    )
};

export default AdvertiseCard;
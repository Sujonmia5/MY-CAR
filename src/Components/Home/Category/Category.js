import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('Category.json')
            const data = await res.json()
            return data
        }
    })
    console.log(categories);

    return (
        <div className='container mx-auto' id='Category'>
            <h1 className='font-bold font-serif text-red-600 italic text-5xl my-10'>Used Car Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categories.map((category, i) => <>
                        <Link to={`/cars/${category.Brand}`} key={i}>
                            <div className="w-80 mx-auto bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">
                                <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center">
                                    <img className='h-44' src={category.img} alt="" />
                                    <div className="w-8 h-9 bg-white rounded flex items-center justify-center text-red-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h1 className='text-center text-black font-semibold text-xl'>{category.Brand}</h1>
                                </div>
                            </div>
                        </Link>
                    </>)
                }
            </div>
        </div>
    );
};

export default Category;
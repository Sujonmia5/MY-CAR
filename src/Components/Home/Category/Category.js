import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center font-bold font-serif text-gray-900 text-5xl my-10'>Used Car Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div class="w-80 mx-auto bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">    <div class="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3_b_6X31YYT7SPNFZq4r1AXqXS719tqwxA&usqp=CAU" alt="" />
                    <div class="w-8 h-9 bg-white rounded flex items-center justify-center text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" /></svg>      </div>
                </div>
                    <div class="p-4">
                        <h1 className='text-center text-black font-semibold text-xl'>TOYOTA</h1>
                    </div>
                </div>
                <div class="w-80 mx-auto bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">    <div class="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3_b_6X31YYT7SPNFZq4r1AXqXS719tqwxA&usqp=CAU" alt="" />
                    <div class="w-8 h-9 bg-white rounded flex items-center justify-center text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" /></svg>      </div>
                </div>
                    <div class="p-4">
                        <h1 className='text-center text-black font-semibold text-xl'>TOYOTA</h1>
                    </div>
                </div>
                <div class="w-80 mx-auto bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">    <div class="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3_b_6X31YYT7SPNFZq4r1AXqXS719tqwxA&usqp=CAU" alt="" />
                    <div class="w-8 h-9 bg-white rounded flex items-center justify-center text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" /></svg>      </div>
                </div>
                    <div class="p-4">
                        <h1 className='text-center text-black font-semibold text-xl'>TOYOTA</h1>
                    </div>
                </div>
                <div class="w-80 mx-auto bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">    <div class="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3_b_6X31YYT7SPNFZq4r1AXqXS719tqwxA&usqp=CAU" alt="" />
                    <div class="w-8 h-9 bg-white rounded flex items-center justify-center text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" /></svg>      </div>
                </div>
                    <div class="p-4">
                        <h1 className='text-center text-black font-semibold text-xl'>TOYOTA</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
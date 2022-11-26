import React from 'react';

const Hero = () => {
    return (
        <section>
            <div className=''>
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-4xl text-gray-900">Do you want to sell your car?
                        <br />
                        <span className='text-primary'>Or</span>
                        <br />
                        You want to buy car?
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Sign up for free and open an account to sell your products! It usually takes 2 minutes to post an ad.</p>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">It has the largest collection of products in all of Bangladesh, thousands of products in 4 categories. And you can buy products easily.</p>
                    <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 btn-primary m-2 text-lg font-semibold rounded text-gray-50">Get started</button>
                        <button type="button" className="px-8 btn btn-outline py-3 m-2 text-lg border rounded border-gray-700 text-gray-900">Learn more</button>
                    </div>
                </div>
            </div>
            <img src="https://i.ibb.co/GscKZkp/accord.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
        </section>
    );
};

export default Hero;
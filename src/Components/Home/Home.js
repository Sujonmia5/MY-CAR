import React from 'react';
import Advertised from './Advertised/Advertised';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
            <Banner />
            <Advertised />
            <Category />
            <Hero />
        </div>
    );
};

export default Home;
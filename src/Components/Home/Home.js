import React from 'react';
import Advertised from './Advertised/Advertised';
import Carousel from './Carousel/Carousel';
import Category from './Category/Category';

const Home = () => {
    return (
        <div>
            <Carousel />
            <Advertised />
            <Category />
        </div>
    );
};

export default Home;
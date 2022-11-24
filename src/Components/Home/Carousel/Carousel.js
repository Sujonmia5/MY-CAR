import React from 'react';
import img1 from '../../../assets/Classic-cars.png'
import img2 from '../../../assets/vintage-vehicle.jpg'
import img3 from '../../../assets/images.jpg'
import img4 from '../../../assets/1698b847c2e4fe98c05adcdc9d420590_XL.jpg'
const Carousel = () => {


    return (
        <div className="carousel mt-10 rounded container mx-auto w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="md:w-[80%] rounded mx-auto h-[480px]" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 md:left-16 md:right-16 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-primary">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-primary">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="md:w-[80%] rounded mx-auto h-[480px]" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 md:left-16 md:right-16 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-primary">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-primary">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="md:w-[80%] rounded mx-auto h-[480px]" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 md:left-16 md:right-16 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-primary">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-primary">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="md:w-[80%] rounded mx-auto h-[480px]" alt='' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 md:left-16 md:right-16 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-primary ">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-primary ">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
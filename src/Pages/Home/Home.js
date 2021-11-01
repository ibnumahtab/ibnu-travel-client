import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner/Banner';
import Emergency from './Emergency/Emergency';
import ServicesHome from './ServicesHome/ServicesHome';

const Home = () => {
    return (
        // Home page full desgn
        <div>
            <Banner></Banner>
            <Emergency></Emergency>
            <ServicesHome></ServicesHome>
            <Testimonial />
        </div>
    );
};

export default Home;

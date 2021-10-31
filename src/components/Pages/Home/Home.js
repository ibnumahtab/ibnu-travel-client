import React from 'react';
import Banner from '../../Banner/Banner';
import ExplorSection from '../../ExplorSection/ExplorSection';
import Testimonial from '../../Testimonial/Testimonial';
import TourPackages from '../../TourPackages/TourPackages';

const Home = () => {
    return (
        <div>
            <Banner />
            <TourPackages />
            <ExplorSection />
            <Testimonial />
        </div>
    );
};

export default Home;

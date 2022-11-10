import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services />
            <WhyChoose/>
        </div>
    );
};

export default Home;
import React, { useEffect } from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    useTitle('', true)
    
    return (
        <div>
            <Banner/>
            <Services />
            <WhyChoose />
            <Faq />
            <Subscribe/>
        </div>
    );
};

export default Home;
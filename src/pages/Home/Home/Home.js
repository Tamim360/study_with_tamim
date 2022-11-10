import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    useEffect(() => {
        document.title = 'Study With Tamim'
    },[])
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
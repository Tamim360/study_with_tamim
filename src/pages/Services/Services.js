import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../shared/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData()
    return (
        <div className="p-4 lg:px-8">
            <h2 className="text-center my-2 text-3xl font-bold">All Services</h2>
            <p className="text-center mb-2">we provide qualityfull courses like learning quran, learning hadith, hifzul quran, learning fiqh and many more. <br />
            sharp your knowledge with our top quality courses among others.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map(service => <ServiceCard key={service._id} service={service} />)}
            </div>
        </div>
    );
};

export default Services;
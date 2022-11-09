import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../../shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services?limit=3')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    
    return (
        <div className="p-4 lg:px-8">
            <h2 className="text-center my-2 text-3xl font-bold">Our Services</h2>
            <p className="text-center mb-2">we provide qualityfull courses like learning quran, learning hadith, hifzul quran, learning fiqh and many more. <br />
            sharp your knowledge with our top quality courses among others.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map(service => <ServiceCard key={service._id} service={service} />)}
            </div>
            <Link to={'/services'}>
                <button className="btn btn-outline mx-auto block mb-3 mt-8 font-bold px-8">SEE ALL</button>
            </Link>
        </div>
    );
};

export default Services;
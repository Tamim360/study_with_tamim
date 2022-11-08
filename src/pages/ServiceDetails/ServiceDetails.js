import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft, FaStar } from 'react-icons/fa';

const ServiceDetails = () => {
    const {_id, name, description, image, price} = useLoaderData()
    
    return (
        <div className="flex gap-2">
            <div className="border grow shadow-2xl m-8 p-3">
                <Link to="/services" className="flex justify-center items-center gap-2 w-24 mx-auto font-bold mb-8" ><FaArrowLeft /> Back</Link>
                <img className="w-full h-96" src={image} alt={name} />
                <h2 className="text-3xl font-bold my-3">{name}</h2>
                <p>{description}</p>
                <div className="flex items-center justify-between mt-8 mb-4 max-w-xs mx-auto">
                <p className="text-xl font-semibold">Price: ${price}</p>
                <div className="flex items-center gap-2 text-orange-500">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                </div>
                <button className="btn block w-full my-3">Buy This course</button>
            </div>
            <div className="max-w-sm min-w-[250px] border">
            <h2 className="text-6xl">Review details</h2>
            </div>
        </div>
    );
};

export default ServiceDetails;
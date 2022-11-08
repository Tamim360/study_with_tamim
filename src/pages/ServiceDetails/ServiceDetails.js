import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft, FaQuoteLeft, FaStar } from 'react-icons/fa';

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
            <div className="max-w-sm min-w-[250px] px-2 mr-2 mt-8">
            <div className="border rounded pb-2 relative">
            <h2 className="text-xl text-center font-semibold bg-white border w-max mx-auto rounded-full px-3 -mt-4">Students reviews</h2>
            
            <div className="max-h-[500px] overflow-y-auto">
                {/* single review */}
            <div className="py-2 relative mt-2">
                <div className="flex items-center justify-center gap-2">
                    <img className="w-12 h-12 rounded-full" src="https://api.bdcrictime.com/players/342.png" alt="" />
                    <h2 className="font-semibold">Tamim Iqbal Khan</h2>
                </div>
                <div className="text-center">
                <FaQuoteLeft className="text-sm font-bold block mx-auto" />
                <p className="text-sm text-slate-600">This is a great course I have ever seen. It helped me a lot to get rid of my fear of that problem. Thanks dude. May Allah bless you.</p>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-violet-900"></div>
            </div>
            {/* single review ends */}
            {/* single review */}
            <div className="py-2 relative mt-2">
                <div className="flex items-center justify-center gap-2">
                    <img className="w-12 h-12 rounded-full" src="https://api.bdcrictime.com/players/342.png" alt="" />
                    <h2 className="font-semibold">Tamim Iqbal Khan</h2>
                </div>
                <div className="text-center">
                <FaQuoteLeft className="text-sm font-bold block mx-auto" />
                <p className="text-sm text-slate-600">This is a great course I have ever seen. It helped me a lot to get rid of my fear of that problem. Thanks dude. May Allah bless you.</p>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-violet-900"></div>
            </div>
            {/* single review ends */}
            {/* single review */}
            <div className="py-2 relative mt-2">
                <div className="flex items-center justify-center gap-2">
                    <img className="w-12 h-12 rounded-full" src="https://api.bdcrictime.com/players/342.png" alt="" />
                    <h2 className="font-semibold">Tamim Iqbal Khan</h2>
                </div>
                <div className="text-center">
                <FaQuoteLeft className="text-sm font-bold block mx-auto" />
                <p className="text-sm text-slate-600">This is a great course I have ever seen. It helped me a lot to get rid of my fear of that problem. Thanks dude. May Allah bless you.</p>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-violet-900"></div>
            </div>
            {/* single review ends */}
            {/* single review */}
            <div className="py-2 relative mt-2">
                <div className="flex items-center justify-center gap-2">
                    <img className="w-12 h-12 rounded-full" src="https://api.bdcrictime.com/players/342.png" alt="" />
                    <h2 className="font-semibold">Tamim Iqbal Khan</h2>
                </div>
                <div className="text-center">
                <FaQuoteLeft className="text-sm font-bold block mx-auto" />
                <p className="text-sm text-slate-600">This is a great course I have ever seen. It helped me a lot to get rid of my fear of that problem. Thanks dude. May Allah bless you.</p>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-violet-900"></div>
            </div>
            {/* single review ends */}
            </div>
            <div>
                <button className="btn btn-sm">Please login to add review</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';

const ServiceDetails = () => {
    const { _id, name, description, image, price } = useLoaderData()
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const location = useLocation()

    // load reviews
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?id=${_id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[reviews, _id])

    // review
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const userReview = form.userReview.value

        const review = {
            courseId: _id,
            courseImage: image,
            courseName: name,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
            userReview,
        }
        
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                const newReviews = [reviews, ...reviews]
                setReviews(newReviews)
                form.reset()
            }
        })

    }
    
    return (
        <div className="flex gap-2">
            <div className="border grow shadow-2xl m-8 p-3 max-w-3xl">
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

            {/* review */}
            <div className="min-w-[250px] grow px-2 mr-2 mt-8">
            <div className="border rounded pb-2 relative">
            <h2 className="text-xl text-center font-semibold bg-white border w-max mx-auto rounded-full px-3 -mt-4">Students reviews</h2>
            
            <div className="max-h-[500px] overflow-y-auto">
                {/* single review */}
                    {
                        reviews.map(review => {
                            const {name, image, userReview} = review;
                            return (
                                <div key={review._id} className="py-2 relative mt-2">
                                    <div className="flex items-center justify-center gap-2">
                                        <img className="w-12 h-12 rounded-full" src={image} alt={name} />
                                        <h2 className="font-semibold">{name}</h2>
                                    </div>
                                    <div className="text-center">
                                        <FaQuoteLeft className="text-sm font-bold block mx-auto" />
                                        <p className="text-sm text-slate-600">{userReview}</p>
                                    </div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-violet-900"></div>
                                </div>
                            )
                        })
                        
                    }
                    {
                        reviews.length === 0 && <div className="font-bold text-center my-3">No reviews yet</div>
                    }
                    
                {/* single review ends */}
            </div>
            <div className="bg-gradient-to-t from-white/75 pt-6">
                {
                    user && user.uid ?
                    <form onSubmit={handleSubmit}>
                    <textarea name="userReview" className="textarea textarea-primary h-20 w-full" placeholder="Add review"></textarea>
                    <input type="submit" className="btn block w-full"  value="Add Review"/>
                    </form>
                    :
                    <Link to="/login" state={{from: location}} replace><button className="btn btn-xs block mx-auto">Please login to add review</button></Link>
                }
            </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
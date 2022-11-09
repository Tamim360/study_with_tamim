import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaStar, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const [courses, setCourses] = useState([])

    // load all reviews based on specific user email
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[user.email, reviews])

    // load services
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    // delete a review
    const deleteReview = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount === 1) {
                const remaining = reviews.filter(review => review._id !== id)
                setReviews(remaining)
            }
        })
    }

    return (
        <div className="sm:p-3 p-2">
            <h2 className="text-2xl font-bold text-center border mt-3">You have {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:p-3">
                {
                    reviews.map(review => {
                        return (
                            <div key={review._id} className="border p-2 h-fit shadow-xl">
                                
                                <div className="flex gap-3 mb-8">
                                
                                    {courses.map(course => course._id === review.courseId &&
                                        <img
                                        key={course._id}
                                        src={course.image}
                                        alt={course.name}
                                        className="w-16 h-16 rounded" />)}
                                    
                                    <div className='w-full'>
                                        <h2 className="text-xl font-bold">{courses.map(course => review.courseId === course._id && course.name)}</h2>
                                        <div className="flex items-center justify-between mt-2 mx-1">
                                            <div className="flex items-center gap-2 text-orange-500">
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                            </div>
                                        <div className="flex items-center gap-2">
                                            <Link className="tooltip" data-tip="Edit Review"><FaEdit /></Link>
                                            <Link onClick={() => deleteReview(review._id)} className="tooltip" data-tip="Delete Review"><FaTrashAlt/></Link>
                                            
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <p>{review.userReview}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MyReviews;
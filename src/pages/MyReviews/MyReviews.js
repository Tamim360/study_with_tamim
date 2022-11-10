import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaStar, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

import { notify } from "../../utilities/notify";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [isHidden, setIsHidden] = useState(true);

  // load all reviews based on specific user email
  useEffect(() => {
    fetch(`https://study-with-tamim.vercel.app/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user.email, reviews]);

  // delete a review
  const deleteReview = (id) => {
    fetch(`https://study-with-tamim.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          notify("Succesfully deleted");
          const remaining = reviews.filter((review) => review._id !== id);
          setReviews(remaining);
        }
      });
  };

  // update review
  const handleSubmit = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const reviewUpdate = form.reviewUpdate.value;
    // console.log(reviewUpdate, id);
    form.reset();
    setIsHidden(true);
    const review = { userReview: reviewUpdate };
    fetch(`https://study-with-tamim.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          const newReviews = reviews.filter((review) => review._id !== id);
          setReviews(newReviews);
          notify("Review updated successfully");
        }
      });
  };

  return (
    <div className="sm:p-3 p-2 mb-20 overflow-x-hidden">
      <h2 className="text-2xl font-bold text-center border mt-3">
        You have {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:p-3">
        {reviews.map((review) => {
          const { _id, courseName, courseImage, userReview, courseId } = review;
          return (
            <div key={_id} className="border p-2 h-fit shadow-xl">
              <div className="flex gap-3 mb-8">
                <Link to={`/services/${courseId}`}>
                  <img
                    src={courseImage}
                    alt={courseName}
                    className="w-16 h-16 rounded"
                  />
                </Link>

                <div className="w-full">
                  <Link to={`/services/${courseId}`}>
                    <h2 className="text-xl font-bold">{courseName}</h2>
                  </Link>
                  <div className="flex items-center justify-between mt-2 mx-1">
                    <div className="flex items-center gap-2 text-orange-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="flex items-center gap-2">
                      <label
                        onClick={() => setIsHidden(false)}
                        htmlFor="my-modal-4"
                        className="tooltip cursor-pointer"
                        data-tip="Edit Review"
                      >
                        <FaEdit />
                      </label>
                      <Link
                        onClick={() => deleteReview(_id)}
                        className="tooltip"
                        data-tip="Delete Review"
                      >
                        <FaTrashAlt />
                      </Link>

                      <input
                        type="checkbox"
                        id="my-modal-4"
                        className="modal-toggle"
                      />
                      <label
                        htmlFor="my-modal-4"
                        className={`modal cursor-pointer ${
                          isHidden && "scale-0"
                        }`}
                      >
                        <label className={`modal-box relative`} htmlFor="">
                          <form onSubmit={(e) => handleSubmit(e, _id)}>
                            <textarea
                              name="reviewUpdate"
                              className="textarea textarea-bordered w-full h-44 text-slate-900"
                              placeholder="Edit Review"
                              style={{ resize: "none" }}
                              defaultValue={userReview}
                            ></textarea>

                            <input
                              type="submit"
                              value="Done"
                              className="btn btn-primary mt-2 block w-full"
                            />
                          </form>
                        </label>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <p>{userReview}</p>
            </div>
          );
        })}
      </div>
      {reviews.length === 0 && (
        <>
          <p className="text-xl font-bold text-center mt-40">
            No reviews were added
          </p>
          <p className="text-center mt-3">
            See{" "}
            <Link to="/services" className="text-violet-600 font-bold">
              Services
            </Link>{" "}
            and add review
          </p>
        </>
      )}
    </div>
  );
};

export default MyReviews;

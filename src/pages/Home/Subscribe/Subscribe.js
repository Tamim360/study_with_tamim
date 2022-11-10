import React from "react";

const Subscribe = () => {
  return (
    <div className="p-2 pt-8 bg-heroBg bg-center">
      <div className="max-w-2xl mx-auto backdrop-blur[8px]">
        <p className="w-max mx-auto text-xs rounded-full font-bold bg-violet-500/50 text-violet-800 p-1 px-2 ">
          SUBSCRIBE
        </p>
        <h2 className="text-2xl font-bold text-center mt-3">
          Subscribe our newsletter.
        </h2>
        <div className="form-control my-6 bg-violet-500/50 p-12 rounded">
          <label className="input-group flex justify-center">
            <input
              type="email"
              placeholder="type your email"
              className="input input-bordered"
            />
            <button className="btn">Subscribe</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

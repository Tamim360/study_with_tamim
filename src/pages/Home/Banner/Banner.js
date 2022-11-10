import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-heroBg">
      <div className="hero-content flex-col md:flex-row-reverse backdrop-blur-[20px]">
        <Player
          src="https://assets9.lottiefiles.com/packages/lf20_9ungcrzx.json"
          className="player"
          loop
          autoplay
        />
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold">
            Welcome to{" "}
            <span className="text-violet-600">Study With Tamim!</span>
          </h1>
          <p className="py-6">
            we provide qualityfull courses like learning quran, learning hadith,
            hifzul quran, learning fiqh and many more. sharp your knowledge with
            our top quality courses among others.
          </p>
          <Link to="/services">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

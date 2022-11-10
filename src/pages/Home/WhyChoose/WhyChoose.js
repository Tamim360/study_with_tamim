import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const WhyChoose = () => {
  return (
    <div className="pt-12">
      <p className="w-max mx-auto text-xs rounded-full font-bold bg-violet-500/50 text-violet-800 p-1 px-2 -mb-16">
        Why Choose US
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto p-2">
        <div>
          <Player
            src="https://assets9.lottiefiles.com/private_files/lf30_34kxno0g.json"
            className="player max-w-xl md:max-w-4xl"
            loop
            autoplay
          />
        </div>
        <div className="text-center mb-12 md:mb-0 -mt-20 md:-mt-0">
          <h2 className="text-2xl font-bold -mt-20 md:-mt-6">Why Choose US?</h2>
          <p className="my-3">
            We want you to study what you consider to be important. With our
            flexible course system we can make sure that our courses suit you
            perfectly. We can easily add or remove information in all our
            courses.
          </p>
          <button className="btn btn-primary rounded-full">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

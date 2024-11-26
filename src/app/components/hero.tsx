import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat rounded-lg bg-[url(/images/anii.jpg)] bg-cover"
      style={{
        backgroundSize: '25%',
        backgroundPosition: 'left 160px top 180px',
      }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 min-h-screen px-6 sm:px-12">
        {/* Left Side: Empty Div for Spacing */}
        <div className="hidden lg:block"></div>

        {/* Right Side: Text */}
        <div className="flex mb-16 lg:mb-32 flex-col justify-center items-center lg:items-start space-y-6 text-white text-center lg:text-left">
          {/* Heading */}
          <h1
            className="text-6xl sm:text-4xl lg:text-6xl xl:text-6xl font-bold mt-24 lg:mt-32"
            data-aos="zoom-out-right"
          >
            I am Shumaila Murk
          </h1>

          {/* Paragraph */}
          <p
            className="text-sm sm:text-lg lg:text-xl mt-4 lg:mt-6"
            data-aos="zoom-out-right"
          >
            Web Developer, UI/UX Designer, and Video Editor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

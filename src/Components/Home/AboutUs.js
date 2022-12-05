import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const AboutUs = () => {
    return (
        <div className="hero my-20 py-10 px-5">
        <div className="hero-content grid md:grid-cols-2">
          <div className='relative'>
          <img src={person} alt='' className=" rounded-lg shadow-2xl w-9/12 h-full" />
          <img src={parts} alt='' className=" rounded-lg shadow-2xl absolute w-2/4 top-1/2 right-0" />
          </div>
          <div className=''>
            <h1 className="text-5xl font-bold">About Us!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;
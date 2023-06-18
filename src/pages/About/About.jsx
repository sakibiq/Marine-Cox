import React from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <div className='md:mt-40  font-body'>
      <div className='bg-slate-50 h-32 rounded-md relative'>
        <h2 className='text-center text-4xl md:text-6xl text-orange-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          About Us
        </h2>
        <p className='text-center text-6xl md:text-8xl text-gray-100 '>
          About Us
        </p>
      </div>
      <div>
        <Fade duration='800' cascade>
          <h1 className='pt-10 mx-auto text-center w-full md:w-2/3 text-lg md:text-xl'>
            Cox Marine Boats and Ships Maintenance Service is one of the leading
            yacht maintenance service providers in Jadaf, Dubai, UAE.
          </h1>
          <p className='pt-6 w-full md:w-2/3 text-center mx-auto'>
            The company inspires its employees to be the best they can be. We
            will continue to engage in sustainable practices and anticipate the
            needs of our customers. Quality, experience, manpower, and customer
            service are what differentiate us and make us experts in catering to
            any client with any type of yacht.
          </p>
          <p className='pt-6 w-full md:w-2/3 text-center mx-auto'>
            We are industry leaders in providing first-rate customer service for
            everything from minor boat maintenance to extensive refits. Cox
            Marine is a committed group of expert yacht managers who ensure that
            your yacht is operated in a safe and effective manner. We uniquely
            adapt our services according to each customer's needs. We guarantee
            honesty in every facet of repair and maintenance work, including
            thorough checks. Your vessel will undergo routine inspections by our
            team of experts to ensure that it is seaworthy. You won't need to
            worry about technical or mechanical services when working with Cox
            Marine.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default About;

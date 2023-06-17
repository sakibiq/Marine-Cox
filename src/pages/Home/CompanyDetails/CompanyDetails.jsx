import React from 'react';
import { Fade } from 'react-awesome-reveal';

const CompanyDetails = () => {
  return (
    <div className='font-body'>
      <h1 className='text-4xl text-center mb-6 underline'>About Us</h1>
      <div className='grid grid-cols-1 md:grid-cols-1 gap-5'>
        <Fade duration='500' cascade>
          <div className='mb-10'>
            {' '}
            <div className=' bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-2 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
                    Company
                  </h5>
                </a>
                <p className='mb-3  text-gray-700 dark:text-gray-400 px-20 mt-4 '>
                  Cox Marine Boats and Ships Maintenance Service is one of the
                  leading yacht maintenance service provider in Jadaf, Dubai,
                  UAE. The company inspires its employees to be the best they
                  can be. We will continue to engage in sustainable practises
                  and anticipate the needs of our customers. Quality,
                  experience, manpower, and customer service are what
                  differentiates us and makes us experts in catering to any
                  client with any type of yacht.
                </p>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3'>
            {' '}
            <div className='max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-2 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
                    Services
                  </h5>
                </a>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  <p>
                    {' '}
                    We provide high standard services for yacht and boat
                    servicing and maintenance. As:
                  </p>

                  <p>-Boat Painting</p>
                  <p>-Boat Polishing</p>
                  <p>-Anti Fouling</p>
                  <p>-Engine Buying and Selling</p>
                  <p>-Inboat Outboard Engine</p>
                  <p>-Overralling Wood & Other</p>
                  <p>-GRP Fiber Glass</p>
                  <p>-GEL Coat Finishing</p>
                  <p>-Wood Varnish</p>
                  <p>-Carpenter Worker</p>
                  <p>-Worrker Supply</p>
                  <p>-Painting</p>
                </p>
              </div>
            </div>
            <div className='max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-2 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
                    Address
                  </h5>
                </a>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-center'>
                  Al Jadaf, Dubai.
                </p>
              </div>
            </div>
            <div className='max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-2 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
                    Contact
                  </h5>
                </a>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Phone: Midul Barua +971526320624 +971563206204 Mail
                  coxmarin2023@gmail.com
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CompanyDetails;

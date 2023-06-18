import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const CompanyDetails = () => {
  return (
    <div className='font-body'>
      <div className='bg-slate-50 h-32 rounded-md relative'>
        <h2 className='text-center text-4xl md:text-6xl text-orange-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          About Us
        </h2>
        <p className='text-center text-6xl md:text-8xl text-gray-100 '>
          About Us
        </p>
      </div>
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
                <p className='mb-3  text-gray-700 dark:text-gray-400 md:px-20 mt-4 '>
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
          <div className='grid md:grid-cols-3'>
            <div className='max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-6 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
                    Contact
                  </h5>
                </a>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  Phone: Midul Barua +971526320624 +971563206204 Mail
                  coxmarin2023@gmail.com
                </p>
              </div>
            </div>

            <div className='max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-6 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
                    Services
                  </h5>
                </a>
                <div className='mb-3 font-normal text-gray-700 dark:text-gray-400 '>
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
                </div>
                <Link to='/services'>
                  <button
                    type='button'
                    class='text-black mt-4 bg-orange-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    Our Services
                    <svg
                      aria-hidden='true'
                      class='w-5 h-5 ml-2 -mr-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            <div className='max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <div className='p-5'>
                <a href='#'>
                  <h5 className='mb-6 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white'>
                    Address
                  </h5>
                </a>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-center'>
                  Al Jadaf, Dubai.
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

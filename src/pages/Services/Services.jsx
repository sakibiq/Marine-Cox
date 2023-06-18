import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import service1 from '../../assets/service1.jpeg';
import service2 from '../../assets/service2.jpeg';
import service3 from '../../assets/service3.jpeg';
import service4 from '../../assets/service4.jpeg';
import service5 from '../../assets/service5.jpeg';
import service6 from '../../assets/service6.jpeg';

const Services = () => {
  return (
    <div className=' text-center mb-10 md:mt-32'>
      <div className='bg-slate-50 h-32 rounded-md relative'>
        <h2 className='text-center text-4xl md:text-6xl text-orange-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          Our Services
        </h2>
        <p className='text-center text-6xl md:text-8xl text-gray-100 '>
          Our Services
        </p>
      </div>

      <Tabs>
        <TabList>
          <div className='grid md:flex justify-center'>
            <Tab>
              <button
                type='button'
                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
              >
                All
              </button>
            </Tab>
            <Tab>
              <button
                type='button'
                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
              >
                Boat Painting
              </button>
            </Tab>
            <Tab>
              <button
                type='button'
                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
              >
                Boat Polishing
              </button>
            </Tab>
            <Tab>
              <button
                type='button'
                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
              >
                Anti Fouling
              </button>
            </Tab>
            <Tab>
              <button
                type='button'
                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
              >
                Overralling
              </button>
            </Tab>
            <Tab>
              <button
                type='button'
                className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
              >
                Gel Coat Finishing
              </button>
            </Tab>
          </div>
        </TabList>

        <TabPanel>
          <div className='flex justify-center gap-16 mt-6'>
            <div className='w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid grid-cols-2 md:grid-cols-3'>
              <a href='#'>
                <img
                  className='p-8 rounded-t-lg'
                  src={service1}
                  alt='product image'
                />
              </a>
              <a href='#'>
                <img
                  className='p-8 rounded-t-lg'
                  src={service2}
                  alt='product image'
                />
              </a>
              <a href='#'>
                <img
                  className='p-8 rounded-t-lg'
                  src={service3}
                  alt='product image'
                />
              </a>
              <a href='#'>
                <img
                  className='p-8 rounded-t-lg'
                  src={service4}
                  alt='product image'
                />
              </a>
              <a href='#'>
                <img
                  className='p-8 rounded-t-lg'
                  src={service5}
                  alt='product image'
                />
              </a>
              <a href='#'>
                <img
                  className='p-8 rounded-t-lg'
                  src={service6}
                  alt='product image'
                />
              </a>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='flex justify-center gap-16 mt-6'>
            <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <a href='#'>
                <img
                  className='p-8 rounded-t-lg'
                  src={service4}
                  alt='product image'
                />
              </a>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='flex justify-center gap-16 mt-6'>
            <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <a href='#'>
                <img
                  className='p-8 rounded-t-lg'
                  src={service2}
                  alt='product image'
                />
              </a>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='flex justify-center gap-16 mt-6'>
            <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <a href='#'>
                <img
                  className='p-8 rounded-t-lg'
                  src={service5}
                  alt='product image'
                />
              </a>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='flex justify-center gap-16 mt-6'>
            <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <a href='#'>
                <img
                  className='p-8 rounded-t-lg'
                  src={service1}
                  alt='product image'
                />
              </a>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='flex justify-center gap-16 mt-6'>
            <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <a href='#'>
                <img
                  className='p-8 rounded-t-lg'
                  src={service5}
                  alt='product image'
                />
              </a>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Services;

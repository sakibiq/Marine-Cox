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
    <div className=' text-center mb-10 mt-32'>
      <h1 className='text-5xl mb-10'>Our Services</h1>

      <Tabs>
        <TabList>
          <div className='flex justify-center'>
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
            <div className='w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid grid-cols-3'>
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

      {/* <div className='grid grid-cols-2 gap-2'>
        <div>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            className='h-auto max-w-full rounded-lg'
            src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
            alt=''
          />
        </div>
      </div> */}
    </div>
  );
};

export default Services;

import React, { useState } from 'react';
import classNames from 'classnames';
import logo from '../../../../../assets/logo2.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-gray-200 '>
      <div className='bg-white md:max-w-screen-lg  dark:bg-gray-900 lg:fixed w-full z-20 bg-opacity-50 top-0 px-8'>
        <div className='flex items-center justify-between h-28'>
          <div className='flex-shrink-0'>
            <img className='h-24 w-32' src={logo} alt='Logo' />
          </div>
          <div className='hidden md:block'>
            <div className='flex items-baseline space-x-2 pr-2'>
              {' '}
              {/* Modified: space-x-4 to space-x-2 */}
              <Link
                to='/'
                href='#'
                className='text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-white'
              >
                Home
              </Link>
              <Link
                to='/about'
                className='text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-white'
              >
                About Us
              </Link>
              <Link
                to='/services'
                className='text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-white'
              >
                Our Services
              </Link>
              <Link
                to='/contact'
                className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2  rounded-md text-base font-medium bg-white'
              >
                Contact Us
              </Link>
              {/* <div className='relative inline-block'>
                <select
                  className='text-black hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium border-none'
                  defaultValue=''
                >
                  <option value='' disabled hidden>
                    Our Services
                  </option>
                  <option value='#'>
                    <Link to='/services'>Boat Painting </Link>
                  </option>
                  <option value='#'>Boat Polishing</option>
                  <option value='#'>Anti Fouling</option>
                  <option value='#'>Overralling</option>
                  <option value='#'>GEL Coat Finishing</option>
                </select>
              </div> */}
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={toggleMenu}
              type='button'
              className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
              aria-expanded='false'
            >
              <span className='sr-only'>Open menu</span>
              <svg
                className={classNames(isOpen ? 'hidden' : 'block', 'h-6 w-6')}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={classNames(isOpen ? 'block' : 'hidden', 'h-6 w-6')}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={classNames(isOpen ? 'block' : 'hidden', 'md:hidden')}>
        <div className='px-24 py-4  space-y-3 sm:px-3'>
          <Link
            to='/'
            href='#'
            className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2  rounded-md text-base font-medium bg-white'
          >
            Home
          </Link>
          <Link
            to='/about'
            className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2  rounded-md text-base font-medium bg-white'
          >
            About Us
          </Link>
          <Link
            to='/services'
            className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2  rounded-md text-base font-medium bg-white'
          >
            Our Services
          </Link>
          <Link
            to='/contact'
            className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2  rounded-md text-base font-medium bg-white'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

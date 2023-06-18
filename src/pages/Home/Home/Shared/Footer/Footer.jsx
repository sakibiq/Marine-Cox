import React from 'react';
import logo from '../../../../../assets/logo2.png';
import youtube from '../../../../../assets/youtube.png';
import facebook from '../../../../../assets/facebook.png';
import instagram from '../../../../../assets/instagram.png';
import twitter from '../../../../../assets/twitter.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mt-20'>
      <footer className='bg-gray-100'>
        <div className='mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8'>
          <div className='flex justify-center'>
            <img className='w-40' src={logo} alt='' />
          </div>

          <ul className='mt-3 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
            <li>
              <Link
                to='/about'
                className='text-gray-700 transition hover:text-gray-700/75'
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to='/services'
                className='text-gray-700 transition hover:text-gray-700/75'
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to='/contact'
                className='text-gray-700 transition hover:text-gray-700/75'
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <ul className='mt-12 flex justify-center gap-6 md:gap-8'>
            <li>
              <a
                href='https://www.facebook.com/profile.php?id=100093680018925&mibextid=ZbWKwL'
                rel='noreferrer'
                target='_blank'
                className='text-gray-700 transition hover:text-gray-700/75'
              >
                <span className='sr-only'>Facebook</span>
                <img className='h-6 w-6' src={facebook} alt='' />
              </a>
            </li>

            <li>
              <a
                href='https://instagram.com/coxmarin2023?igshid=NTc4MTIwNjQ2YQ=='
                rel='noreferrer'
                target='_blank'
                className='text-gray-700 transition hover:text-gray-700/75'
              >
                <span className='sr-only'>Instagram</span>
                <img className='h-6 w-6' src={instagram} alt='' />
              </a>
            </li>

            <li>
              <a
                href='https://youtube.com/@CoxMarine-kw9gj'
                rel='noreferrer'
                target='_blank'
                className='text-gray-700 transition hover:text-gray-700/75'
              >
                <span className='sr-only'>Youtube</span>
                <img className='h-6 w-6' src={youtube} alt='' />
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/cox_marin38360'
                rel='noreferrer'
                target='_blank'
                className='text-gray-700 transition hover:text-gray-700/75'
              >
                <span className='sr-only'>Twitter</span>
                <img className='h-6 w-6' src={twitter} alt='' />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

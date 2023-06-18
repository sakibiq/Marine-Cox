import React from 'react';
import { FaBeer } from 'react-icons/fa';
import phone from '../../assets/phone-call.png';
import email from '../../assets/email.png';
import address from '../../assets/address.png';

const Contact = () => {
  return (
    <div className='md:mt-32 font-body'>
      <div className='bg-slate-50 h-32 rounded-md relative'>
        <h2 className='text-center text-4xl md:text-6xl text-orange-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          Contact Details
        </h2>
        <p className='text-center text-6xl md:text-8xl text-gray-100 '>
          Contact Details
        </p>
      </div>
      <div className='grid md:grid-cols-3 mt-10 text-center'>
        <div className='pb-10 md:pb-2 '>
          <img className='w-10 mx-auto pb-10' src={address} alt='' />
          <p>
            <br /> Al Jadaf, Dubai.
          </p>
        </div>
        <div className='pb-10 md:pb-2'>
          <img className='w-10 mx-auto pb-10' src={phone} alt='' />

          <p>
            Midul Barua <br /> +971526320624 <br /> +971563206204
          </p>
        </div>
        <div>
          <img className='w-10 mx-auto pb-10' src={email} alt='' />
          <p>
            <br />
            coxmarin2023@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

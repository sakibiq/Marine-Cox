import React from 'react';
import Banner from '../../Banner/Banner';
import CompanyDetails from '../CompanyDetails/CompanyDetails';

const Home = () => {
  return (
    <div className='mt-20'>
      <Banner></Banner>
      <CompanyDetails></CompanyDetails>
    </div>
  );
};

export default Home;

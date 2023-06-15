import React from 'react';
import Banner from '../../Banner/Banner';
import CompanyDetails from '../CompanyDetails/CompanyDetails';
import Recentwork from '../../Recentwork/Recentwork';

const Home = () => {
  return (
    <div className='mt-20'>
      <Banner></Banner>
      <CompanyDetails></CompanyDetails>
      <Recentwork></Recentwork>
    </div>
  );
};

export default Home;

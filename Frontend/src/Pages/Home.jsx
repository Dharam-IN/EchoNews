import React, { useEffect, useState } from 'react';
import HeroSection from '../Components/Sections/HomePage/HeroSection';
import NewsCardHome from '../Components/Sections/HomePage/NewsCardHome';

const Home = () => {

  return (
    <>
      <HeroSection/>

      {/* <NewsCard/> */}
      <NewsCardHome/>
      
    </>
  )
}

export default Home
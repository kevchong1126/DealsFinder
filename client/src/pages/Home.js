import React from 'react'
import Hero from '../components/hero/Hero'
import Homely from '../components/lists/Homely'
import Banner from '../components/banner/Banner'
import Category from '../components/categories/Category';
import ShoeGrab from '../components/lists/ShoeGrab';

const Home = () => {
  return (
    <div>
      <Hero />
      <Homely />
      <Banner text1={'DealsFinder Helps You'} text2={'Get The Best Deals On The Web'} />
      <Category />
      <ShoeGrab />
    </div>
  )
}

export default Home
import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './Trending/Trending'
import "./style.scss"
const Home = () => {
  return (
    <div className='homepage'>
        <HeroBanner />
        <Trending />
    </div>
  )
}

export default Home
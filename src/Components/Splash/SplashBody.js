import React from 'react';
import './Splash.scss'
import ControlledCarousel from './Carousel'

function SplashBody() {
  


  return(
    <div className='splashWhole'>
      <ControlledCarousel />
      <h1>Your Home Page could be here!</h1>
    </div>
  )
}

export default SplashBody;
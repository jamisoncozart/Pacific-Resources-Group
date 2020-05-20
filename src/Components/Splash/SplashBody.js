import React from 'react';
import './Splash.scss'


function SplashBody() {
  


  return(
    <div className='splashWhole'>
      <h1 className='splashTitle1'>About</h1>
      <h1 className='splashTitle2'>Us</h1>
      <div>
        <p id='caret1'>></p><p id='caret2'>></p>
      </div>
      <div>
      <p id='caret3'> {'<'} </p>
      </div>
      <p className='splashBlurb'>Pacific Resources Group emphasizes cost effective stewardship of client properties and projects. This is accomplished by preserving suitable indigenous vegetation if appropriate, assisting in the planning, design and construction of site improvements, natural features and landscape amenities that are compatible with physical conditions present on the finished project. </p>
    </div>
  )
}

export default SplashBody;
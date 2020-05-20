import React from 'react';
import './Shared.scss'

function Footer() {
  return(
    <div className='footerPics'>
      <div className='footer1'>
        <h3 id='text1a'>Land</h3>
        <h3 id='text1b'>Management</h3>
      </div>
      <div className='footer2'>
        <h3 id='text2a'>Urban</h3>
        <h3 id='text2b'>Forestry</h3>
      </div>
      <div className='footer3'>
        <h3 id='text3a'>Natural</h3>
        <h3 id='text3b'>Resource</h3>
        <h3 id='text3c'>Consulting</h3>
      </div>
    </div>
  );
}

export default Footer;
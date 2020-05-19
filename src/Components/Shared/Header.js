import React from 'react';
import './Shared.scss';
import logo from '../../Assets/PRG.png';

function Header() {
  return(
    <div className='headerWhole'>
      <h1 id='title'>Pacific Resources Group</h1>
      <img className='logoStyle' src={logo} alt='Business Logo'/>
    </div>
  );
}

export default Header;
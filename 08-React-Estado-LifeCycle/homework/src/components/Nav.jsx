import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className='navbar'>
      <a className='navbar-brand' href="#">
        <img className='img' src={Logo} alt='Img Not Found'/>
        Henry - Weather App
      </a>
      <SearchBar onSearch={onSearch}/>  
</nav>
  );
};

export default Nav;

import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src={Logo} alt='Img Not Found'/>
        Henry - Weather App
      </a>
      <SearchBar onSearch={onSearch}/>  
</nav>
  );
};

export default Nav;

import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';


 function App() {
  const [cities, setCities] = useState([]);

function onSearch(ciudad) {
  const ciudadEjemplo = {
    min: 32,
    max: 35,
    img: "03n",
    id: 2172797,
    wind: 3.6,
    temp: 300.15,
    name: "Cairns",
    weather: "Clouds",
    clouds: 40,
    latitud: -16.92,
    longitud: 145.77
  };
  setCities(oldCities => [...oldCities, ciudadEjemplo]);
}

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards />
    </div>
  );
}

export default App;
import React from 'react';

export default function SearchBar(ciudad) {
  // acá va tu código
  return (<div>
    <input type="City"/>
    <button onClick={() => ciudad.onSearch('...Buscando ciudad')}>Agregar</button>
  </div>
  )
};
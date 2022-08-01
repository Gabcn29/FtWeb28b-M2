import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar(ciudad) {
  // acá va tu código
  return (<div>
    <input placeholder='City' className={s.input} type="City"/>
    <button className={s.bttn} onClick={() => ciudad.onSearch('Buscando ciudad...')}>Agregar</button>
  </div>
  )
};
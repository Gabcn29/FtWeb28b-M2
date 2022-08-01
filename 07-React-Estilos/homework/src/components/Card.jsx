import React from 'react';
import sTy from './Card.module.css'

export default function Card(props) {
  // acá va tu código
  return <div className={sTy.container}> 
    <button className={sTy.bttn} onClick={props.onClose}>x</button>
    <h3>{props.name}</h3>
    <div className={sTy.infoContainer}>
      <div >
        <p>Min</p>
        <p>{props.min}</p>
      </div>
      <div>
        <p>Max</p>  
        <p>{props.max}</p>
      </div>
      <img src= {`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={props.img}/>
    </div>
    </div>
};
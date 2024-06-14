import React from 'react';
import './countries.modul.css';

function Country(props) {
    const {country, id} = props;
    const {name, flags, capital, population, area} = country;

    const handleRemove = (name)=>{
        props.onGettingValue(name)
    }
  return (
    <article className='countryBox'>
        <div>
            <img className='img' src= {flags.png} alt={name.common}/>
            <h3 className='text'>Name: {name.common}</h3>
            <h3 className='text'>Population: {population}</h3>
            <h3 className='text'>Capital: {capital}</h3>
            <h3 className='text'>Area: {area} <span className='squar'>square KM</span></h3>
            <button className='button' onClick={()=>handleRemove(name.common)}>Remove</button>
        </div>
    </article>
  )
}

export default Country
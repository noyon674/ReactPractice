import React from 'react'

function Country(props) {
    const {country, id} = props;
    const {name, flags, capital, population, area} = country;

  return (
    <article>
        <div>
            <img src= {flags.png} alt={name.common}/>
            <h3>{name.common}</h3>
            <h3>{population}</h3>
            <h3>{capital}</h3>
            <h3>{area}</h3>
        </div>
    </article>
  )
}

export default Country
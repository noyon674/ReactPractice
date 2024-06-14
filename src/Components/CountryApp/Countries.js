import React from 'react'
import {v4 as uuidv4} from 'uuid';

import Country from './Country'

function Countries(props) {

    const gettingCountry = (getValue)=>{
        props.onGettingData(getValue)
    }

  return (
    <div>
        {
            props.datas.map(country =>{
                const newCountry = {country, id: uuidv4()};
                return <Country onGettingValue = {gettingCountry} {...newCountry} key = {newCountry.id}/>
            })
        }
    </div>
  )
}

export default Countries
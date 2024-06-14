import React from 'react'
import {v4 as uuidv4} from 'uuid';

import Country from './Country'

function Countries(props) {
  //  console.log(props.datas)
  return (
    <div>
        {
            props.datas.map(country =>{
                const newCountry = {country, id: uuidv4()};
                return <Country {...newCountry} key = {newCountry.id}/>
            })
        }
    </div>
  )
}

export default Countries
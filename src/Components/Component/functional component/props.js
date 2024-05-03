import React from 'react';
import style from '../style.module.css';

export default function Card(props) {
    //props distructering
    const {title, Desc} = props
  return (
    <div className={style.center}>
        <h2>{title}</h2>
        <p>{Desc}</p>
    </div>
  )
}
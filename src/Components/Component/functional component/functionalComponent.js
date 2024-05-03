import React from 'react';
import style from '../style.module.css';

export default function Card() {
  return (
    <div className={style.center}>
        <h2>Title</h2>
        <p>This is a description</p>
    </div>
  )
}
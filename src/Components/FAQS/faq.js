import React, {useState} from 'react'
import style from './style.module.css';

function Faq({id, title, desc}) {
    const [toggle, setToggle] = useState(false)
  return (
    <div>
        <div className={style.container}>
            <h2>{title}</h2>
            <button className={style.button} onClick={()=>setToggle(!toggle)}>{toggle ? '-': '+'}</button>
            {toggle && <p>{desc}</p>}
        </div>
    </div>
  )
}

export default Faq
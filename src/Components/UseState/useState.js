import React, {useState} from 'react'

export default function Card() {
    const [count, setCount] = useState(0);

  return (
    <div className='center'>
        <h1>count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

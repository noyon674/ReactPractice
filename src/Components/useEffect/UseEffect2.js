import React, {useState, useEffect} from 'react'

function UseEffect2() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('useEffect calling')
    }, []
    //useEffect calls just first render
);

  return (
    <div className='center'>
        {console.log('render calling')}
        <h1>count: {count}</h1>
        <button onClick={()=>setCount(count => count + 1)}>+</button>
    </div>
  )
}

export default UseEffect2
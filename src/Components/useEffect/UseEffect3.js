import React, {useState, useEffect} from 'react'

function UseEffect3() {
    const [count, setCount] = useState(0);
    const [load, setLoad] = useState(false);

    useEffect(()=>{
        console.log('useEffect calling')
    }, [count]
    //when count update useEffect will be called
);

  return (
    <div className='center'>
        {console.log('render calling')}
        <h1>count: {count}</h1>
        <button onClick={()=>setCount(count => count + 1)}>+</button> &nbsp; &nbsp;

        <button onClick={()=>setLoad(!load)}>None</button>
    </div>
  )
}

export default UseEffect3
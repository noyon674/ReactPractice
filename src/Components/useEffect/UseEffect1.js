import React, {useState, useEffect} from 'react';

function UseEffect1() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
      console.log('useEffect')
    }, //no dependencies, useEffect calls with every render
  );

  return (
    <div className='center'>
      {console.log('rendering')}
        <h1>count: {count}</h1>
        <button onClick={()=>setCount(count => count + 1)}>+</button>
    </div>
  )
}

export default UseEffect1
import React, {useEffect, useState} from 'react'

function Datafatch() {
    const [todos, setTodos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            if(! res.ok){
                throw Error('Fetching is not successful.')
                
            }else{
                setError(false)
                return res.json();
            }
        })
        .then((data)=>{
            setTodos(data)
            setLoading(false);
            console.log(data)
        })
        .catch((err)=>{
            setError(err.message)
            setLoading(false)
            
        })
    }, []);

    const loadingMsg = <p>Data is loading</p>
    const element = todos && todos.map(item=> <h1 key={item.id}>{item.title}</h1>)
  return (
    <div>
        {error && error}
        {loading && loadingMsg}
        {element}
    </div>
  )
}

export default Datafatch;
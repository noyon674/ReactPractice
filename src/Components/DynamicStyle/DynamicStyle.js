import React, {useState, useEffect} from 'react'

function DynamicStyle() {
    const [text, setText] = useState('');
    const [err, setError] = useState(true);

    const handleChange = (e) =>{
        setText(e.target.value);
    }

    useEffect(()=>{
        if(text.length >= 2){
            setError(false)
        }else{
            setError(true)
        }
    }, [text])
  return (
    <div>
        <input style={{backgroundColor: err ? 'red': 'green'}} type='text' value={text} onChange={handleChange}/>
    </div>
  )
}

export default DynamicStyle
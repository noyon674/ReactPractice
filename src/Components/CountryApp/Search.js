import React, {useEffect, useState} from 'react'

const Search = (props) => {
    const [searchText, setSearchText] = useState('');

    const handleChange = (e)=>{
        setSearchText(e.target.value)
    }

    useEffect(()=>{
        props.onSearch(searchText)
    }, [searchText])

  return (
    <div style={{textAlign:'center', marginBottom:'50px'}}>
        <input style={{padding:'3px 15px'}} type='text' name='searcg' placeholder='Search Country' onChange={handleChange}/>
    </div>
  )
}

export default Search
import React, {useState, useEffect} from 'react';

import Countries from './Countries';
import './countries.modul.css';
import Search from './Search';

function HomePage() {
    const [isLogging,setLogging] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);

    const url = 'https://restcountries.com/v3.1/all';

    const fetchData = (geturl)=>{
        try{
            fetch(geturl)
            .then(res => res.json())
            .then(data => setCountries(data));
            setLogging(false);
            setError(null);

        }catch (error){
            setLogging(false);
            setError('Data Fetching is not successful.')
        }
    }

    useEffect(()=>{
        fetchData(url)
    }, [])

    const handleRemoveCoun =(getName) =>{
        const filtered = countries.filter((country)=>{
            return country.name.common !== getName;
        });
        setCountries(filtered)
    }

    const handleSearch = (name)=>{
        const value = name.toLowerCase();
        const newCountries = countries.filter((country)=>{
            let countryName = country.name.common.toLowerCase();
            return countryName.startsWith(value)
        })
        setCountries(newCountries)
    }
  return (
    <>
    <h1 className='mainHeader'>Country App</h1>
    <Search onSearch = {handleSearch}/>
    {isLogging && <h3>Loading...</h3>}
    {error && <h3>{error}</h3>}
    {countries && <Countries onGettingData = {handleRemoveCoun} datas = {countries}/>}
    </>
  )
}

export default HomePage
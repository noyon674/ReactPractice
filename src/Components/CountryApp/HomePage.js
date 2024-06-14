import React, {useState, useEffect} from 'react'
import Countries from './Countries';


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

  return (
    <>
    <h1>Country App</h1>
    {isLogging && <h3>Loading...</h3>}
    {error && <h3>{error}</h3>}
    {countries && <Countries datas = {countries}/>}
    </>
  )
}

export default HomePage
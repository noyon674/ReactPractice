import React, {useState} from 'react'
import style from './form.module.css';

export default function Form1() {
    // creating state for each input feild
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPss] = useState('');

    //creating different onchange function for each input
    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }
    const handlePass = (e)=>{
        setPss(e.target.value)
    }

    //handle submit function works when button is clicked
    const handleSubmit = (e)=>{
        e.preventDefault();
        //holding details in an object
        let User = {
            name,
            email,
            pass
        }
        console.log(User)
    }

  return (
    <div className={style.center}>
        <h1>Registration form 1</h1>
        <form action='' onSubmit={handleSubmit}>
            <div className={style.formgroup}>
                <label className={style.lable}>Name: </label>
                <input className={style.input} type='text' onChange={handleName} value={name} required/>
            </div>
            <div className={style.formgroup}>
                <label className={style.lable}>Email: </label>
                <input className={style.input} type='text' onChange={handleEmail} value={email} required/>
            </div>
            <div className={style.formgroup}>
                <label className={style.lable}>Password: </label>
                <input className={style.input} type='text' onChange={handlePass} value={pass} required/>
            </div>
            <div>
                <button className={style.button} type='submit'>Send</button>
            </div>
        </form>
    </div>
  )
}

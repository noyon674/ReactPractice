import React, {useState} from 'react'
import style from './form.module.css';

//using object in the useState
// Itermediate form controlling
export default function Form2() {
    //creating objcet in the useState
    const [user, setUser] = useState({name: '', email:'', pass: ''});
    const {name, email, pass} = user;

    //Specific onchange handler for each input field
    const handleName =(e)=>{
        setUser({name: e.target.value, email, pass})
    }
    const handleEmail =(e)=>{
        setUser({name, email: e.target.value, pass})
    }
    const handlePass =(e)=>{
        setUser({name, email, pass: e.target.value})
    }

    //submit handler
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Form is submitted:', user)
    }
  return (
    <div className={style.center}>
        <h1>Registration form 2</h1>
        <form action='' onSubmit={handleSubmit}>
        <div className={style.formgroup}>
                <label className={style.lable}>Name: </label>
                <input className={style.input} type='text' onChange={handleName} name='name' value={name} required/>
            </div>
            <div className={style.formgroup}>
                <label className={style.lable}>Email: </label>
                <input className={style.input} type='email' onChange={handleEmail} name='email' value={email} required/>
            </div>
            <div className={style.formgroup}>
                <label className={style.lable}>Password: </label>
                <input className={style.input} type='password' onChange={handlePass} name='pass' value={pass} required/>
            </div>
            <div>
                <button className={style.button} type='submit'>Send</button>
            </div>
        </form>
    </div>
  )
}

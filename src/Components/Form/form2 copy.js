import React, {useState} from 'react'
import style from './form.module.css';

//using object in the useState
//all in one onchange handler
// advance form controlling
export default function Form2() {
    //creating objcet in the useState
    const [user, setUser] = useState({name: '', email:'', pass: ''});
    const {name, email, pass} = user;

    //all in one onchange handler for all
    const handleChange =(e)=>{
        const Name = e.target.name;

        /*code --1 */
        /**
        if(Name == 'name'){
            setUser({name: e.target.value, email, pass})
        }else if(Name == 'email'){
            setUser({name, email: e.target.value, pass})
        }else if(Name == 'pass'){
            setUser({name, email, pass: e.target.value})
        }
        */
       /*code --2 */
       setUser({...user, [Name]: e.target.value})

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
                <input className={style.input} type='text' onChange={handleChange} name='name' value={name} required/>
            </div>
            <div className={style.formgroup}>
                <label className={style.lable}>Email: </label>
                <input className={style.input} type='email' onChange={handleChange} name='email' value={email} required/>
            </div>
            <div className={style.formgroup}>
                <label className={style.lable}>Password: </label>
                <input className={style.input} type='password' onChange={handleChange} name='pass' value={pass} required/>
            </div>
            <div>
                <button className={style.button} type='submit'>Send</button>
            </div>
        </form>
    </div>
  )
}

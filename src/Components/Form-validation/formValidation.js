import React, {useState} from 'react';
import {useFormik} from 'formik';

function FormValidation() {

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            pass:''
        },
        onSubmit: (values, {resetForm})=>{
            console.log(values)
            resetForm({values: ''})
        }
        
    });

  return (
    <div className='center'>
        <h1>Form Validation with Formik</h1>
        <form action='' onSubmit={formik.handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                type='text'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                required/>
            </div>
            <div>
                <label>Email:</label>
                <input 
                type='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                required/>
            </div>
            <div>
                <label>Password:</label>
                <input 
                type='password'
                name='pass'
                value={formik.values.pass}
                onChange={formik.handleChange}
                required/>
            </div>
            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default FormValidation
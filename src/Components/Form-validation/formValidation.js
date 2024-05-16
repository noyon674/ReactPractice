import React from 'react';
import * as yup from 'yup';
import {useFormik} from 'formik';

function FormValidation() {
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            pass:''
        },
        validationSchema: yup.object({
            name: yup.string().min(5, ['Name field minimum 5 characters']).required(),
            email: yup.string().email().required(),
            pass: yup.string().min(6, 'Password must be 6 characters').required()
        }),
        onSubmit:(values, {resetForm})=>{
            console.log(values)
            resetForm({values:''})
        }
    });
    console.error(formik.errors)
  return (
    <div className='center'>
        <h1>Form with Formik</h1>
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
            {formik.touched.name && formik.errors.name && <span style={{color:'red'}}>{formik.errors.name}</span>}
            <div>
                <label>Email:</label>
                <input 
                type='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                required/>
            </div>
            {formik.touched.email && formik.errors.email && <span style={{color:'red'}}>{formik.errors.email}</span>}
            <div>
                <label>Password:</label>
                <input 
                type='password'
                name='pass'
                value={formik.values.pass}
                onChange={formik.handleChange}
                required/>
            </div>
            {formik.touched.name && formik.errors.pass && <span style={{color:'red'}}>{formik.errors.pass}</span>}
            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default FormValidation
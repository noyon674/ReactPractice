
import React, {useReducer} from 'react';
import { useFormik } from 'formik';
import {v4 as uuidv4} from 'uuid';

const bookList = [
    {id: uuidv4(), name: 'Math'},
    {id: uuidv4(), name: 'Bangla'}
];

function PracticeAgain() {
    const formik = useFormik({
        initialValues:{
            bookName:''
        },
        onSubmit:(value, {resetForm})=>{
            const createBook = {id: uuidv4(), name: value.bookName};
            dispatch({type: 'ADD', payload: createBook});
            resetForm({values:''});
        }
    });

    const reducer = (state, action)=>{
        //action.type, action.payload
        const newBookList = [...state.allBook, action.payload];
        if(action.type == "ADD"){
            return{
                allBook: newBookList,
                isModalOpen: true,
                modalText: 'Book is added'
            }
        }else if(action.type == 'REMOVE'){
            const filteredBooks = [...state.allBook].filter(book=> book.id !== action.payload)
            return{
                allBook: filteredBooks,
                isModalOpen: true,
                modalText: 'Book is removed'
            }
        }

        return state;
    };

    const [bookState, dispatch] = useReducer(reducer, {
        allBook: bookList,
        isModalOpen: false,
        modalText: ''
    });

    const handleRemove = (id)=>{
        dispatch({type: 'REMOVE', payload:id})
    }

    const Modal = (props)=>{
        return <p>{props.message}</p>
    }
  return (
    <div>
        <h2>Book List</h2>
       <form action='' onSubmit={formik.handleSubmit}>
        <input
        type='text'
        name='bookName'
        placeholder='Enter Book Name'
        value={formik.values.bookName}
        onChange={formik.handleChange} />
        <button type='submit'>Add</button>
       </form>

       {bookState.isModalOpen && <Modal message = {bookState.modalText}/>}

       {
        bookState.allBook.map(book =><li key={book.id}>{book.name} <button onClick={e=>handleRemove(book.id)}>del</button></li>)
       }
    </div>
  )
}

export default PracticeAgain;
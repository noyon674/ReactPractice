import React, {useState, useReducer} from 'react';

//books, modalText, isModalOpen
//add book -> modal text
//remove book ->

const bookList = [
    {id: 1, name: 'Pather Panchal'},
    {id: 2, name: 'Padma Nadir Majhi'},
    {id: 3, name: 'Srikanta'}
];

const Modal = (props)=>{
    return <p>{props.txt}</p>
}

const reducer = (state, action)=>{
    //action.type, action.payload

    if(action.type === 'ADD'){
        const allBooks = [...state.books, action.payload];
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: 'Book is added'
        }
    }
    if(action.type === 'REMOVE'){
        const fileterBooks = [...state.books].filter(book => book.id !== action.payload);
        return{
            ...state,
            books: fileterBooks,
            isModalOpen: true,
            modalText: 'Book is removed'
        }
    }
    return state;
}

function UserReducerUse() {

    // const [books, setBooks] = useState(bookList);
    const [bookName, setBookName] = useState('')
    // const [isModalOpen, setIsModalOpen] = useState(false)
    // const [modalText, setModalText] = useState('')
    const [bookState, dispatch] = useReducer(reducer, {
        books: bookList,
        isModalOpen: false,
        modalText: ''
    }) 

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newBook = {id: new Date().getTime().toString(), name: bookName}
        dispatch({type: 'ADD', payload: newBook})
        //field empty
        setBookName('')
        
    }

    const removeBook = (id)=>{
        console.log(id)
        dispatch({type: 'REMOVE', payload: id})
    }
  return (
    <div>
        <h2>Book List</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' value={bookName} onChange={e=>setBookName(e.target.value)}/>
            <button type='submit'>
                Add Book
            </button>
        </form>
        {bookState.isModalOpen && <Modal txt = {bookState.modalText}/>}
        {
            bookState.books.map((book)=>{
                return <li key={book.id}>{book.name} <button onClick={()=>{removeBook(book.id)}}>Remove</button></li>
            })
        }
    </div>
  )
}

export default UserReducerUse
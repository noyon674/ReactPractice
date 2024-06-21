import React, {useState, useReducer} from 'react';

const bookList = [
    {id:1, name: 'Bangla'},
    {id:2, name: 'Math'}
];


function ReducerPractice() {
    // const [books, setBooks] = useState(bookList);
    const [bookName, setBookName] = useState('');
    // const [modalTxt, setModalTxt] = useState('');
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const reducer = (state, action)=>{
        //action.type, action.payload
        if(action.type === 'ADD'){
            const allBooks = [...state.books, action.payload];
            return {
                books: allBooks,
                isModalOpen: true,
                modalTxt: 'Book is added by reducer'

            }
        }
        if(action.type === 'REMOVE'){

            const fileterBooks = [...state.books].filter(book=> book.id !== action.payload)
            return{
                books: fileterBooks,
                isModalOpen: true,
                modalTxt: 'Book is removed by reducer'
            }
        }
        return state;
    }

    const [bookState, dispatch] = useReducer(reducer, {
        books: bookList,
        modalTxt: '',
        isModalOpen: false
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        // setIsModalOpen(true);
        // setModalTxt('Book is added');
        const newBook = {id: new Date().getTime().toString(), name: bookName};
        // setBooks([...books, newBook])
        dispatch({type: 'ADD', payload: newBook})
    }

    const Modal = (props)=>{
        return <p>{props.modalText}</p>
    }

    const handleRemove = (id)=>{
        dispatch({type: 'REMOVE', payload: id})
    }

  return (
    <div>
    <h2>Book List</h2>
    <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        name='book' 
        placeholder='Enter Book Name' 
        value={bookName}
        onChange={e=>setBookName(e.target.value)}
         />
         <button type='submit'>Add Book</button>
    </form>
    {bookState.isModalOpen && <Modal modalText = {bookState.modalTxt}/>}
    {
        bookState.books.map(book => <li key={book.id}>{book.name}  <button onClick={()=>{handleRemove(book.id)}}>del</button></li>)
    }
    </div>
  )
}

export default ReducerPractice;
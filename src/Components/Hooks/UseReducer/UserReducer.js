import React, {useState} from 'react';

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

function UserReducer() {

    const [books, setBooks] = useState(bookList);
    const [bookName, setBookName] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalText, setModalText] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(bookName)
        const newBook = {id: new Date().getTime().toString(), name: bookName}
        setBooks([...books, newBook])
        setIsModalOpen(true);
        setModalText('Book is added')
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
        {isModalOpen && <Modal txt = {modalText}/>}
        {
            books.map((book)=>{
                return <li key={book.id}>{book.name}</li>
            })
        }
    </div>
  )
}

export default UserReducer
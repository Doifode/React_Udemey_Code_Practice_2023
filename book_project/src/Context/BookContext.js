import { createContext, useState, useCallback } from "react";

import axios from "axios";


const BookContext = createContext();
// Here we created the context function component to share the across the files


function Provider({ children }) {
 
  // When we want to share more than one value through the context then  we create the provider function
  // we have to write the  all the functioni , values,  arrays, that we wann to pass accross the component functioins


  const [Book, setBook] = useState([]);
  // this is useState hook that i have usecd to create array 

  const fetchBook = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBook(response.data);
  }, []);
  // fetchBook is the functioin which fire the GET  request when the application first renders on server;


  const DeleteBookById = async (id) => {
    await axios.delete("http://localhost:3001/books/" + id);

    const updatedBooks = Book.filter((book) => {
      return book.id !== id;
    });
    setBook(updatedBooks);
  };
  async function CreateBook(title) {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    console.log(response);
    const updatedBooks = [...Book, response.data];
    setBook(updatedBooks);
  }

  const EditbooksById = async (id, NewTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: NewTitle,
    });

    const updatdBooks = Book.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          ...response.data,
        };
      }
      return book;
    });
    setBook(updatdBooks);
  };
const printson=()=>{
  console.log('hi')
}

  const valueToShare = {
    Book,
    DeleteBookById,
    EditbooksById,
    CreateBook,
    fetchBook,
    printson
  };

  // all the functions and the arrays are store in the one object called valueToShare and pass through the BookContext.provider 
  // to the all over  the app 
  
  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
  // in last the Provider function returns the BookContext component with provider facility means we can access  them all
  // while we import the bookcontext file or provider aplication
}
export { Provider };
export default BookContext;

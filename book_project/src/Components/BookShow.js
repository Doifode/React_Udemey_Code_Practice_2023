import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContextHook from "../Hooks/Book-Context-Hook";

function BookShow({ book }) {
  const {DeleteBookById ,printson } = useBookContextHook()
    // here we get the bookContext through the customise hook that we have created 
  // and through that i have destructure the function called the  DeleteBookById to use in our component

  const [showEdit, setShowEdit] = useState(false);
  // this useState are used to hide  and  show the Editbook component  on the screen 

  const handleSubmit = () => {
    setShowEdit(false);
  };
  

  let content;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }
// here the variable used to show or hide the values 
// if the showEdit state is true then content variable has the  component or false then no 


  const HandleDelete = () => {
    DeleteBookById(book.id);
  };
  // this  functio  used to delete the array element by using id the array is coming through the props through bookList component by map function

  function HandleEdit() {
    setShowEdit(!showEdit);
  }
  // this function usecd here to show and hide the edit mode 
  return (
    <>
      <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/500/500`} alt="" />
        <div>{content}</div>
        <h1>{book.title}</h1>

        <div className="actions">
          <button className="edit" onClick={HandleEdit}></button>
          <button className="delete" onClick={HandleDelete}></button>
          <button   onClick={printson}> printson</button>
        </div>
      </div>
    </>
  );
}
export default BookShow;

import { useState } from "react";
import useBookContextHook from "../Hooks/Book-Context-Hook";

function BookEdit({ book, onSubmit }) {
  const  {EditbooksById}= useBookContextHook()
    // here we get the bookContext through the customise hook that we have created 
  // and through that i have destructure the function called the  EditbooksById to use in our component
  const [title, settitle] = useState(book.title);
  // this useState is used to update the book title  value based  on  the book.title  id 
  
  function handleChange(event) {
    settitle(event.target.value);
  }
  // here handle change used to update the value of the book title by using the onchange function
  function SubmitForm(event) {
    event.preventDefault();
    // used to stop the default submit behaviar 
    onSubmit();
    // this function is here thrhough the bookshow component and  used to hide and show edit mode 
    EditbooksById(book.id , title)
  }
  //  this function will update the value of the book.title using the book.id and sends the book.id and the updated new title to the function  in the context

  return (
    <>
      <div>
        <form className="book-edit" action="" onSubmit={SubmitForm}>
          <input
            onChange={handleChange}
            value={title}
            type="text "
            className="input"
          />
          <button className="button is-primary" onClick={SubmitForm}>
            save
          </button>
        </form>
      </div>
    </>
  );
}
export default BookEdit;

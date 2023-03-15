import {   useState } from "react";
import useBookContextHook from "../Hooks/Book-Context-Hook";
function BookCreate() {
  const [title, settitle] = useState("");

  const {CreateBook}=useBookContextHook()
  // here we get the bookContext through the customise hook that we have created 
  // and through that i have destructure the function called the  CreateBook to use in our component
  
  function OnSubmitForm(event) {
    event.preventDefault();
    CreateBook(title);
   
  }
  // onsubmit button will fire when  use hit enter and  the title value of state will passthrough the function to the
  // parent component 

  function handleChange(event) {
    settitle(event.target.value);
  }
  // handle cange function is created to update the value of the state when the change is accure
  return (
    <>
      <div className="book-create">
        <h1 className="">Add Book !!</h1>
        <form onSubmit={OnSubmitForm}>
          {/* this function used or update value in the array bu sending througn  the  functions */}
          <label htmlFor="">Title</label>
          <input
            className="input"
            type="text"
            value={title}
            onChange={handleChange}
          />
          {/* handle change function  will fire when the any change accures in the input element keypress, space, copyPast */}
          <button className="button">Add Book</button>
        </form>
      </div>
    </>
  );
}
export default BookCreate;

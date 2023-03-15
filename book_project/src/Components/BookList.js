
import BookShow from "./BookShow";
import useBookContextHook from "../Hooks/Book-Context-Hook"
function BookList() {


const {Book}= useBookContextHook()
    // here we get the bookContext through the customise hook that we have created 
  // and through that i have destructure the common Array called the  Book to use in our component

  const renderedBooks = Book.map((book) => {
    return (
      <BookShow  key={book.id} book={book} />
    );
  }); 
  // this function is created to render  the component for each different value from the array which returns the 
  // components with array values 

  return (
    <>
      <div className="book-list"> {renderedBooks}</div>
    </>
  );
}
export default BookList;

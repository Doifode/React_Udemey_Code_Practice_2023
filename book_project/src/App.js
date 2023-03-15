import {  useEffect,useContext } from "react";
import BookCreate from "./Components/BooCreate";
import BookList from "./Components/BookList";
import BookContext from "./Context/BookContext";
import "./index.css";

function App() {
 const {fetchBook }= useContext(BookContext);
 //  here line no 8 we have imported and destructured the context function and get the only function that we need to work here
  useEffect(() => {
    fetchBook()
  },[]);
  // useEffect is an the hook that provided by the react liabrary to perform some tasks 
  // use effect hook allows us to manage the execution of the function  
  // important !!!! useEffect are only except function 
  // and the execution is  depend on the second argument that is an array
  // if the array is blank then the function will execute only once 
  // if  the we dont put any second argument then the funtion will execute again and  again
  // and  also we  can decide the execution of function by changing value of any variable by passing it in to the array.

  return (
    <>
      <div className="app">
        <h1>Reading Lists !</h1>
        <BookList />
        <BookCreate />
      </div>
    </>
  );
}
export default App;

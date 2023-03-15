import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
function App() {
  const [term , setTerm]=useState('')

const handleEvent =(event)=>{
  setTerm(event.target.value)

}
  let name = "yash";
  // let address ={
  //   name:'yash',
  //   city:'kolhapur',
  //   pincode:416122
  // }
  // let ArrayColor=[
  //   'red','blue','green'
  // ]
  // let  t= true;
  // let f=false;

  // here we can print variable using curley braces in jsx
  // but we can not able to  print the object/booolean
  // in case we print such of them we end up getting an error in console
  // when we used to print array the array will be print direct ly with their all elements withour comma

  return (
    // the curley bracess are also used to write expressions of the javascript
    <>
      <h1>
        My Name is {name}
        <br />
        Time is {new Date().toLocaleTimeString()}
      </h1>

      <input type=" " value={term} onChange={handleEvent}  />
      {term}
      {term.length <= 0 && 'please enter text'}
    </>
  );
}
root.render(<App />);

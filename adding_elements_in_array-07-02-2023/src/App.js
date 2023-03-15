import { useState } from "react";
import InputApp  from "./InputApp";
function App(){
  const [array , setArray]=useState([])
  const CreateArray = (newArray ,index)=>{
   const updatedArray=[
  array.slice(0, index), newArray,array.slice(index)
   ];
   setArray(updatedArray)
   console.log(updatedArray)
    
  }
 const  renderarray =array.map((array , i )=>{
  return <>
  <li  key={i}>
    {i}
    {array}
    </li></>
 })
  
  return <>
  <InputApp SubmitArray={CreateArray} />
 
  {renderarray}
  </>

}export default App;
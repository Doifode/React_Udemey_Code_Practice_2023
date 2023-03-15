import { useState } from "react"

function InputApp({SubmitArray}){
    const [array , setArray]=useState('')
    function handleChange(event){
        setArray(event.target.value)

    }
   function SubmitForm(event){
    event.preventDefault()
    SubmitArray(array)
    }
    return <>

    <form action="" onSubmit={SubmitForm} >
    <input onChange={handleChange} type="text" value={array} />
    </form>
    </>
}
export default InputApp;
import { useState } from "react";

function App(){
    const [ count , setCount]=useState(0)

    const Increase = ()=>{
        setCount(count +1)
    }
    const Decrease = ()=>{
        setCount(count -1)
    }
    return(
        <>   
        <h1> {count}</h1>
        <button onMouseMove={Increase}>Increase</button>
        <button onMouseMove={Decrease}>Decrease</button>
        </>
    )

}
export default App;
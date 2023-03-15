import ReactDOM  from "react-dom"
import { useEffect } from "react"
import Buttons from "../Components/Buttons"
export default function ModalPage( {handleClose, children }) {

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return ()=>{
      document.body.classList.remove('overflow-hidden')
    }
   }, [])
  return ReactDOM.createPortal(
    
 <div>
  <div  onClick={handleClose}  className=" fixed inset-0 bg-gray-300 opacity-80" ></div>
   <div className="fixed inset-40 p-10 bg-white"> 
{children}
<Buttons  primary onClick={handleClose} children="Accept"/>
   
   </div>
  </div>,
  document.querySelector(".modal-container")
)
  
  

}

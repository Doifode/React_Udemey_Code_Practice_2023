import { useContext } from "react";
import BookContext from "../Context/BookContext";
const useBookContextHook =()=>{
    return useContext(BookContext);
}
// this is an the customise hook that returns the context fuction
// means we can use that hook in our all components

export default useBookContextHook
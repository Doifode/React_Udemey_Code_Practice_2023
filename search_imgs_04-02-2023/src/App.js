
 import SearchBar from './Components/SearchBar'
 import searchImages  from './Api'
 import ImageList from  './Components/ImagesList'
import { useState } from 'react'
 function App(){
  const [imgs , setImages]=useState([])
  const HandleSubmit=async ( term)=>{
    const result = await searchImages(term)
setImages(result)
  }
  return (
<>
<SearchBar onSubmit={HandleSubmit}/>
<ImageList images={imgs}/>
</>    
  
  )
 }
 export default App;
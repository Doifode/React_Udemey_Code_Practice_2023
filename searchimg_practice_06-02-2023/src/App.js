import imageSearch from "./ApiCall";
import SearchBar from "./Components/SearchBar";
import ImageList  from "./Components/ImageList";
import { useState } from "react";
function App() {
  const [images , setImage] =  useState([]);
  async function  GetImages( term) {
  const result=await imageSearch(term)
    setImage(result)
  }

  return (
    <>
      <div>
        <SearchBar SubmitImage={GetImages} />
        <ImageList ImageGroup={images}/>
      </div>
    </>
  );
}
export default App;

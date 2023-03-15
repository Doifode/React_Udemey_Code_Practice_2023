import { useState } from "react";

function SearchBar({ SubmitImage }) {
  const [term, setTerm] = useState("");

  function PreventSubmit(event) {
    event.preventDefault();
    
    SubmitImage(term);
  }
  function handleChange(event) {
    setTerm(event.target.value);
  }
  return (
    <>
      <div>
        <form action="" onSubmit={PreventSubmit}>
          {term}
          <input type="text" value={term} onChange={handleChange} />
        </form>
      </div>
    </>
  );
}
export default SearchBar;

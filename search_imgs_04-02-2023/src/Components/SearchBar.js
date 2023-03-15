import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  function submitFunction(event) {
    event.preventDefault();

    console.log("submitt button ");
    onSubmit(term);
  }
  const handelChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className=" col-md-12 my-3">
            <form action="" onSubmit={submitFunction}>
              <div className="d-flex justify-content-center">
                {" "}
                <input
                  val={term}
                  onChange={handelChange}
                  className="w-50 form-control"
                  placeholder="Search . . . "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchBar;

import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = new useNavigate()
  const Back=()=>{
    navigate(-1)
  }
 
  return (
    <div className="">
      <div className="row bg-warning">
        <div className="col-2 bg-danger">
        <button onClick={Back} className='btn  h-100 w-100 bg-danger border-0 fs-1 text-white'>Back</button>
        </div>
        <div className="col-md-10">
          <div className="py-2 ">
           
            <h1 className="text-center text-white">Header !</h1>
         
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

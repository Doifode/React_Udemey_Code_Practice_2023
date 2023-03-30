import React from "react";
import { changeSerchItem } from "../store";
import { useDispatch ,useSelector } from "react-redux";



  function CarSearch() {
    const dispatch = useDispatch();
    const serchItem =useSelector((state)=>{
      return state.CarSearch

    })
     const handleSerchItemchange=(e)=>{
      dispatch(changeSerchItem(e.target.value))


    }
return  <>
  <div className="row">
    <div className="col-md-12">
    <div className="text-center">
      <input  value={serchItem} onChange={handleSerchItemchange} type="text" placeholder="Search"  className="form-control w-50 "/>
     </div>
    </div>
  </div>
  </>
}

export default CarSearch;

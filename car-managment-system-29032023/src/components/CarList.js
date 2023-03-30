import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCars } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(({car:{data , serchItem}}) => {
return data.filter((cars)=>{
 return  cars.name.toLowerCase().includes(serchItem.toLowerCase())
})
 
 
  });
  // console.log(cars);
  const handleDelte = (car) => {
    dispatch(removeCars(car.id));
    // console.log(car.id)
  };
  return (
    <>
      <table className="table table-bordered table-striped">
        <tbody>
          <tr>
            <th className="w-25"> Car Nam </th>
            <th className="w-25"> Cost </th>
            <th className="w-25"> Action </th>
          </tr>
          {cars.map((cars) => {
            return (
              <tr key={cars.id}>
                <td>{cars.name}</td>
                <td> {cars.cost}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={()=>{
                      handleDelte(cars)
                    }}
                  >
                      Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CarList;

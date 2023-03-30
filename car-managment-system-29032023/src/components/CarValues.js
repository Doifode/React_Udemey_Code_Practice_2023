import React from "react";
import { useSelector } from "react-redux";

function CarValues() {
const  totalCost= useSelector(({car :{data, serchItem}})=>{
 const filterData = data.filter((car)=>{
  return car.name.toLowerCase().includes(serchItem.toLowerCase());


  })
  return filterData.reduce((acc,car)=>{
    return acc +car.cost
  },0)

})
  return <>
  <h3>

    Rs.{totalCost}
  </h3>
  
  </>
}

export default CarValues;

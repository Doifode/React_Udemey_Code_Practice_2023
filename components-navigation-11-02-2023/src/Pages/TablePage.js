import Table from "../Components/Table";
import React from "react";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-warning", score: 5 },
    { name: "Apple", color: "bg-danger", score: 3 },
    { name: "Banana", color: "bg-secondary", score: 1 },
    { name: "Lime", color: "bg-success", score: 4 },
  ];
  const config = [
    {
      lable: "Name",
      render: (fruit) => {  return fruit.name; },
    },
    {
      lable: "Color",
      render: (fruit) => {  return <div className={`p-2 m-3 ${fruit.color}`}></div> },
    },
    {
      lable: "Score",
      render: (fruit) => {  return fruit.score; },
    },
    
  ];
  const keyfn=(fruit)=>{
    return fruit.name
  }

  return (
    <div>
      <Table  config={config} data={data}  keyfn={keyfn}/>
    </div>
  );
};

export default TablePage;

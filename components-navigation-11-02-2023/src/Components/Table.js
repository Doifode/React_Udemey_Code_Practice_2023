import React from "react";

const Table = ({ data , config,keyfn }) => {

const renderHeader = config.map((column)=>{
    return <th key={column.lable}>
        {column.lable}
    </th>
})
  const renderData = data.map((rowData) => {
 const renderCell = config.map((column)=>{
    return <td key={column.lable}>{column.render(rowData)} </td>
 })
 return <tr  key={keyfn(rowData)}> 
    {renderCell}
 </tr>
  });
  return (
    <table className="table table-bordered table-striped">
     <tbody>
     <tr  className="p-2 m-2 text-center">
      {renderHeader}
      </tr>
      {renderData}
     </tbody>
    </table>
  );
};

export default Table;

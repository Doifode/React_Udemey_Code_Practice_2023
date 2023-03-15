import React, { useState } from "react";

import DropDown from "../Components/DropDown";
// import AccordionPage from  './Pages/AccordionPages'
const DropDownPage = () => {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { id: 1, lable: "Red", value: "red" },
    { id: 2, lable: "Green", value: "green" },
    { id: 3, lable: "Blue", value: "blue" },
  ];

  return (
    <div className="flex">
      <div>
        <DropDown
          selection={selection}
          onSelect={handleSelect}
          options={options}
        />
      </div>
      <div>
        <DropDown
          selection={selection}
          onSelect={handleSelect}
          options={options}
        />
      </div>
    </div>
  );
};

export default DropDownPage;

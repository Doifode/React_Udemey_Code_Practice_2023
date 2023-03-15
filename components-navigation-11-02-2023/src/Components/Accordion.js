import React from "react";
import { useState } from "react";
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";

const Accordion = ({ items }) => {
  // {items} is the array coming from the app.js file as a prop
  const [expandedIndex, setExpandedIndex] = useState();

  // This expandindex state is used  to pass the index of the array element and then we put the condition on that index
  // to show and hide the jsx
  const handleEvent = (GetIndex) => {
    // this function get the current index were the users is clicked from the array mapping scope
    // and set to the state
    if (expandedIndex === GetIndex) {
      setExpandedIndex();
      // this condition checks the index is same or not if the index is same  both time then it close the  or set the null  value to the  state
    } else {
      setExpandedIndex(GetIndex);
      // other wise set the given  index by the onClick function
    }
  };

  const renderEl = items.map((item, index) => {
    // here the map function used to iterate the one of each element from  the array and pass and render it seperately
    // for each time
    const isExpanded = index === expandedIndex;
    // here we store  the index and  the true and  false value in  isExpanded

    return (
      <div key={item.id}>
        {/* here we pass the different id as a key */}
        <div
          onClick={() => {
            handleEvent(index);
          }}
          // this function is used to pass the clicked elements index to the handle function and then the handle function will set the value of state depenes on it

          className="flex p-3  justify-between bg-gray-50 border-b items-center cursor-pointer "
        >
          {item.lable}
          {isExpanded ? (
            <BsFillCaretDownFill className="text-xl" />
          ) : (
            <BsFillCaretRightFill className="text-xl" />
          )}
          {/* here based on the value of isExpanded variable the icon are set either first or second  */}
        </div>

        <div>
          {isExpanded && <div className="border-b  "> {item.content}</div>}
          {/* here the and condition  is used to show the element on website  */}
        </div>
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderEl}</div>;
};

export default Accordion;

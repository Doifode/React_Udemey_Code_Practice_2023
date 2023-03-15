import React, { useEffect, useState } from "react";

import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";

import { useRef } from "react";

import Panel from "./Panel";

const DropDown = ({ options, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();
  useEffect(() => {
    const handler = (event) => {
      if(!divEl.current){
        return;

      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOnOption = (option) => {
    setIsOpen(false);
    onSelect(option);
  };
  const RenderOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursour-pointer p-1"
        onClick={() => handleClickOnOption(option)}
        key={option.id}
      >
        {option.lable}
      </div>
    );
  });

  //   let content='select...';
  //   if(selection){
  //     content = selection.lable
  //   }

  return (
    <div ref={divEl} className="w-48 relative ">
      <Panel
        className="cursor-pointer flex justify-between  item-center "
        onClick={handleClick}
      >
        {selection?.lable || "select..."}{" "}
        {isOpen ? <BsFillCaretDownFill /> : <BsFillCaretRightFill />}
      </Panel>

      {isOpen && (
        <Panel className="cursor-pointer absolute top-full">
          {RenderOptions}
        </Panel>
      )}
    </div>
  );
};

export default DropDown;

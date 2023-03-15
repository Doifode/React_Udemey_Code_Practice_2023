import React from "react";
import Links from "./Links";
const SideBar = ({ to, path, activeClassName }) => {
  const links = [
    { lable: "Accordion", path: "/accordion" },
    { lable: "DropDown", path: "/dropdown" },
    { lable: "Buttons", path: "/buttons"},
    {
      lable:"Table" , path:"/tablepage"
    },
    {
      lable:"Modal",path:'/modal'
    }
  ];
  const renderLink = links.map((link) => {
    return (
      <Links
        key={link.lable}
        className="mb-4"
        activeClassName="font-bolt border-l-4 border-blue-400"
        to={link.path}
      >
        {link.lable}
      </Links>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderLink}
    </div>
  );
};

export default SideBar;

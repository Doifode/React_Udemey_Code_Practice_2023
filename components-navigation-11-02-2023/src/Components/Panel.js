import React from "react";
import classnames from "classnames"
// CLASSNAMES IS THE LIABRARY WHICH WE USE TO RETURN THE COMBINATION OF THE CLASS NAMES STRING 

const Panel = ({ className, children, ...rest }) => {
  // WE PASS THIS PROPS TO THE PARENT COMPONENT 

  const FinalClassName = classnames(
    // FINALCLASSNAME IS THE VARIABLE WERE THE CLASS STRING IS GONN STORE 
    "border rounded p-1 shadow bg-white w-full", className );

  return (

    <div className={FinalClassName} {...rest}>
    {/* CLASSNAME IS THE PROP FOR THE COMPONENT  */}
      {children}
      {/* CHILDREN MEANS THE DEFAULT PROP THAT USED AS THE INTERNAL ELEMTNS OR TAGS  */}
    </div>
  );
};

export default Panel;

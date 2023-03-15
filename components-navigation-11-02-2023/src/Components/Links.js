import classNames from "classnames";
import NavigationHook from "../Hooks/NavigationHook";
const Links = ({ children, className, to ,activeClassName }) => {
  
  const { navigate , currentPath} = NavigationHook();
  
  const classnames =classNames('text-blue-500' , className, currentPath === to && activeClassName )


  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();

    navigate(to);
  };

  return (
    <a href={to} className={classnames}   onClick={handleClick}>
      {" "}
      {children}
    </a>
  );
};

export default Links;

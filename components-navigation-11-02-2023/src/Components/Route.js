
import NavigationHook from "../Hooks/NavigationHook";
const Route = ({ children, path }) => {
  const { currentPath } = NavigationHook();
  if (path === currentPath) {
    return children 
  }
  else{
    return null;
  }
};

export default Route;

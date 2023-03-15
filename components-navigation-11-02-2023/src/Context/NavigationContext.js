import { createContext, useEffect, useState } from "react";
const NavigationContext = createContext();
function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    function handlePath() {
      setCurrentPath(window.location.pathname);
      return () => {
        window.removeEventListener("popstate", handlePath);
      };
    }
    window.addEventListener("popstate", handlePath);
  }, []);
 
  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {children}
    </NavigationContext.Provider>
  );
}
export { NavigationProvider };
export default NavigationContext;

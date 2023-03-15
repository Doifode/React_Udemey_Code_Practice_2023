import NavigationContext from "../Context/NavigationContext";
import { useContext } from "react";
function NavigationHook() {
  return useContext(NavigationContext);
}
export default NavigationHook;

import React from "react";
import SideBar from "./Components/SideBar";
import Route from "./Components/Route";
import AccordionPages from  "./Pages/AccordionPages"
import ButtonPage from  "./Pages/ButtonPage"
import DropDownPage from  "./Pages/DropDownPage"
import Modal from "./Components/Modal";
import TablePage from "./Pages/TablePage"

const App = () => {

 return <>
<div>
<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
<SideBar/>


<div className="col-span-5">
    
<Route path="/accordion">
    <AccordionPages/>
</Route>
<Route path="/buttons">
    <ButtonPage/>
</Route>
<Route path="/dropdown">
    <DropDownPage/>
</Route>
<Route path="/modal">
    <Modal/>
</Route>
<Route path="/tablepage">
    <TablePage/>
</Route>
</div>
</div>
</div>
 </>
};

export default App;

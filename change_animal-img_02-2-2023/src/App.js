import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomaAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}
function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomaAnimal()]);
  };
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <>
      <div className="App">
        <button className="btn btn-primary m-3" onClick={handleClick}>click Me</button>
        <div className="Render">{renderedAnimals}</div>
      </div>
    </>
  );
}
export default App;

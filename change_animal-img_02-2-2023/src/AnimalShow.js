import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import "./AnimalShow.css";
const svrMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};
function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const HeartSize = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <div className="animalShow card shadow-lg">
        <img
          className="animalList"
          onClick={HeartSize}
          src={svrMap[type]}
          alt=""
        />
        <div className="bottom">
          <img
            className="heart"
            src={heart}
            alt=""
            style={{ width: 10 + clicks * 10 }}
          />
          <h4>{clicks}</h4>
        </div>
      </div>
    </>
  );
}
export default AnimalShow;

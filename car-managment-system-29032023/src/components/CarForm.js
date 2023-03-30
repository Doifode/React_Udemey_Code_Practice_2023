import React from "react";
import { changeCost, changeName, addCars } from "../store";
import { useSelector, useDispatch } from "react-redux";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost };
  });
  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleCostChange = (e) => {
    const carCost = parseFloat(e.target.value) || 0;
    dispatch(changeCost(carCost));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCars({ name, cost }));
  };
  return (
    <>
      <div className="container py-4 border">
        <div className="row">
          <div className="col-md-12">
            <form
              action=""
              className="d-flex justify-content-around align-item-center"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="form-control w-25"
                value={name}
                onChange={handleNameChange}
                placeholder="Car Name "
              />
              <br />
              <input
                type="text"
                className="form-control w-25"
                value={cost}
                onChange={handleCostChange}
                placeholder="Car Cost "
              />
              <button className="my-1 btn btn-primary "> Add </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarForm;

import {
  addCars,
  removeCars,
  changeSerchItem,
  carReducer,
} from "./slices/carsSlice";
import { changeName, changeCost, formReducer } from "./slices/formSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    form: formReducer,
    car: carReducer,
  },
});
export { store, addCars, removeCars, changeSerchItem, changeName, changeCost };

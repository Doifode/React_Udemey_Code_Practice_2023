import { createSlice } from "@reduxjs/toolkit";
import { addCars } from "./carsSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
      //   console.log(state.name);
    },
    changeCost(state, action) {
      state.cost = action.payload;
      //   console.log(state.cost);
    },
  },
  extraReducers(builder) {
    builder.addCase(addCars, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});
export const { changeCost, changeName } = formSlice.actions;
export const formReducer = formSlice.reducer;

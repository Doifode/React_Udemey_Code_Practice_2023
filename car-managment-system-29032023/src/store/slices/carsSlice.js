import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {
    serchItem: "",
    data: [],
  },
  reducers: {
    changeSerchItem(state, action) {
      state.serchItem = action.payload;
      // console.log(action.payload)
    },
    addCars(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCars(state, action) {
      const update = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = update;
    },
  },
});
export const { changeSerchItem, addCars, removeCars } = carSlice.actions;
export const carReducer = carSlice.reducer;

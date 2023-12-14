import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";
import expensesReducer from "./expenses";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
    expenses: expensesReducer
  },
});

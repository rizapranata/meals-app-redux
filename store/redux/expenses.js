import { createSlice } from "@reduxjs/toolkit";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 57000,
    date: new Date("2023-12-12"),
  },
  {
    id: "e2",
    description: "A tshirt",
    amount: 27000,
    date: new Date("2023-11-17"),
  },
  {
    id: "e3",
    description: "A Book",
    amount: 45000,
    date: new Date("2023-11-19"),
  },
  {
    id: "e4",
    description: "Another book",
    amount: 45000,
    date: new Date("2023-12-20"),
  },
  {
    id: "e5",
    description: "Class Udemy",
    amount: 99000,
    date: new Date("2023-12-14"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 57000,
    date: new Date("2023-12-9"),
  },
  {
    id: "e7",
    description: "A tshirt",
    amount: 27000,
    date: new Date("2023-11-17"),
  },
  {
    id: "e8",
    description: "A Book",
    amount: 45000,
    date: new Date("2023-12-7"),
  },
  {
    id: "e9",
    description: "Another book",
    amount: 45000,
    date: new Date("2023-11-20"),
  },
  {
    id: "e10",
    description: "Class Udemy",
    amount: 99000,
    date: new Date("2023-12-10"),
  },
];

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expensesData: DUMMY_EXPENSES,
  },
  reducers: {
    addExpense: (state, action) => {
      console.log("add data:", action.payload.data);
      const id = new Date();
      state.expensesData.push({ ...action.payload.data, id: id });
    },

    removeExpense: (state, action) => {
      state.expensesData.splice(
        state.expensesData.indexOf(action.payload.id),
        1
      );
    },
  },
});

export const { addExpense, removeExpense } = expensesSlice.actions;

export default expensesSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
    date: new Date("2023-12-09"),
  },
];

const BASE_URL =
  "https://expense-app-36c12-default-rtdb.asia-southeast1.firebasedatabase.app";

export const fetchExpensesAsync = createAsyncThunk("expenses/get", async () => {
  const response = await axios.get(BASE_URL + "/expenses.json");
  const result = [];

  for(const key in response.data){
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description
    }
    result.push(expenseObj)
  }
  return result;
});

export const addExpenseAsync = createAsyncThunk(
  "expenses/post",
  async (payload) => {
    const response = await axios.post(BASE_URL + "/expenses.json", payload);
    return response.data;
  }
);

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expensesData: [],
    status: "idle",
  },
  reducers: {
    addExpense: (state, action) => {
      const id = Math.floor(Math.random() * 100).toString();
      state.expensesData.push({ ...action.payload.data, id: id });
    },

    updateExpense: (state, action) => {
      const id = action.payload.id;
      const updatableExpenseIndex = state.expensesData.findIndex(
        (item) => item.id === id
      );
      const updatableExpense = state.expensesData[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      state.expensesData[updatableExpenseIndex] = updatedItem;
    },

    removeExpense: (state, action) => {
      const ableDeleteExpense = state.expensesData.findIndex(
        (item) => item.id === action.payload.id
      );

      state.expensesData.splice(ableDeleteExpense, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpensesAsync.pending, (state, action) => {
        state.status = "loading...";
      })
      .addCase(fetchExpensesAsync.fulfilled, (state, action) => {
        state.expensesData = action.payload;
        state.status = "idle";
      })
      .addCase(fetchExpensesAsync.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const { addExpense, removeExpense, updateExpense } =
  expensesSlice.actions;

export default expensesSlice.reducer;

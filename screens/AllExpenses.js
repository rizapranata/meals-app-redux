import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector, useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { fetchExpensesAsync, getExpenses } from "../store/redux/expenses";

function AllExpenses() {
  const { expensesData, status } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchExpensesAsync());
  }, [dispatch])

  return <ExpensesOutput expenses={expensesData} expensesPeriod="Total" />;
}

export default AllExpenses;

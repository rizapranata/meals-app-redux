import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useDispatch, useSelector } from "react-redux";
import { getDaysMinusDay } from "../util/date";
import { useLayoutEffect } from "react";
import { fetchExpensesAsync } from "../store/redux/expenses";

function RecentExpenses() {
  const { expensesData, status } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const recentExpenses = expensesData?.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDaysMinusDay(today, 7);

    return expense?.date > date7DaysAgo;
  });

  useLayoutEffect(() => {
    dispatch(fetchExpensesAsync())
  }, [dispatch]);

  return (
     <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
  );
}

export default RecentExpenses;

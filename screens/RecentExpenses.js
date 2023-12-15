import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";
import { getDaysMinusDay } from "../util/date";

function RecentExpenses() {
  const expensesList = useSelector((state) => state.expenses.expensesData);

  const recentExpenses = expensesList?.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDaysMinusDay(today, 7);

    return expense?.date > date7DaysAgo
  });

  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
  );
}

export default RecentExpenses;

import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";

function AllExpenses() {
  const expensesList = useSelector((state) => state.expenses.expensesData);

  return <ExpensesOutput expenses={expensesList} expensesPeriod="Total" />;
}

export default AllExpenses;

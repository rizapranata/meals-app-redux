import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 57000,
        date: new Date('2023-11-17')
    },
    {
        id: 'e2',
        description: 'A tshirt',
        amount: 27000,
        date: new Date('2023-11-17')
    },
    {
        id: 'e3',
        description: 'A Book',
        amount: 45000,
        date: new Date('2023-11-19')
    },
    {
        id: 'e4',
        description: 'Another book',
        amount: 45000,
        date: new Date('2023-11-20')
    },
    {
        id: 'e5',
        description: 'Class Udemy',
        amount: 99000,
        date: new Date('2023-11-10')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 57000,
        date: new Date('2023-11-17')
    },
    {
        id: 'e7',
        description: 'A tshirt',
        amount: 27000,
        date: new Date('2023-11-17')
    },
    {
        id: 'e8',
        description: 'A Book',
        amount: 45000,
        date: new Date('2023-11-19')
    },
    {
        id: 'e9',
        description: 'Another book',
        amount: 45000,
        date: new Date('2023-11-20')
    },
    {
        id: 'e10',
        description: 'Class Udemy',
        amount: 99000,
        date: new Date('2023-11-10')
    }
]

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 40,
        backgroundColor: GlobalStyles.colors.primary700
    }
})

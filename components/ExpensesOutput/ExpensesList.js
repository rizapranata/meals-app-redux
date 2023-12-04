import { FlatList, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />
}

function ExpensesList({ expenses }) {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ExpensesList;

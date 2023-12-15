import { StyleSheet, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit }) {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValue) => {
      return {
        ...curInputValue,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date.toString()),
      description: inputValues.description,
    };

    console.log("input values:", expenseData);

    onSubmit(expenseData);
  }

  return (
    <View>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>

      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

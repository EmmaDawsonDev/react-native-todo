import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [toDoArray, setToDoArray] = useState([]);

  const addToArrayHandler = (toDo) => {
    setToDoArray([...toDoArray, toDo]);
    console.log(toDo);
    console.log(toDoArray);
  };

  const deleteFromArrayHandler = (toDo) => {
    const newArray = toDoArray.filter((item) => item !== toDo);
    setToDoArray(newArray);
  };

  return (
    <View style={styles.container}>
      <ToDoInput addToArray={addToArrayHandler} />
      <ToDoList listItems={toDoArray} deleteItem={deleteFromArrayHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});

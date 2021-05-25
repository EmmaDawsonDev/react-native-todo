import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 280,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
  },
  delete: {
    backgroundColor: "teal",

    borderRadius: 100,
    padding: 10,
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const ToDoItem = ({ item, deleteItem }) => {
  const deleteToDoHandler = () => {
    console.log("I work!");
    deleteItem(item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
      <TouchableOpacity style={styles.delete} onPress={deleteToDoHandler}>
        <Text style={{ color: "white" }}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoItem;

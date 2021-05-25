import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 280,
  },
  inputField: {
    backgroundColor: "#e3e3e3",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
    fontSize: 20,
  },
});

const ToDoInput = (props) => {
  const [toDo, setToDo] = useState("");

  const pressHandler = () => {
    props.addToArray(toDo);
    setToDo("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={toDo}
        onChangeText={(text) => setToDo(text)}
      />
      <Button color={"teal"} title="Add" onPress={pressHandler} />
    </View>
  );
};

export default ToDoInput;

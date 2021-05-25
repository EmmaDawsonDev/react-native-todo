import React from "react";
import { ScrollView } from "react-native";

import ToDoItem from "./ToDoItem";

const ToDoList = ({ listItems, deleteItem }) => {
  return (
    <ScrollView>
      {listItems.map((item, index) => (
        <ToDoItem key={index} item={item} deleteItem={deleteItem} />
      ))}
    </ScrollView>
  );
};

export default ToDoList;

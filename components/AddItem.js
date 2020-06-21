import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddItem = ({ title, addItem }) => {
  const [text, setText] = useState("");

  const onChange = (text) => setText(text);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginHorizontal: "10%",
    marginBottom: 5,
  },
  input: {
    height: 90,
    paddingTop: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#ff9234",
    padding: 14,
    borderRadius: 6,
  },
  btnText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default AddItem;

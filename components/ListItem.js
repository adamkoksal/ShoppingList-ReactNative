import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <View style={styles.parent}>
          <Text style={styles.listItemText}>{item.text}</Text>
          <Text style={styles.x} onPress={() => deleteItem(item.id)}>
            X
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 7,
  },
  listItemView: {
    alignItems: "center",
    marginHorizontal: "10%",
    borderRadius: 6,
    borderWidth: 4,
    borderColor: "#fdbb00",
    backgroundColor: "#fdbb00",
  },
  listItemText: {
    height: 60,
    width: "90%",
    paddingTop: "4.2%",
    color: "white",
    textAlign: "center",
    fontSize: 27,
    fontWeight: "bold",
  },
  parent: {
    flex: 1,
    flexDirection: "row",
  },
  x: {
    marginTop: "6%",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default ListItem;

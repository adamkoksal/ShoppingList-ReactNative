import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "Shopping List",
};

const styles = StyleSheet.create({
  header: {
    height: 90,
    padding: 15,
  },
  text: {
    marginTop: 20,
    marginHorizontal: "10%",
    fontSize: 25,
    textAlign: "left",
    fontWeight: "bold",
  },
});

export default Header;

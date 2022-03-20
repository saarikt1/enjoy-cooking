import React from "react";
import { View, StyleSheet } from "react-native";

const Header = () => (
  <View style={styles.padding}>
    <View style={styles.line} />
  </View>
);

const styles = StyleSheet.create({
  padding: {
    paddingTop: 24,
    paddingBottom: 24,
    width: "100%",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#999999",
  },
});

export default Header;

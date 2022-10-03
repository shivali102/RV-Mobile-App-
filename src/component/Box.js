import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
const Box = (props) => {
  const { placeholder } = props;
  return (
    <View style={styles.TextStyle}>
      <TextInput style={{ paddingLeft: 10 }} placeholder={placeholder} />
    </View>
  );
};
const styles = StyleSheet.create({
  TextStyle: {
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderRadius: 8,
    marginBottom: 20,
    height: 40,
  },
});
export default Box;
